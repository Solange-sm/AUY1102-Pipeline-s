// Necesario para que el archivo sea tratado como módulo
export {};

import express, { Request, Response } from "express";
import crypto from "crypto";

const app = express();
app.use(express.json());

// Inyección SQL
const username = "admin'; DROP TABLE Users; --";
const queryString = `SELECT * FROM Users WHERE username='${username}'`;

// XSS
const userInput = '<script>alert("XSS");</script>';
const html = `<div>${userInput}</div>`;

// CSRF
app.post("/change-password", (req: Request, res: Response) => {
  const newPassword = req.body.newPassword;
  // Cambiar la contraseña sin verificar el token CSRF
});

// Deserialización insegura
const rawData = '{"name": "test"}';
const data = JSON.parse(rawData);

// Credenciales inseguras
const dbPassword = "password123";

const config = {
  dbUsername: "admin",
  dbPassword: "password123",
  apiKey: "abc123",
};

// Hash inseguro (ejemplo)
const hashedPassword = crypto
  .createHash("sha256")
  .update("password123")
  .digest("hex");

console.log(`Error: La contraseña ${dbPassword} no es válida`);