import React from "react";
import "./CadastrarAlunos.css";

import Alert from "@mui/material/Alert"

export default function CadastrarAlunos() {
  return (
    <div className="my-courses">
      <h2 className="section-title">Cadastrar Alunos</h2>

      <Alert className="alert-card" severity="info">
        <p className="alert-text"> Atualize ou crie alunos </p>
      </Alert>
    </div>
  )
}