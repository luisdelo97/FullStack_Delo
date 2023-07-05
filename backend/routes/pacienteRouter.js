import express from "express";
import {
  agregarPacientes,
  obtenerPacientes,
} from "../controllers/pacienteController.js";
import checkAuth from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(checkAuth, agregarPacientes)
  .get(checkAuth, obtenerPacientes);

export default router;
