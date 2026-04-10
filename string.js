// Solicita una cadena al usuario e indica la cantidad de veces que aparece la a en las palabras impares
// 1. Solicitamos la cadena (esto crea una cadena primitiva)
const entrada = prompt("Introduce una frase:");

// 2. La convertimos en un objeto String (como tu 'string4')
const textoObjeto = new String(entrada);

// 3. Dividimos el objeto String en un array de palabras
const palabras = textoObjeto.split(" ");
let contadorA = 0;

for (let i = 0; i < palabras.length; i++) {
    // Las palabras impares (1ª, 3ª...) están en índices pares (0, 2...)
    if (i % 2 === 0) {
        let palabraActual = palabras[i];
        
        // 4. Recorremos la palabra usando el acceso por corchetes [] 
        // Tal como viste en: console.log(string4[nombreF])
        for (let j = 0; j < palabraActual.length; j++) {
            let letra = palabraActual[j].toLowerCase(); 
            
            if (letra === "a") {
                contadorA++;
            }
        }
    }
}

console.log("Cantidad de 'a' en palabras impares: " + contadorA);
