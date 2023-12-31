import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Game } from './components/Game';
import { Home } from './components/Home';
import { Header } from './components/layouts/Header';
import { Footer } from './components/layouts/Footer';

function App() {
  return (
      <Router>
      <Header />
      <div className="flex justify-center items-center h-[desired-height]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
