
import { useState } from 'react';
import loginIMG from './assets/login.svg'
import { AuthContext } from "./auth/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

import './styles.css'

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signIn, signed } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    await signIn(data);
  };

  if (!signed) {

    return (
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form onSubmit={handleSubmit} className="login-form">
              <span className="login-form-title">Bem Vindo!</span>
              <span className="login-form-title">
                <img src={loginIMG} alt="Homem abrindo uma porta" />
              </span>

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
                <button type="submit" className="login-form-btn"> Login</button>
              </div>

              <div className="text-center">
                <span className="txt1"> Não possui conta?</span>
                <a className='txt2' href="#"> Criar conta

                </a>

              </div>

            </form>
          </div>
        </div>
      </div>

    );
  } else {
    return <Navigate to="/home" />;
  }
}
