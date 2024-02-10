import logo from './logo.svg';
import './App.css';
import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from "./components/footer.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
          </Routes>
      </Router>
  );
}

export default App;
