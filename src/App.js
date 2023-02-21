import { Routes, Route } from "react-router"
import Homepage from "./components/homepage"
import About from "./components/about"
import Services from "./components/services"
import Portfolio from "./components/portfolio"
import Contact from "./components/contact"
import './global.css'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} exact />
        <Route path='/about' element={<About />} exact />
        <Route path='/services' element={<Services />} exact />
        <Route path='/portfolio' element={<Portfolio />} exact />
        <Route path='/contact' element={<Contact />} exact />
      </Routes>
    </div>
  );
}

