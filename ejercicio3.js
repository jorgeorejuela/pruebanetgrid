//Se determina los elementos del array
let numeros = [1, 2, 3, 4, 5, 5, 4, 2, 3];

//Inicializando la funcion solicitada
function countDuplicate(numeros) {
    let res = {};
    let count = 0;

    //Se almacenan los valores en su posicion respectiva en el array
    numeros.forEach((num) => {
        res[num] = (res[num] + 1 || 0);
    });

    //Se realiza el conteo de los datos repetivos
    for (const n in res) {
        if (res[n] > 0) {
            count += 1;
        }
    }
    return count;
}

// Muestra en pantalla el total de numeros repetidos en el array; el valor esperado es 4 dado que los numeros 2, 3, 4 y 5 son los repetidos
console.log(countDuplicate(numeros))