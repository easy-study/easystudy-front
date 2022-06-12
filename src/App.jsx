import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./auth/AuthContext";
import { Login } from "./login"

export const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
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