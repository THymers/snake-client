//create a let connection variable outside any function
let connection;

const sendMovement = (movement) => {
  if (connection) {
    connection.write(movement);
  }
};

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
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
  if (key === "\u0003") {
    process.exit();
  }

  //movement commands consol.log
  if (key === "w") {
    console.log("Move: up");
  } else if (key === "a") {
    console.log("Move: left");
  } else if (key === "s") {
    console.log("Move: down");
  } else if (key === "d") {
    console.log("Move: right");
  }
};

module.exports = { setupInput };
