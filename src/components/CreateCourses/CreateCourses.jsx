import React from "react";
import "./CreateCourses.css";
import { useState } from 'react';
import { CoursesContext } from "./CoursesContext";
import { useContext } from "react";

import Alert from "@mui/material/Alert"

export default function CreateCourses() {
  return (
    <div className="my-courses">
      <h2 className="section-title">Cadastrar Cursos</h2>

      <Alert className="alert-card" severity="info">
        <p className="alert-text">Adicione ou edite os cursos </p>
      </Alert>
    </div>
  )
}
    // --------------------------------------------------------------------------------
    // ------------------------------------------------------

    export const CreateCurso = () => {
      const [duracao, setDuracao] = useState("")
      const [name, setName] = useState("")
      const { create } = useContext(CoursesContext);
  
      const handleSubmit = async (e) => {
          e.preventDefault();
          const data = {
              name,
              duracao,
          };
          await create(data);
          alert("Usuário criado com sucesso!");
      };
  
      return (
          <div className="container">
              <div className="container-login">
                  <div className="wrap-login">
                      <form onSubmit={handleSubmit} className="login-form">
                          <span className="login-form-title">Criar Curso</span>
                          <span className="login-form-title">
                             
  
                          <div className="wrap-input">
                              <input
                                  className={name !== "" ? 'has-val input' : 'input'}
                                  type="name"
                                  value={name}
                                  onChange={e => setName(e.target.value)}
                              />
                              <span className="focus-input" data-placeholder="Nome do Curso"></span>
                          </div>
  
                          <div className="wrap-input">
                              <input
                                  className={duracao !== "" ? 'has-val input' : 'input'}
                                  type="email"
                                  value={duracao}
                                  onChange={e => setDuracao(e.target.value)}
                              />
                              <span className="focus-input" data-placeholder="Duração do Curso"></span>
                          </div>                      
  
                          <div className="container-login-form-btn">
                              <button type="submit" className="login-form-btn"> Criar Curso</button>
                          </div>
  
                              </span>
                              </form>
  
                          </div>
  
                      </div>
                  </div>
      )}
