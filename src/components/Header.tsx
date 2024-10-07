"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { LinearProgress } from '@mui/material';
import { i18n } from 'i18n-config';

import { getIntl } from "@/lib/intl";

type HeaderProps = {
  locale: string;
  // intl: any;
}

export default function Header({locale}: HeaderProps) {
// export default function Header() {
  const [intl, setIntl] = useState<any>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { locales, defaultLocale } = i18n;
  // const intl = await getIntl(locale);
// export default async function Header({ locale }: HeaderProps) {
  const [navOpen, setNavOpen] = useState(false);
  // const intl = await getIntl(locale);
  
  const toggleNav = () => {
    setNavOpen(!navOpen);
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    async function loadTranslations() {
      const loadedIntl = await getIntl(locale);
      setIntl(loadedIntl);
    }
    loadTranslations();
  }, [locale]);

  

  if (!intl) {
    return <LinearProgress color="success" />
  }

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
        {/* <Image
        src="/img/yfp_logo.png"
        alt="YFP Logo"
        width={80}
        height={40}
        className="yfp_logo_header rounded"
      />
      <Image
        src="/img/sant-egidio-logo.jpg"
        alt="YFP Logo"
        width={80}
        height={40}
        className="yfp_logo_header rounded"
      /> */}
      
      <div className="burger" onClick={toggleNav}>
        ☰
      </div>
      </div>
      
      <nav className={`nav ${navOpen ? "open" : ''}`}>
      {/* {navOpen || <Image
        src="/img/yfp_logo.png"
        alt="YFP Logo"
        width={80}
        height={40}
        className="header__logo"
      />}
      {navOpen || <Image
        src="/img/sant-egidio-logo.jpg"
        alt="YFP Logo"
        width={100}
        height={40}
        className="header__logo"
      />} */}
        <Link href={`/${locale}/program`} >
          <div className='nav-item' onClick={toggleNav}>
            {intl.formatMessage({ id: "header.program" })}
          </div>
        </Link>
        <Link href={`/${locale}/subscribe`}>
          <div className='nav-item' onClick={toggleNav}>{intl.formatMessage({ id: "header.subscribe" })}</div>
        </Link>
        <Link href={`/${locale}/unsubscribe`}>
          <div className='nav-item' onClick={toggleNav}>{intl.formatMessage({ id: "header.unsubscribe" })}</div>
        </Link>
        <Link href={`/${locale}/berlin`}>
          <div className='nav-item' onClick={toggleNav}>{intl.formatMessage({ id: "header.berlin" })}</div>
        </Link>
        <Link href={`/${locale}/downloads`}>
          <div className='nav-item' onClick={toggleNav}>{intl.formatMessage({ id: "header.files" })}</div>
        </Link>
        
        {/* <div> */}
 
        <div className="language-selector nav-item">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
            <Image
                        src={`/img/${locale}.png`}
                        alt={`${locale} flag`}
                        width={40}
                        height={40}
                        className="language__flag"
                      /> ▼
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                {locales.sort().map((loc) => (
                  <Link key={loc} href={loc === defaultLocale ? "/" : `/${loc}`} onClick={toggleNav}>
                    <li className="dropdown-item">
                      <Image
                        src={`/img/${loc}.png`}
                        alt={`${loc} flag`}
                        width={40}
                        height={40}
                        className="language__flag"
                      />
                      {/* <p>{loc.toUpperCase()}</p> */}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        {/* </div> */}
      </nav>
    </header>
    </>
    
    
  );
};
  
