import React from "react";
import "./RecommendedCourses.css";
import Card from "../Card/Card"

export default function RecommendedCourses() {
  return (
    <div className="recommended-courses">
      <h2 className="section-title">Cursos que podem ser do seu interesse</h2>

      <Card name="Introdução ao Python" image="https://cdn.programadoresbrasil.com.br/wp-content/uploads/2021/04/rxezjyf4ojx41-1140x694.png"/>
      <Card name="Desenvolvimento iOS" image="https://miro.medium.com/max/930/0*7EdVxkhJ-e5Z5vC-.png"/>
    </div>
  )
}