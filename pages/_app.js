import { Provider } from 'react-redux';
import {store, wrapper} from '@/components/store'
import '@/styles/globals.css'
import Navbar from '@/components/templates/Navbar/Navbar'
import Footer  from '@/components/templates/Footer/Footer';



const App = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>

        <Navbar/>
        
        <Component {...pageProps} />
        
        <Footer/>
        
      </Provider>
    </>

  )
}

export default wrapper.withRedux(App);
