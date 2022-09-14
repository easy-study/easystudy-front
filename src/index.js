import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./auth/AuthContext";
import { Login } from "./login"
import { Register } from "./register";
import './index.css';
import './responsive.css';
import Home from './components/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/cursos' element={<Home />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>
);
