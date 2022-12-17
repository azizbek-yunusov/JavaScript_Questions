function fizzBuzz(n) {
  if(typeof n !== "number") {
    return console.log("no number type");
  }
  if(n % 3 === 0 && n % 5 === 0) {
    return console.log("FizzBuzz");
  } else if(n % 3 === 0 && n % 5 != 0) {
    return console.log("Fizz");
  } else if(n % 3 != 0 && n % 5 === 0) {
    return console.log("Buzz");
  }
}
fizzBuzz(15)

// Output: FizzBuzz