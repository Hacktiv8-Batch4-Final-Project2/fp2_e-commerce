import '@/styles/globals.css'
import Navbar from '@/components/templates/Navbar/Navbar'
import Footer  from '@/components/templates/Footer/footer';



const App = ({ Component, pageProps }) => {
  return (
    <>
    <Navbar/>
    
  
    <Component {...pageProps} />
    
    <Footer/>
    
    </>

  )
}

export default App;
