import Paciente from "../models/Pacientes.js";

const agregarPacientes = (req, res) => {
  const paciente = new Paciente(req.body);

  try {
  } catch (error) {
    console.log(error);
  }
};
const obtenerPacientes = (req, res) => {};

export { agregarPacientes, obtenerPacientes };
