// Import the connect function from client.js
const connect = require('./client');

// Call the connect function
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  console.log("User pressed:", key);

// If 'Ctrl+C' is pressed, exit the process
  if (key === '\u0003') {
    process.exit();
  }
};
