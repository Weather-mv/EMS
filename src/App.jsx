import React, { useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployerDashboard from "./components/Dashboard/EmployerDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localstorage";

const App = () => {
  useEffect(() => {
    // setLocalStorage();
    getLocalStorage();
  });

  return (
    <>
      <Login />
      {/* <EmployerDashboard /> */}
      {/* <AdminDashboard/> */}
    </>
  );
};

export default App;
