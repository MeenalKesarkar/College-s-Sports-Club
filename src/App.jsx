import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Sports from "./Sports";
import SportDetails from "./SportDetails";
import Footer from './Footer';
import './App.css'

function App() {
  return (
   <BrowserRouter>
      <Header />
        <Routes>

  <Route
    path="/"
    element={<Home />}
  />

  <Route
    path="/about"
    element={<About />}
  />

  <Route
    path="/sports"
    element={<Sports />}
  />

  <Route
    path="/sports/:sport"
    element={<SportDetails />}
  />

</Routes>
      <Footer />
   </BrowserRouter>
  )
}

export default App
