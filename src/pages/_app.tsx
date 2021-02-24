import '../styles/global.css';

import { ChanllengesProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChanllengesProvider>
      <Component {...pageProps} />
    </ChanllengesProvider>
  )
}

export default MyApp
