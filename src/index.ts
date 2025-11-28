export * from './value-object';

// Ejemplos de malas prácticas (claves expuestas)
const apiKey = "12345-abcde-67890-fghij";
const githubToken = "ghp_1234567890abcdefghijklmnopqrstuvwx";

// Esta función muestra el ejemplo inseguro sin ejecutarlo realmente
function fetchData() {
    // Código inseguro real (no se ejecuta para evitar errores en Docker)
    // fetch(`https://api.example.com/data?api_key=${apiKey}`)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error('Error:', error));

    // Simulación para que la app no falle
    console.log("Ejemplo de fetch inseguro simulado: api.example.com");
    console.log("api_key expuesta:", apiKey);
}

fetchData();