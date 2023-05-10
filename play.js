const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("You are now connected!");

    conn.write("Move: up");
    setInterval(() => {
      conn.write("Move: left");
    }, 50);
  });

  return conn;
};

module.exports = connect;
