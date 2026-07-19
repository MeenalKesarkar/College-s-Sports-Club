import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Sports from "./Sports";
import SportDetails from "./SportDetails";
import Login from './login/Login';
import Dashboard from "./login/Dashboard";
import ProtectedRoute from "./login/ProtectedRoute";
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

  <Route
    path="/login"
    element={<Login />}
  />

  <Route
    path="/dashboard"
    element={
        <ProtectedRoute>
            <Dashboard />
        </ProtectedRoute>
    }
/>

</Routes>
      <Footer />
   </BrowserRouter>
  )
}

export default App
