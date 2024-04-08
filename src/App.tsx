//import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
//import { Button, Form } from 'react-bootstrap';
//import { ButtonToPages } from './ButtonToPages';
import { LocalLink } from './LocalLink';
import { Home } from './Home';

import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/LocalLink" element={<LocalLink/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
