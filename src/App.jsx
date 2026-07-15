import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import './App.css'

function App() {
  
  return (
   <BrowserRouter>
      <Header />
      <Hero/>
      <Footer />
   </BrowserRouter>
  )
}

export default App
