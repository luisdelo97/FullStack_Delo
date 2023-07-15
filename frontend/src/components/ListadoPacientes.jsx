import usePacientes from "../hooks/usePacientes";
import Paciente from "./Paciente";

const ListadoPacientes = () => {
  const { pacientes } = usePacientes();

  return (
    <>
      {pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center mt-5">
            Listado Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {pacientes.map((paciente) => {
            return <Paciente key={paciente._id} paciente={paciente} />;
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center mt-5">
            No hay pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando Pacientes
            <span className="text-indigo-600 font-bold">
              {" "}
              y apareceran en este Lugar
            </span>
          </p>
        </>
      )}
    </>
  );
};

export default ListadoPacientes;
