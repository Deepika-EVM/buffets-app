// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Home from './Pages/Home'
import ContactUs from './Pages/ContactUs'
import Account from './Pages/Account'
import Aboutus from "./Pages/Aboutus";
import Header from "./Pages/Header";

function App() {
  return (
    <Router>
          <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/accountpage" element={<Account />} />
      </Routes>
    </Router>
  )
}

export default App