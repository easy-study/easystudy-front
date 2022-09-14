import * as React from 'react';
import { home, courses, support } from "../../assets/icons/icons";
import { NavLink } from "react-router-dom";
import "./SideMenu.css";

function SideMenu() {
  const isAdmin = localStorage.getItem("@Auth:isAdmin") === "true";
  console.log (isAdmin)

  return (
    <aside>
      <h1 className="logo">Easy Study</h1>
    
      <nav>
        <div className="top">
          <NavLink to="cursos" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><img src={home} alt="home" />Início</NavLink>
          <NavLink to="meus-cursos" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><img src={courses} alt="courses" />Meus Cursos</NavLink>
          <NavLink to="suporte" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><img src={support} alt="support" />Suporte</NavLink>
          {isAdmin? <NavLink to="cadastrar-cursos" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><img src={courses} alt="courses" />Cadastrar Cursos</NavLink>: null}
          <NavLink to="listar-cursos" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><img src={courses} alt="courses" />Listar Cursos</NavLink>

        </div>

        <div className="bottom">
        {/* <NavLink to="configuracoes" className=""><img src={settings} alt="settings" />Configurações</NavLink> */}
        </div>
      </nav>
    </aside>
  );
}

export default SideMenu;
