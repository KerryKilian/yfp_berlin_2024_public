"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { LinearProgress } from '@mui/material';
import { i18n } from 'i18n-config';

import { getIntl } from "@/lib/intl";
import { usePathname } from 'next/navigation';
import { useTranslations } from '@/contexts/TranslationProvider';

type HeaderProps = {
  locale: string;
}

export default function Header({locale}: HeaderProps) {
  const { intl, loading } = useTranslations(); 

// export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { locales, defaultLocale } = i18n;
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname(); 

  const getPathWithoutLocale = (currentPath: string) => {
    // Entferne aktuelle Locale aus dem Pfad
    const pathSegments = currentPath.split('/').filter(Boolean);
    if (locales.includes(pathSegments[0])) {
      return '/' + pathSegments.slice(1).join('/');
    }
    console.log(currentPath)
    return currentPath;
  };

  const getLocaleUrl = (targetLocale: string) => {
    const pathWithoutLocale = getPathWithoutLocale(pathname!);
    
    return `/${targetLocale}${pathWithoutLocale}`;
  };
  
  const toggleNav = () => {
    setNavOpen(!navOpen);
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
    <div className='header__logos'>
    <Image 
      src="/img/yfp_logo.png"
        alt="YFP Logo"
        width={300}
        height={200}
        className="rounded header__logo">
        
      </Image>
      <Image 
      src="/img/sant-egidio-logo.jpg"
        alt="Sant Egidio Logo"
        width={300}
        height={200}
        className="rounded header__logo">
        
      </Image>
      <Image 
      src="/img/berlin_logo.png"
        alt="Berlin Logo"
        width={300}
        height={200}
        className="rounded header__logo">
        
      </Image>
    </div>
    
    <header className='header'>
      <div className='header__mobile'>
      <div className="burger" onClick={toggleNav}>
        ☰
      </div>
      </div>
      <nav className={`nav ${navOpen ? "open" : ''}`}>
        <Link href={`/${locale}/program`} >
          <div className='nav-item' onClick={toggleNav}>
            {loading ? "" : intl!.formatMessage({ id: "header.program" })}
          </div>
        </Link>
        <Link href={`/${locale}/subscribe`}>
          <div className='nav-item' onClick={toggleNav}>{loading ? "" : intl!.formatMessage({ id: "header.subscribe" })}</div>
        </Link>
        <Link href={`/${locale}/unsubscribe`}>
          <div className='nav-item' onClick={toggleNav}>{loading ? "" : intl!.formatMessage({ id: "header.unsubscribe" })}</div>
        </Link>
        <Link href={`/${locale}/berlin`}>
          <div className='nav-item' onClick={toggleNav}>{loading ? "" : intl!.formatMessage({ id: "header.berlin" })}</div>
        </Link>
        <Link href={`/${locale}/downloads`}>
          <div className='nav-item' onClick={toggleNav}>{loading ? "" : intl!.formatMessage({ id: "header.files" })}</div>
        </Link>
        
        {/* <div> */}
 
        <div className="language-selector nav-item">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
            <Image
                        src={`/img/${locale}.png`}
                        alt={`${locale} flag`}
                        width={40}
                        height={27}
                        className="language__flag"
                      /> ▼
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                {locales.sort().map((loc) => {
                  return (
                    <Link key={loc} href={getLocaleUrl(loc)} onClick={toggleNav}>
                      <li className="dropdown-item">
                        <Image
                          src={`/img/${loc}.png`}
                          alt={`${loc} flag`}
                          width={40}
                          height={27}
                          className="language__flag"
                        />
                      </li>
                    </Link>
                  );
                })}
              </ul>
            )}
          </div>
      </nav>
    </header>
    </>
    
    
  );
};
  
