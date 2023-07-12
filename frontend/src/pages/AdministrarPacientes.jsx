import Formulario from "../components/Formulario";
import ListadoPacientes from "../components/ListadoPacientes";

import { useState } from "react";

const AdministrarPacientes = () => {
  const [mostrarFormulario, setNostrarFormulario] = useState(false);

  return (
    <div className="flex flex-col md:flex-row">
      <button
        type="button"
        className="bg-indigo-600 text-white uppercase font-bold mx-10 p-3 rounded-md md:hidden"
        onClick={() => setNostrarFormulario(!mostrarFormulario)}
      >
        {mostrarFormulario ? "Ocutar Formulario" : "Mostrar Formulario"}
      </button>
      <div
        className={`${
          mostrarFormulario ? "block" : "hidden"
        } md:block md:w-1/2 lg:w-2/5`}
      >
        <Formulario />
      </div>
      <div className="md:w-1/2 lg:h-3/5">
        <ListadoPacientes />
      </div>
    </div>
  );
};

export default AdministrarPacientes;
