import express from "express";
import bodyParser from "body-parser";
import { registrarVigilante } from "./CONTROLLERS/RegistrarVigilante.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/registrar-directo", registrarVigilante);

app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
