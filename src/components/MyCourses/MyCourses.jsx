import React from "react";
import "./MyCourses.css";

import Alert from "@mui/material/Alert"

export default function MyCourses() {
  return (
    <div className="my-courses">
      <h2 className="section-title">Seus cursos em andamento</h2>

      <Alert className="alert-card" severity="info">
        <p className="alert-text">Você ainda não adicionou nenhum curso à sua conta :(</p>
      </Alert>
    </div>
  )
}