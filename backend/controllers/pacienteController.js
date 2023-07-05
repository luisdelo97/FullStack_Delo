import Paciente from "../models/Pacientes.js";

const agregarPacientes = async (req, res) => {
  const paciente = new Paciente(req.body);
  paciente.veterinario = req.veterinario._id;
  try {
    const pacienteAlmacenado = await paciente.save();
    res.json(pacienteAlmacenado);
  } catch (error) {
    console.log(error);
  }
};
const obtenerPacientes = async (req, res) => {
  const pacientes = await Paciente.find()
    .where("veterinario")
    .equals(req.veterinario);
  res.json(pacientes);
};

const obtenerUnPaciente = async (req, res) => {
  const { id } = req.params;
  const paciente = await Paciente.findById(id);

  if (paciente.veterinario._id.toString() !== req.veterinario._id.toString()) {
    return res.json({ meg: "Accion no valida..." });
  }
  if (paciente) {
    res.json(paciente);
  }
};

const actualizarPaciente = async (req, res) => {};

const eliminarPaciente = async (req, res) => {};

export {
  agregarPacientes,
  obtenerPacientes,
  obtenerUnPaciente,
  actualizarPaciente,
  eliminarPaciente,
};
