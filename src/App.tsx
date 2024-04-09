//import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
//import { Button, Form } from 'react-bootstrap';
//import { ButtonToPages } from './ButtonToPages';
import { LocalLink } from './LocalLink';
import { Home } from './Home';

import { HashRouter, Routes, Route } from "react-router-dom";
import BasicQuestions from "./BasicQuestions";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LocalLink" element={<LocalLink />} />
        <Route path="/BasicQuestions" element={<BasicQuestions />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
