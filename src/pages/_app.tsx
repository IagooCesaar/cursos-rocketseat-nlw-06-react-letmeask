import type { AppProps } from 'next/app'
import React from 'react';

import { AuthProvider } from '../contexts/AuthContext';

import '../services/firebase'
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
export default MyApp
