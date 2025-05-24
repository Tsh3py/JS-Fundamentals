

// Get the first argument from the command line.
// If no argument is provided, process.argv[2] will be 'undefined'.
const sizeArg = process.argv[2];

// Attempt to convert the argument to an integer.
// parseInt() will return a number if successful, or NaN if not.
const size = parseInt(sizeArg);

// --- First validation check: Is it a valid number? ---
// isNaN() returns true if the value is NaN (Not a Number).
if (isNaN(size)) {
  // If the argument cannot be converted to a number, print "Missing size".
  console.log("Missing size");
} else if (size <= 0) {
  // --- Second validation check: Is it positive? ---
  // If the size is 0 or a negative number, the script should print nothing.
  // We simply do not execute any further code for printing the square.
  // The script will just exit here.
} else {
  // --- If the size is a valid positive integer, proceed to print the square ---

  // Create a single row string consisting of 'X' characters repeated 'size' times.
  // For example, if size is 2, row will be "XX". If size is 6, row will be "XXXXXX".
  const row = 'X'.repeat(size);

  // Use a loop to print the 'row' string 'size' number of times.
  // This will create the square shape.
  let i = 0; // Initialize a counter for the loop
  while (i < size) {
    // Print the current row
    console.log(row);
    // Increment the counter to move to the next row
    i++;
  }
