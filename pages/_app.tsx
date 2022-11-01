import { AppProps } from 'next/app';
import { Header } from '../modules/components/Header';
import React from 'react';
import '../styles/Global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
