import '../styles/global.css';

import React from 'react';
import { ChanllengesProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChanllengesProvider>
        <Component {...pageProps} />
    </ChanllengesProvider>
  )
}

export default MyApp
