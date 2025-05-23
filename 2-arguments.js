// Get the total number of items in process.argv
// Remember, the first two items are 'node' path and script path,
// so we subtract 2 to get the actual number of arguments passed by the user.
const numberOfArguments = process.argv.length - 2;

// Check the number of arguments and print the corresponding message
if (numberOfArguments === 0) {
  console.log("No argument");
} else if (numberOfArguments === 1) {
  console.log("Argument found");
} else { // This covers 2 or more arguments
  console.log("Arguments found");
}