import * as React from "react";
import "./TopBar.css";
import {menu, user} from "../../assets/icons/icons";
export default function TopBar() {

  return (
    <>
      <div className="topbar">
      <div><img className="menu-btn" src={menu} alt="menu" /></div>
        <p className="user-welcome">Bem vindo de volta!</p>
        <img className="user-image" src={user} alt="imagem do usuário"></img>
      </div>
    </>
  )
} 