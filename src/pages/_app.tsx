import { StarredContextProvider } from '../hooks/starred-hook'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StarredContextProvider>
      <Component {...pageProps} />
    </StarredContextProvider>
  )
}

export default MyApp
