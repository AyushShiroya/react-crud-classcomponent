
import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Blogs from "./About";
import Contact from "./Contact";
import Intro from './Intro';
import From from './from';
import Tabledata from './table';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Navbar />}>
          <Route index element={< From />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="intro" element={<Intro />} />
          <Route path="Table" element={<Tabledata />} />
          <Route path="/edit/:id" element={<From />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App