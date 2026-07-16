import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Sports from './Sports';
import Events from './Events';
import Footer from './Footer';
import './App.css'

function App() {
  return (
   <BrowserRouter>
      <Header />
      <Hero />
      <Sports />
      <Events />
      <Footer />
   </BrowserRouter>
  )
}

export default App
