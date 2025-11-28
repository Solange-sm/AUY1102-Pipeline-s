import express, { Request, Response } from 'express';

import * as bodyParser from 'body-parser';
import * as pug from 'pug';


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.post('/', (req: Request, res: Response) => { // Línea corregida
  // Aseguramos que req.body tenga la estructura esperada
  const input = req.body.username as string | undefined; 
  
  // Usamos el valor, por defecto vacío si no existe
  const usernameInput = input || '';


  const template = `
doctype html
html
head
    title= 'Hello world'
body
    form(action='/' method='post')
        input#username.form-control(type='text' name='username' value='${usernameInput}')
        button.btn.btn-primary(type='submit') Submit
    p Hello ${usernameInput}`; // Usamos la variable corregida
    
  const fn = pug.compile(template);
  // Nota: Si usas Pug, generalmente pasas las variables en el objeto de compilación, 
  // en lugar de insertarlas directamente en el template string por seguridad.
  const html = fn();
  res.send(html);
});
// Nota: Asegúrate de que el puerto se defina y se escuche
// app.listen(3000, () => { console.log('Server running on port 3000'); });