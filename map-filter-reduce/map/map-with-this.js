const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

const abacate = {
    value: 10,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
      return item * this.value;
    }, thisArg);
}

const nums = [5, 10];

console.log('this -> maçã', mapComThis(nums, maca));
console.log('this -> laranja', mapComThis(nums, laranja));
console.log('this -> abacate', mapComThis(nums, abacate));