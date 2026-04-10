//1. Solicita una cadena al usuario e indica la cantidad de veces que aparece la a en las palabras impares
//Contar las aes de las palabras en posiciones impares del array con split
const jsonF = {
    contar: function(){
        let input = document.getElementsByTagName("input")[0];
        //"Estamos en Alcobendas estudiando JS y nos encanta"
        //["Estamos", "en", "Alcobendas", "estudiando" ...]
        let palabras = input.value.split(" ");
        let cont = 0;
        for (let i = 0; i < palabras.length; i=i+2) {
            for (let j = 0; j < palabras[i].length; j++) {
                if(palabras[i][j] == "a"){
                    cont++
                }
            }
        }
    },
    invertir: ()=>{
        let input = document.querySelector("#invertir");
        let palabras = input.value.split(" ");
        let resultado = "";
        for (let i = palabras.length-1; i >= 0; i--) {
            resultado += palabras[i] + " ";
        }
        alert(resultado);
    }
}
/*console.log("Cantidad de 'a' en palabras impares: " + contadorA);*/
