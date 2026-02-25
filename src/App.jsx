// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import './Headerdetials/Header.css'
import './Homepagedetials/Homedetials.css'

import Home from './Headerdetials/Home'
import ContactUs from './Headerdetials/ContactUs'
import Account from './Headerdetials/Account'
import Aboutus from "./Headerdetials/Aboutus";
import Header from "./Headerdetials/Header";

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