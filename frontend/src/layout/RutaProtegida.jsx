import { Outlet } from "react-router-dom";
const RutaProtegida = () => {
  return (
    <>
      <div> Desde RutaProtegida</div>
      <Outlet />
    </>
  );
};

export default RutaProtegida;
