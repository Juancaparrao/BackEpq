const express = require("express");
const bodyParser = require("body-parser");
const { registrarVigilante } = require("./CONTROLLERS/RegistrarVigilante");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// ✅ Ruta usando la función del controlador
app.post("/registrar-directo", registrarVigilante);

app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
