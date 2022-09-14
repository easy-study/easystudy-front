import { useState } from 'react';
import { AuthContext } from "./auth/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import loginIMG from './assets/login.svg'


import './styles.css'


export const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const { create } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email,
            password,
        };
        await create(data);
        alert("Usuário criado com sucesso!");
    };

    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form onSubmit={handleSubmit} className="login-form">
                        <span className="login-form-title">Criar Conta</span>
                        <span className="login-form-title">
                            <img src={loginIMG} alt="Homem abrindo uma porta" />
                        </span>

                        <div className="wrap-input">
                            <input
                                className={name !== "" ? 'has-val input' : 'input'}
                                type="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Nome"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={email !== "" ? 'has-val input' : 'input'}
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Email"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={password !== "" ? 'has-val input' : 'input'}
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}

                            />
                            <span className="focus-input" data-placeholder="Password"></span>
                        </div>

                        <div className="container-login-form-btn">
                            <button type="submit" className="login-form-btn"> Criar conta</button>
                        </div>

                        <div className="text-center">
                            <span className="txt1"> Já possui conta?</span>
                            <a className='txt2' href="./login"> Fazer login

                            </a>

                        </div>

                    </form>
                </div>
            </div>
        </div>

    );
} 