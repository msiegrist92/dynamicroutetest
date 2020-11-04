//this stylesheet is applied globally
//app component serves as a wrapper for all pages
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
