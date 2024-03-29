//create a let connection variable outside any function
let connection;

const sendMovement = (movement) => {
  if (connection) {
    const command = `Move: ${movement}`;
    connection.write(command);
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
  if (key === "t") {
    console.log("Tara is the best!");
  } else if (key === "q") {
    console.log("Thats's not the right button!");
  }

  // If 'Ctrl+C' is pressed, exit the process
  if (key === "\u0003") {
    process.exit();
  }

  //movement commands
  if (key === "w") {
    console.log("Move up!");
    sendMovement("up");
  } else if (key === "a") {
    console.log("Move left!");
    sendMovement("left");
  } else if (key === "s") {
    console.log("Move down!");
    sendMovement("down");
  } else if (key === "d") {
    console.log("Move right!");
    sendMovement("right");
  }
};

module.exports = { setupInput };
