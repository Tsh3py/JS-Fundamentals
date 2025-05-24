// Get the first argument. If it doesn't exist, it will be undefined.
const arg1 = process.argv[2];
// Get the second argument. If it doesn't exist, it will be undefined.
const arg2 = process.argv[3];

// Combine them in the specified format using a template literal for clarity.
console.log(`${arg1} is ${arg2}`);