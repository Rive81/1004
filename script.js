let x1 = new Boolean(false); //Direcion de memoria del obejto,(no es false; ejemplo A123) 
let x2 = new Boolean(false); //son dos objets distintos;Ejem`lo unidad de memomria `B345
let x3 =false; //x3 es directamente falso no es una unidad de memoria
/*console.log(x1);*/
/*
console.log(x1 == false);
console.log(x1 === false); // el tercer igual compara el tipo
console.log(x1 == true);
*/
console.log(x1 == x2); //Direcciones de memoria
/*
//"false"=="false"*/
console.log(JSON.stringify(x1) == JSON.stringify(x2)); //Pasamos el objeto a string y comparamos
/*esto es string template $sirve para poner codigo de string
let x2 = new Boolean(false);//B345
let x4 = x2.toString(); //Convierte a cadena de caracteres ("false")
console.log(x4[0] + " " + x4[1] + " " + x4.charAt(2) + " " + x4.charAt(3) +  ${x4[4]});
console.log(${x4[0]} ${x4[1]} ${x4[2]} ${x4[3]} ${x4[4]}); */
// sin parentesis funtion y con parentesis es boolean con b minuscula,  el typeof devuelve el tipo de las cosas 
console.log(typeof(x2.valueOf)); //sin parentesis funtion se refiere en (x2.valueof) es como si ejecutaramos una funcion.
    console.log(typeof(x2.valueOf()));// es boolean con b minuscula 