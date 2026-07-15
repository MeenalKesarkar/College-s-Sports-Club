import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './App.css'

function App() {
  
  return (
   <BrowserRouter>
      <Header />
      <Footer />
   </BrowserRouter>
  )
}

export default App
