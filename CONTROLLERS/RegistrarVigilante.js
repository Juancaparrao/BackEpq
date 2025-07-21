import pool from "../db.js";

export async function registrarVigilante(req, res) {
  const { documento, nombre } = req.body;

  if (!documento || !nombre) {
    return res.status(400).json({ mensaje: "Todos los campos son obligatorios" });
  }

  const sql = "INSERT INTO vigilante (documento, nombre) VALUES (?, ?)";

  try {
    await pool.query(sql, [documento, nombre]);
    res.status(201).json({ mensaje: "✅ Vigilante registrado correctamente" });
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ mensaje: "⚠️ El vigilante ya está registrado" });
    }
    console.error("❌ Error al registrar:", err);
    res.status(500).json({ mensaje: "Error al registrar el vigilante" });
  }
}
