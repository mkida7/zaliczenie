const a = 5;
const b = 3;

console.assert(add(a, b) === a + b, 'blad dodawanie'); 
console.assert(subtract(a, b) === a - b, 'blad odejmowanie'); 
console.assert(multiply(a, b) === a * b, 'blad mnozenie'); 
console.assert(divide(a, b) === a / b, 'blad dzielenie'); 

console.log('Wszystkie testy zdane');
