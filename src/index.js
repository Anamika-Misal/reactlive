import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import About from './About';
import Contact from './Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import Search from './Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    <Menu/>
    
    <Routes>
        
      <Route path="/About" element={<About />} />
      <Route path="/" element={<Contact />} />
    </Routes>
  <Search/>

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
