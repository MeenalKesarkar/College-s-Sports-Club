import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import './App.css'

function App() {
  return (
   <BrowserRouter>
      <Header />
      <Home />
      <Footer />
   </BrowserRouter>
  )
}

export default App
