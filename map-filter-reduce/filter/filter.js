function filtraPares(arr) {
    return arr.filter(callback);
}
// Para retornar números pares.
function callback(item) {
    return item % 2 === 0;
}

// Para retornar números ímpares.
/*function callback(item) {
    return item % 2 !== 0;
}*/

const meuyArray = [3, 25, 7, 2, 8, 10];

console.log(filtraPares(meuyArray));