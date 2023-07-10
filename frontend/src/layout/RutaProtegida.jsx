import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
// import { useState } from "react";

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();

  console.log(auth);
  console.log(cargando);

  if (cargando) return "cargando...";

  return (
    <>
      <div> Desde RutaProtegida</div>
      {auth?._id ? <Outlet /> : <Navigate to="/" />}
    </>
  );
};

export default RutaProtegida;
