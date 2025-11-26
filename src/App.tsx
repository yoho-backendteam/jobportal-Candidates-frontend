import { Routes } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { appRoutes } from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <AuthProvider>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>{appRoutes}</Routes>
      </AuthProvider>
    </>
  );
};

export default App;
