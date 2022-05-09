import '../styles/globals.css';
import type { AppProps } from 'next/app';

// React
import React, { useState, useEffect } from 'react';
// Components
import Header from '@/components/Header';
// Contexts
import { LanguageProvider, LanguageContext } from '@/contexts/LanguageContext';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [reRender, setReRender] = useState(false);

  useEffect(() => {
    setReRender(true);
  }, []);

  return (
    <LanguageProvider>
      <Header />
      <LanguageContext.Consumer>
        { (locale) => (reRender && <Component {...pageProps} {...locale} />)}
      </LanguageContext.Consumer>
    </LanguageProvider>
  )
}

export default MyApp
