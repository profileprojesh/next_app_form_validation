import '../styles/globals.css'
import Navbar  from '../components/Navbar'
import {UserProvider} from '../userContext'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <UserProvider>
    <Navbar/>
  <div className="container">
   <Component {...pageProps} />
  </div>
  </UserProvider>
  </>
  )
}


export default MyApp
