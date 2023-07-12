import usePacientes from "../hooks/usePacientes";

const Paciente = ({ paciente }) => {
  const { email, fecha, nombre, propietario, sintomas, _id } = paciente;

  const { setEdicion, eliminarPaciente } = usePacientes();

  const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);
    nuevaFecha.setMinutes(
      nuevaFecha.getMinutes() + nuevaFecha.getTimezoneOffset()
    );
    return new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format(
      nuevaFecha
    );
  };

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold uppercase text-indigo-700 my-2">
        nombre:
        <span className="font-normal normal-case text-black"> {nombre}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        email:
        <span className="font-normal normal-case text-black"> {email}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        propietario:
        <span className="font-normal normal-case text-black">
          {" "}
          {propietario}
        </span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        fecha:
        <span className="font-normal normal-case text-black">
          {" "}
          {formatearFecha(fecha)}
        </span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        sintomas:
        <span className="font-normal normal-case text-black"> {sintomas}</span>
      </p>

      <div className="flex justify-between my-5">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white rounded-md uppercase font-bold"
          onClick={() => setEdicion(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white rounded-md uppercase font-bold"
          onClick={() => eliminarPaciente(_id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
