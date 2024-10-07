// import "server-only";

import { createIntl } from "@formatjs/intl";
import type { Locale } from "i18n-config";

export async function getIntl(locale: Locale) {
  return createIntl({
    locale: locale,
    messages: (await import(`../lang/${locale}.json`)).default,
  });
}

export function getDirection(locale: Locale) {
  switch (locale) {
    // case "ar":
    //   return "rtl";
    case "de":
    case "en":
    case "it":
    case "nl":
    case "hu":
    case "es":
    case "ua":
    case "po":
    case "fr":
      return "ltr";
  }
}
