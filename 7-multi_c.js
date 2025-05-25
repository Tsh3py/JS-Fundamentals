// Get the first argument from the command line.
const numOccurrencesArg = process.argv[2];

// Convert the argument to an integer.
const x = parseInt(numOccurrencesArg);

// Check if the argument is a valid positive number.
// This is the first of the two allowed console.log statements for error.
if (isNaN(x)) {
  console.log("Missing number of occurrences"); // First console.log
} else if (x <= 0) {
  // If x is 0 or negative, do nothing. The script will just exit.
} else {
  // If x is a valid positive number, use a loop to print "C is fun" x times.
  let i = 0; // Initialize a counter for the loop
  while (i < x) {
    // This is the second of the two allowed console.log statements.
    // It will be called x times.
    console.log("C is fun"); // Second console.log
    i++;
  }
}