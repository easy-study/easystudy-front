import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { api } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadingStoreData = () => {
      const storageUser = localStorage.getItem("@Auth:user");
      const storageToken = localStorage.getItem("@Auth:token");

      if (storageUser && storageToken) {
        setUser(storageUser);
      }
    };
    loadingStoreData();
  }, []);

  const signIn = async ({ email, password }) => {
    try {
      const response = await api.post("/users/login", { email, password });

      setUser(response.data);
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;

      localStorage.setItem("@Auth:user", JSON.stringify(response.data.user));
      localStorage.setItem("@Auth:token", response.data.token);
    } catch (error) {
      console.log(error);
      alert("Email e/ou senha incorreto ou não cadastrado.");
    }
  };

  const singOut = () => {
    localStorage.clear();
    setUser(null);
    return <Navigate to="/" />;
  };

  const create = async ({ nome, email, password}) => {
    try {
      const response = await api.post("/users/create", { nome, email, password });
      
    } catch (error) {
      console.log(error);
      alert("Erro ao criar conta");
    }
  }


  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        singOut,
        signed: !!user,
        create,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
    };