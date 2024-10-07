"use client";

import React, { useEffect, useState } from 'react';

import { LinearProgress } from '@mui/material';

import { getIntl } from '@/lib/intl';

type FooterProps = {
    locale: string;
  }

const Footer = ({locale}: FooterProps) => {
    const [intl, setIntl] = useState<any>(null);
    useEffect(() => {
        async function loadTranslations() {
          const loadedIntl = await getIntl(locale);
          setIntl(loadedIntl);
        }
        loadTranslations();
      }, [locale]);

      if (!intl) {
        return <div><LinearProgress color="success" /></div>
      }
  return (
    <footer className="footer">
      <p>{intl.formatMessage({ id: "footer.creator" })}</p>
    </footer>
  );
};

export default Footer;