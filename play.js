const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("You are now connected!");

    setInterval(() => {
      conn.write("Move: up");
    }, 50);
  });

  return conn;
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  // Handle other key inputs as needed
};

const conn = connect();
setupInput().on("data", handleUserInput);

module.exports = connect;

