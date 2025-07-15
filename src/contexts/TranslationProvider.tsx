"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { getIntl } from '@/lib/intl';
import type { Locale } from 'i18n-config';
import type { IntlShape } from '@formatjs/intl';

interface TranslationContextType {
  intl: IntlShape<string> | null;
  loading: boolean;
  locale: Locale;
}

const TranslationContext = createContext<TranslationContextType | null>(null);

export function TranslationProvider({ 
  children, 
  locale 
}: { 
  children: React.ReactNode;
  locale: Locale;
}) {
  const [intl, setIntl] = useState<IntlShape<string> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    
    async function loadTranslations() {
      try {
        setLoading(true);
        const loadedIntl = await getIntl(locale, controller.signal);
        if (!controller.signal.aborted) {
          setIntl(loadedIntl);
          setLoading(false);
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Failed to load translations:', error);
        }
      }
    }
    
    loadTranslations();
    
    return () => controller.abort();
  }, [locale]);

  return (
    <TranslationContext.Provider value={{ intl, loading, locale }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslations must be used within TranslationProvider');
  }
  return context;
}