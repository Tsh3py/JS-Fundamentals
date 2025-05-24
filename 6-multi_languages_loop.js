// Define an array containing the three required strings.
// Using 'const' adheres to the 'no var' rule.
const messages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

// Use a for...of loop to iterate over each string in the 'messages' array.
// 'message' will take the value of each element in the array during each iteration.
// This loop structure naturally avoids 'if/else' statements.
for (const message of messages) {
  // Print the current message.
  // The 'console.log' statement appears only once in the code,
  // but it will be executed for each item in the array,
  // fulfilling the 'only one console.log' and 'use a loop' requirements.
  console.log(message);
}