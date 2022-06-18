import '@/styles/globals.css';
import '@/styles/swiper.css';
import type { AppProps } from 'next/app';

// React
import React, { useState, useEffect } from 'react';
// Components
import Header from '@/components/Header';
// Contexts
import { LanguageProvider, LanguageContext } from '@/contexts/LanguageContext';
import { TrackingProvider } from '@/contexts/TrackingContext';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [reRender, setReRender] = useState(false);

  useEffect(() => {
    setReRender(true);
  }, []);

  return (
    <LanguageProvider>
      <Header />
      <TrackingProvider >
        <LanguageContext.Consumer>
            { (locale) => (reRender && <Component {...pageProps} {...locale} />)}
        </LanguageContext.Consumer>
      </TrackingProvider>
    </LanguageProvider>
  )
}

export default MyApp
