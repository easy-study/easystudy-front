import React, { useContext } from "react";
import "./ListarCursos.css";

import { CoursesContext } from "../CreateCourses/CoursesContext";

export default function ListarCursos() {
  const { list } = useContext(CoursesContext);

  const courses = list().then((response) => response.data).catch(err => console.log(err));
  // list().then(
  //   (list) => {
  //     console.log(list)
  //     courses = list
  //   }
  // );
  console.log("Type: "+ typeof (courses))
  console.log(courses)

  return (
    <div className="my-courses">
      <h2 className="section-title">Listar Cursos</h2>
      {courses.map((c, i) => {
        console.log("Entered");

        return (<h3>c.curso</h3>)
      })}

    </div>
  )
}