/*  FizzBuzz
Divisível por 3 == 'Fizz',
Divisível por 5 == 'Buzz',
Divisível por 3 e 5 == 'FizzBuzz',
Se não for um número == 'Não é um número',
Se não for divisível por 3 ou por 5 == Número.
*/

function fizzBuzz (num){
    if ((num%3 == 0) && (num%5 == 0)){
        return "FizzBuzz"
    } else if (num%5 == 0){
        return "Buzz";
    } else if (num%3 == 0) {
        return "Fizz";
    }else if (typeof num != "number") {
        return "Não é um número";
    } else {
        return num;
    }
}

let resultado = fizzBuzz (15);
console.log (resultado);