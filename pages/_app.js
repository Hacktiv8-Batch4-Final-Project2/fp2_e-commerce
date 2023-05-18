import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import {store, wrapper} from '@/components/store'
import '@/styles/globals.css'
import Navbar from '@/components/templates/Navbar/Navbar'
import Footer  from '@/components/templates/Footer/Footer';



const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const showHeader = router.pathname === '/login' || router.pathname === '/register' || router.pathname === '/forgot-password' || router.pathname === '/reset-password' ? false : true;

  return (
    <>
      <Provider store={store}>

        {showHeader && <Navbar/>}
        
        <Component {...pageProps} />
        
        {showHeader && <Footer/>}
        
      </Provider>
    </>

  )
}

export default wrapper.withRedux(App);
