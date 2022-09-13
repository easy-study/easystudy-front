import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideMenu from './components/SideMenu/SideMenu';
import MobileMenu from './components/MobileMenu/MobileMenu';
import TopBar from './components/TopBar/TopBar';
import MyCourses from './components/MyCourses/MyCourses';
import RecommendedCourses from './components/RecommendedCourses/RecommendedCourses';
import Suporte from './components/Suporte/Suporte';
import CreateCourses from './components/CreateCourses/CreateCourses';
import CadastrarAlunos from './components/CadastrarAlunos/CadastrarAlunos';
import { AuthProvider } from "./auth/AuthContext";
import { Login } from "./login"
import { Register } from "./register";
import './index.css';
import './responsive.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const token = localStorage.getItem("@Auth:token");
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <div className="container">
          <SideMenu />
          <div className='main'>
            <MobileMenu />
            <TopBar />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path='/cursos' element={<RecommendedCourses />} />
              <Route path='/meus-cursos' element={<MyCourses />} />
              <Route path='/suporte' element={<Suporte />} />
              <Route path='/cadastrar-cursos' element={<CreateCourses />} />
              <Route path='/cadastrar-alunos' element={<CadastrarAlunos />} />
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>
);
