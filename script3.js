//Utilizando objetos Boolean realiza un programa que indique si un array de 6 elementos solicitado al usuario se encuentra ordenado de 
// la siguiente forma (e1 > e3, e2 < e4 y e5 = e6)

/*console.log(array[0] > array[2] && array[1] < array[3] && array[4] == array[5]);
console.log(array2[0] > array2[2] && array2[1] < array2[3] && array2[4] == array2[5]);*/
let array = [1,4,0,5,6,6];
let array2 = [1,2,3,4,5,6];
let cond1 = new Boolean(array2[0] > array2[2]);//false
let cond2 = new Boolean(array2[1] < array2[3]);//true
let cond3 = new Boolean(array2[4] == array2[5]);//false
let condFinal = new Boolean(cond1.valueOf() && cond2.valueOf() && cond3.valueOf());
if(condFinal.valueOf()){
    console.log(`El resultado final es: ${condFinal.valueOf()}`);
}


/*
let x1= (2,3,5,5)
let x2= (3,4,5,5)


let cond1= new Boolean (array2[0]>array[2]);//false
let cond2= new Boolean (array2[1]>array[3]);//true
let cond3= new Boolean (array2[2]>array[5]);//false
let condfinal= new Boolean (cond1.valueOf()

    }*/