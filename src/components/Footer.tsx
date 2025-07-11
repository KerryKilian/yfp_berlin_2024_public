import React from 'react';

import { getIntl } from '@/lib/intl';

type FooterProps = {
    locale: string;
  }

const Footer = async ({locale}: FooterProps) => {
  const intl = await getIntl(locale);

  return (
    <footer className="footer">
      <p>{intl.formatMessage({ id: "footer.creator" })}</p>
    </footer>
  );
};

export default Footer;