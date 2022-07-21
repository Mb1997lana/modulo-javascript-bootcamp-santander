function validaArray(arr, num) {
    try {
        if(!arr && !num) throw new ReferenceError('Envie os parâmetros');

    if(typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo object');

    if(typeof num !== 'number') throw new TypeError('Num precisa ser do tipo number');

    if(arr.length !== num) throw new RangeError('Tamanho inválido!');

    return arr;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError!')
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log('Este erro é um TypeError!')
            console.log(e.message)
        } else if (e instanceof RangerError) {
            console.log('Este erro é um RangerError!')
            console.log(e.message)
    } else {
        console.log('Tipo de erro não esperado:' + e);
    }
}

}

console.log(validaArray());