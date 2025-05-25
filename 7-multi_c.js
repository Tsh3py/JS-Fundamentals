// Get the first argument from the command line.
// If no argument is provided, process.argv[2] will be 'undefined'.
const firstArgument = process.argv[2];

// Try to convert the first argument to an integer.
// parseInt() will return a number if successful, or NaN (Not a Number) if not.
const myNumber = parseInt(firstArgument);

// Check if the result of parseInt() is NaN.
// isNaN() returns true if the value is NaN, and false otherwise.
if (isNaN(myNumber)) {
  // If it's NaN, it means the argument couldn't be converted to a valid integer.
  console.log("Not a number");
} else {
  // If it's a valid number, print it in the required format.
  // We use a template literal (backticks ``) for clean string formatting.
  console.log(`My number: ${myNumber}`);
}