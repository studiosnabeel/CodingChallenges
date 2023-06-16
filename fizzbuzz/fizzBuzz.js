// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => number
// Not a number => 'Not a Number'

const output = fizzBuzz(5);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== 'number') return 'not a number';
  if (input % 3 === 0 && input % 5 === 0) return 'FizzBuzz';
  if (input % 5 === 0) return 'Buzz';
  if (input % 3 === 0) return 'Fizz';
  return input;
}
