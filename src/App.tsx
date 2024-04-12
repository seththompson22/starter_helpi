//import React, { useState } from 'react';
//import logo from './logo.svg';
import "./styles/App.css";
//import { Button, Form } from 'react-bootstrap';
//import { ButtonToPages } from './ButtonToPages';
import { LocalLink } from "./pages/LocalLink";
import { Home } from "./pages/Home";

import { HashRouter, Routes, Route } from "react-router-dom";
import BasicQuestions from "./pages/BasicQuestions";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starter_helpi" element={<Home />} />
        <Route path="/LocalLink" element={<LocalLink />} />
        <Route path="/BasicQuestions" element={<BasicQuestions />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
