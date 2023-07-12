import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";

const PacientesContext = createContext();

const PacientesProvider = ({ children }) => {
  const [pacientes, setPacientes] = useState([]);
  const [unPaciente, setUnPaciente] = useState({});

  useEffect(() => {
    const obtenerPacientes = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await clienteAxios("/pacientes", config);
        setPacientes(data);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    };
    obtenerPacientes();
  }, []);

  const guardarPaciente = async (paciente) => {
    if (paciente.id) {
      console.log("Editando");
    } else {
      console.log("Nuevo");
    }

    return;
    try {
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await clienteAxios.post("/pacientes", paciente, config);
      const { createdAt, updatedAt, __v, ...pacienteAlmacenado } = data;
      setPacientes([pacienteAlmacenado, ...pacientes]);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  const setEdicion = (paciente) => {
    setUnPaciente(paciente);
  };

  return (
    <PacientesContext.Provider
      value={{ pacientes, guardarPaciente, setEdicion, unPaciente }}
    >
      {children}
    </PacientesContext.Provider>
  );
};

export { PacientesProvider };

export default PacientesContext;
