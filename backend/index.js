import express from "express";
import dotenv from "dotenv/config";
import conectarDB from "./config/db.js";

const app = express();
conectarDB();

app.use("/", (req, res) => {
  res.send("Hola Mundo");
});

const PORT = process.env.PORT ?? 4000;

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto: ${PORT}`);
});
