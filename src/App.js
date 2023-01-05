import React, { Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.js"
import Home from "./pages/Home.js";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Projects from "./pages/Projects.js";

// import { useParams } from "react-router-dom";

// import data from "./components/Data"
// import './scss/App.scss';
import "./App.css";
import { useState } from "react";


function App() {
  // const { id } = useParams();

 

  return (
    
    <Router>
      <ScrollToTop />
        <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/project/:id" element={<Projects />} />
          <Route exact path="*" element={<Home />}/>
        </Routes>
        <Footer />
        </Router>
  );
}

export default App;
