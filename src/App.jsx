import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Sports from "./pages/Sports";
import SportDetails from "./pages/SportDetails";
import Login from './login/Login';
import Dashboard from "./login/Dashboard";
import ProtectedRoute from "./login/ProtectedRoute";
import Footer from './components/Footer';
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
