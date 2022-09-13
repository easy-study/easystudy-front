import React, { useContext } from "react";
import "./ListarCursos.css";

import Alert from "@mui/material/Alert"
import { CoursesContext } from "../CreateCourses/CoursesContext";

export default function ListarCursos() {
  const { list } = useContext(CoursesContext);
  const courses = list();

  return (
    <div className="my-courses">
      <h2 className="section-title">Listar Cursos</h2>

    </div>
  )
}