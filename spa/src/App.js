import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';

const App = () => (
  <>
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/etc"> 주소창에 /etc라고 노출될거야 </Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/etc" element={<h2>호출됨</h2>} />
      </Routes>
    </div>
  </>
);

export default App;
