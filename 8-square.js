

// Get the first argument from the command line.
// If no argument is provided, process.argv[2] will be 'undefined'.
const sizeArg = process.argv[2];

// Attempt to convert the argument to an integer.
// parseInt() will return a number if successful, or NaN if not.
export const size = parseInt(sizeArg);


