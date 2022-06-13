import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./auth/AuthContext";
import { Login } from "./login"
import { Register } from "./register";

export const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
    );
  };

export const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};