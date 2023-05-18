import {store, wrapper} from '@/components/store'
import '@/styles/globals.css'
import Navbar from '@/components/templates/Navbar/Navbar'
import Footer  from '@/components/templates/Footer/Footer';



const App = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar/>
      
    
      <Component {...pageProps} />
      
      <Footer/>
      
    </>

  )
}

export default wrapper.withRedux(App);
