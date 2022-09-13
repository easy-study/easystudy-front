import React from "react";
import "./CreateCourses.css";
import { useState } from 'react';
import { CoursesContext } from "./CoursesContext";
import { useContext } from "react";

export default function CreateCourses() {
    const [duracao, setDuracao] = useState("")
    const [name, setName] = useState("")
    const [inicio, setInicio] = useState("")
    const [fim, setFim] = useState("")
    const { create, list } = useContext(CoursesContext);
    const lista = list();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            curso: name,
            duracao,
            inicio,
            fim
        };
        await create(data);
        alert("Curso criado com sucesso!");
    };

    return (
        <div className="my-courses">
            <div className="my-courses-login">
                <div className="wrap-form">
                    <form onSubmit={handleSubmit} className="login-form">
                        <span className="form-title2" >Criar Curso</span>
                        <span className="form-title2">


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
                                    type="name"
                                    value={duracao}
                                    onChange={e => setDuracao(e.target.value)}
                                />
                                <span className="focus-input" data-placeholder="Duração do Curso"></span>
                            </div>

                            <div className="wrap-input">
                                <input
                                    className={inicio !== "" ? 'has-val input' : 'input'}
                                    type="date"
                                    value={inicio}
                                    onChange={e => setInicio(e.target.value)}
                                />
                                <span className="focus-input" data-placeholder="Data Inicial"></span>
                            </div>

                            <div className="wrap-input">
                                <input
                                    className={fim !== "" ? 'has-val input' : 'input'}
                                    type="date"
                                    value={fim}
                                    onChange={e => setFim(e.target.value)}
                                />
                                <span className="focus-input" data-placeholder="Data Final"></span>
                            </div>

                            <div className="container-login-form-btn">
                                <button type="submit" className="login-form-btn"> Criar Curso</button>
                            </div>

                        </span>
                    </form>

                </div>

            </div>
        </div>
    )
}
