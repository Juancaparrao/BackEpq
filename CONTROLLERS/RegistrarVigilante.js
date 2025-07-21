import pool from "../db.js";

function registrarVigilante(req, res) {
  const { documento, nombre } = req.body;

  if (!documento || !nombre) {
    return res.status(400).json({ mensaje: "Todos los campos son obligatorios" });
  }

  const sql = "INSERT INTO vigilante (documento, nombre) VALUES (?, ?)";

  pool.query(sql, [documento, nombre], (err, result) => {
    if (err) {
      console.error("❌ Error al registrar:", err);
      return res.status(500).json({ mensaje: "Error al registrar el vigilante" });
    }
    res.status(201).json({ mensaje: "✅ Vigilante registrado correctamente" });
  });
}

// 🔹 Exportar la función
module.exports = { registrarVigilante };
