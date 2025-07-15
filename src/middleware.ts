import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { match } from "@formatjs/intl-localematcher";
import type { I18nConfig } from "i18n-config";
import { i18n } from "i18n-config";
import Negotiator from "negotiator";

function getLocale(request: NextRequest, i18nConfig: I18nConfig): string {
  const { locales, defaultLocale } = i18nConfig;

  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  let response;
  let nextLocale;

  const { locales, defaultLocale } = i18n;
  const { basePath, pathname } = request.nextUrl;

  // Prüfe ob URL bereits eine Locale hat
  const pathLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathLocale) {
    // ✅ URL hat bereits eine Locale - einfach Cookie setzen und weiterleiten
    nextLocale = pathLocale;
    response = NextResponse.next();
    
    // Cookie setzen für aktuelle Locale
    response.cookies.set("NEXT_LOCALE", pathLocale, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365,
      path: '/'
    });
  } else {
    // ❌ URL hat KEINE Locale - redirect zu URL MIT Locale
    const isFirstVisit = !request.cookies.has("NEXT_LOCALE");
    
    // Bestimme welche Locale verwendet werden soll
    const locale = isFirstVisit 
      ? getLocale(request, i18n) 
      : request.cookies.get("NEXT_LOCALE")!.value || defaultLocale;

    // Konstruiere neue URL MIT Locale (auch für English!)
    let newPath = `/${locale}${pathname}`;
    if (request.nextUrl.search) newPath += request.nextUrl.search;

    const url = basePath + newPath;

    // ✅ Immer REDIRECT zu URL mit Locale (auch für English)
    response = NextResponse.redirect(new URL(url, request.url));
    nextLocale = locale;
    
    // Cookie setzen beim Redirect
    response.cookies.set("NEXT_LOCALE", locale, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365,
      path: '/'
    });
  }

  return response;
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|img/|favicon.ico).*)",
};


// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";

// import { match } from "@formatjs/intl-localematcher";
// import type { I18nConfig } from "i18n-config";
// import { i18n } from "i18n-config";
// import Negotiator from "negotiator";

// function getLocale(request: NextRequest, i18nConfig: I18nConfig): string {
//   const { locales, defaultLocale } = i18nConfig;

//   const negotiatorHeaders: Record<string, string> = {};
//   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

//   const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
//     locales
//   );

//   return match(languages, locales, defaultLocale);
// }

// export function middleware(request: NextRequest) {
//   let response;
//   let nextLocale;

//   const { locales, defaultLocale } = i18n;

//   const { basePath, pathname } = request.nextUrl;

//   const pathLocale = locales.find(
//     (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//   );

//   if (pathLocale) {
//     const isDefaultLocale = pathLocale === defaultLocale;
//     if (isDefaultLocale) {
//       let pathWithoutLocale = pathname.slice(`/${pathLocale}`.length) || "/";
//       if (request.nextUrl.search) pathWithoutLocale += request.nextUrl.search;

//       const url = basePath + pathWithoutLocale;

//       response = NextResponse.redirect(new URL(url, request.url));

//       response.cookies.set("NEXT_LOCALE", pathLocale, {
//         httpOnly: false,
//         secure: process.env.NODE_ENV === 'production',
//         sameSite: 'lax',
//         maxAge: 60 * 60 * 24 * 365,
//         path: '/'
//       });
//     }

//     nextLocale = pathLocale;
//   } else {
//     const isFirstVisit = !request.cookies.has("NEXT_LOCALE");

//     const locale = isFirstVisit ? getLocale(request, i18n) : request.cookies.get("NEXT_LOCALE")!.value || defaultLocale;

//     let newPath = `/${locale}${pathname}`;
//     if (request.nextUrl.search) newPath += request.nextUrl.search;

//     const url = basePath + newPath;

//     response =
//       locale === defaultLocale
//         ? NextResponse.rewrite(new URL(url, request.url))
//         : NextResponse.redirect(new URL(url, request.url));
//     nextLocale = locale;
//   }

//   if (!response) response = NextResponse.next();

//   // if (nextLocale) response.cookies.set("NEXT_LOCALE", nextLocale);
//   if (nextLocale && !response.cookies.get("NEXT_LOCALE")) {
//     response.cookies.set("NEXT_LOCALE", nextLocale, {
//       httpOnly: false,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'lax',
//       maxAge: 60 * 60 * 24 * 365,
//       path: '/'
//     });
//   }

//   return response;
// }

// export const config = {
//   matcher: "/((?!api|_next/static|_next/image|img/|favicon.ico).*)",
// };
