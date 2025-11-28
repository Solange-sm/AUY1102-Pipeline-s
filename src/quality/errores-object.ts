// src/quality/errores-object.ts

// Consistencia
const value = 10;
const resultadoFinal = value * 2;

// Adaptabilidad

const message: string = "10"; // Corregido el error TS2322

// Responsabilidad

class UserService {
  getUserData() {}

  sendEmail() {}
}

// Para que compile bajo isolatedModules (Corregido el error TS1208)
export {};