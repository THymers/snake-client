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
    console.log('Name: TFH');

  });
// move up one square (unless facing down)
  //conn.on('connect', () => {
    //console.log("Move: up");
 // });
// Send "Move: up" every 50 milliseconds
//setInterval(() => {
  //conn.write("Move: up");
//}, 50);

  // Event handler for incoming data
  conn.on('data', (data) => {
    console.log('Server says:', data);

  });  

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;