// Define the 'add' function as required by the prototype.
// This function takes two parameters, 'a' and 'b', and returns their sum.
function add(a, b) {
  return a + b;
}

// Get the first argument from the command line.
// process.argv[2] will be 'undefined' if no argument is provided.
const firstArg = process.argv[2];

// Get the second argument from the command line.
// process.argv[3] will be 'undefined' if only one or no argument is provided.
const secondArg = process.argv[3];

// Convert the command-line arguments to integers using parseInt().
// If an argument is missing or not a valid number, parseInt() will return NaN.
const num1 = parseInt(firstArg);
const num2 = parseInt(secondArg);

// Call the 'add' function with the converted numbers.
// If num1 or num2 is NaN, their addition will also result in NaN,
// which matches the expected output for invalid/missing arguments.
const result = add(num1, num2);

// Print the result to the console.
console.log(result);