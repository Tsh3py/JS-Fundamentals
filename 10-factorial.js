// Define the recursive factorial function.
// This function calculates the factorial of a given number 'n'.
function factorial(n) {
  // Base Case: If n is 0 or less, return 1.
  // This covers 0! = 1.
  // It also acts as a crucial base case for any negative numbers passed into the function,
  // preventing infinite recursion and aligning with the spirit of the "NaN is 1" rule
  // for non-standard factorial inputs.
  if (n <= 0) {
    return 1;
  }

  // Recursive Step: If n is positive, multiply n by the factorial of (n - 1).
  // The function calls itself with a smaller number, moving towards the base case.
  return n * factorial(n - 1);
}

// Get the first argument from the command line.
// If no argument is provided, process.argv[2] will be 'undefined'.
const firstArg = process.argv[2];

// Convert the first argument to an integer.
// If the argument is not a valid number (e.g., "School", or undefined),
// parseInt() will return NaN.
const num = parseInt(firstArg);

// Check if the converted number is NaN.
// This specifically handles the rule: "Factorial of NaN is 1".
if (isNaN(num)) {
  console.log(1);
} else {
  // If the argument is a valid number, calculate its factorial using our recursive function
  // and print the result.
  console.log(factorial(num));
}