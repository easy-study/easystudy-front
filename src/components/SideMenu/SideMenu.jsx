import * as React from 'react';
import { home, courses, support } from "../../assets/icons/icons";
import { NavLink } from "react-router-dom";
import "./SideMenu.css";

function SideMenu() {

  return (
    <aside>
      <h1 className="logo">Easy Study</h1>
    
      <nav>
        <div className="top">
          <NavLink to="" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><img src={home} alt="home" />Início</NavLink>
          <NavLink to="meus-cursos" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><img src={courses} alt="courses" />Meus Cursos</NavLink>
          <NavLink to="suporte" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><img src={support} alt="support" />Suporte</NavLink>
          <NavLink to="cadastrar-cursos" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><img src={courses} alt="courses" />Cadastrar Cursos</NavLink>
          {true? <NavLink to="cadastrar-alunos" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><img src={courses} alt="courses" />Cadastrar Alunos</NavLink>: null }

        </div>

        <div className="bottom">
        {/* <NavLink to="configuracoes" className=""><img src={settings} alt="settings" />Configurações</NavLink> */}
        </div>
      </nav>
    </aside>
  );
}

export default SideMenu;
