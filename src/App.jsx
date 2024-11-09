// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Pricing from './components/Pricing'

function App() {

  return (
    <>
      <div id='main' className='d-flex flex-column justify-content-center align-items-center'>
        <Header/>
        <Features/>
        <Pricing/>
        <Footer/>
      </div>
    </>
  )
}

export default App
