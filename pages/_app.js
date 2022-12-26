import '../styles/globals.css'
import { StoreProvider } from '../dat/Store.js'

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp;