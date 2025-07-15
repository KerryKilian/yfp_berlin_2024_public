import React from 'react';
import sights from 'data/sights';
import { Sight } from 'Resources';
import SightContainer from '@/components/SightContainer';
import { getIntl } from '@/lib/intl';

type BerlinProps = {
  params: { locale: string };
}

export default async function Berlin({ params }: BerlinProps) {
  const { locale } = params;
  
  const intl = await getIntl(locale);
  const localizedSights = sights[locale] || sights['en'];

  return (
    <div className='page'>
      <h1>{intl.formatMessage({ id: "berlin.title" })}</h1>
      <p className='sight__description'>{intl.formatMessage({ id: "berlin.description" })}</p>
      <div className='sights'>
        {localizedSights.map((sight, index) => (
          <SightContainer sight={sight} index={index} key={sight.name} />
        ))}
      </div>
    </div>
  );
}