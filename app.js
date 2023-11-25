const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'amaro',
  port: 3306,
  database: 'amaro'
});

db.connect(err => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conexión a la base de datos exitosa');
  }
});

// Ruta para registrar un nuevo usuario
app.post('/registro', (req, res) => {
  const { nombre, email, contraseña } = req.body;

  if (!nombre || !email || !contraseña) {
    return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
  }

  const sql = 'INSERT INTO usuarios (nombre, email, contraseña) VALUES (?, ?, ?)';
  const values = [nombre, email, contraseña];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al registrar el usuario:', err);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    } else {
      console.log('Usuario registrado con éxito');
      res.status(201).json({ mensaje: 'Usuario registrado con éxito' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});