// Check if the first argument (at index 2) exists
// If process.argv[2] is undefined (meaning no argument was passed by the user),
// the condition will be false. Otherwise, it will be true.
if (process.argv[2]) {
  // If an argument exists, print its value
  console.log(process.argv[2]);
} else {
  // If no argument exists, print "No argument"
  console.log("No argument");
}