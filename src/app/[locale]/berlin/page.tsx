"use client";

import React, { useEffect, useState } from 'react';

import LinearProgress from '@mui/material/LinearProgress';
import sights from 'data/sights';
import { Sight } from 'Resources';

import SightContainer from '@/components/SightContainer';

import { getIntl } from '@/lib/intl';

type BerlinProps = {
  params: { locale: string };
}

export default function Berlin({ params }: BerlinProps) {
  const { locale } = params;
  const [intl, setIntl] = useState<any>(null);
  const [localizedSights, setLocalizedSights] = useState<Sight[]>([]);

  useEffect(() => {
    async function loadTranslations() {
      const loadedIntl = await getIntl(locale);
      setIntl(loadedIntl);
      console.log(locale)
      const localizedSights = sights[locale] || sights['en'];
      setLocalizedSights(localizedSights);
      console.log(localizedSights);
    }
    loadTranslations();
  }, []);

  // useEffect(() => {
  //   const intl = await getIntl(locale);
  //   // Fallback auf Englisch, falls die Sprache nicht existiert
  //   const localizedSights = sights[locale] || sights['en'];
  //   setSights(localizedSights);
  // }, [locale]);
  if (!intl || !localizedSights) {
    return <div><LinearProgress color='success'/></div>
  }

    return (
      <div className='page'>
        
          <h1>{intl.formatMessage({ id: "berlin.title" })}</h1>
          <p className='sight__description'>{intl.formatMessage({ id: "berlin.description" })}</p>
          <div className='sights'>
            {localizedSights.map((sight, index) => (
                <SightContainer sight={sight} index={index} key={sight.name}></SightContainer>
                
            ))}
            {/* {localizedSights.map((sight, index) => (
        <div key={index} className="sight">
          <h2>{sight.name}</h2>
          <p>{sight.short}</p>
          <p>{sight.info}</p>
          <img src={sight.url} alt={sight.name} />
        </div>
      ))} */}
          </div>
            
      </div>
    );
  };
    
