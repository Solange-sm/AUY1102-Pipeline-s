
// src/quality/insecure-2-object.ts

// 1. IMPORTACIONES NECESARIAS para Express, Tipos y un Hashing de ejemplo
import express, { Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import * as bcrypt from 'bcryptjs'; // Usamos bcryptjs como un hash de ejemplo

// INICIALIZACIÓN DE LA APLICACIÓN
const app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// VULNERABILIDAD: Inyección SQL

const username = "admin'; DROP TABLE Users; --";
const queryString = `SELECT * FROM Users WHERE username='${username}'`;

// VULNERABILIDAD: XSS (Cross-Site Scripting)
const userInput = '<script>alert("XSS");</script>';
const html = `<div>${userInput}</div>`;

// VULNERABILIDAD: Deserialización Insegura
// Colocamos esta línea en un bloque seguro para que compile, aunque sigue siendo insegura
function parseData(body: any) {
  // Nota: req.body ya fue parseado por body-parser en este punto
  const data = JSON.parse(body); 
  return data;
}


// VULNERABILIDAD: CSRF (Cross-Site Request Forgery)
// Tipamos la función (req: Request, res: Response) para que compile
app.post('/change-password', (req: Request, res: Response) => {
  const newPassword = req.body.newPassword as string; // Usamos 'as string' para compliar
  
  // VULNERABILIDAD: Deserialización Insegura (Línea de tu código original, ahora dentro del ámbito)
  // Nota: Esto generará un error de ejecución porque req.body ya es un objeto, no una cadena.
  // Pero lo dejamos para que Sonar pueda detectarlo.
  // @ts-ignore // Ignoramos el error de compilación por la estructura de la vulnerabilidad
  const data = JSON.parse(req.body); 

  // VULNERABILIDAD: Credenciales
  const dbPassword = 'password123';
  const config = {
    dbUsername: 'admin',
    dbPassword: 'password123',
    apiKey: 'abc123',
  };

  // VULNERABILIDAD: Hashing inseguro (usando una función real para que compile)
  const hashedPassword = bcrypt.hashSync('password123', 10); // Usamos bcrypt.hashSync
  
  console.log(`Error: La contraseña ${dbPassword} no es válida`);

  // Lógica de la ruta
  res.send('Contraseña cambiada (sin verificar CSRF).');

});


// PARA QUE EL ARCHIVO NO SEA CONSIDERADO UN SCRIPT GLOBAL (TS1208)
export {};