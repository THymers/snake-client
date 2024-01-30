const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', 
    port: 50541, 
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Event handler for successful connection
  conn.on('connect', () => {
    console.log('Connected to the server!');

  });

  // Event handler for incoming data
  conn.on('data', (data) => {
    console.log('Server says:', data);

  });  

  return conn;
};

console.log("Connecting ...");
connect();
