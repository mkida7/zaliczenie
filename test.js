const { add, subtract, multiply, divide } = require('./calculator');

console.assert(add(2, 3) === 5, 'blad dodawanie');
console.assert(subtract(5, 2) === 3, 'blad odejmowanie');
console.assert(multiply(4, 2) === 8, 'blad mnozenie');
console.assert(divide(10, 2) === 5, 'blad dzielenie');

console.log('Wszystkie testy zdane');
