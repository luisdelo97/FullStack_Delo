import { Outlet, Navigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";
// import { useState } from "react";

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();
  // console.log(cargando);
  // console.log(auth);
  if (cargando) return "cargando...";

  return (
    <>
      <Header />
      {auth?._id ? (
        <main className="container mx-auto mt-10">
          <Outlet />
        </main>
      ) : (
        <Navigate to="/" />
      )}

      <Footer />
    </>
  );
};

export default RutaProtegida;
