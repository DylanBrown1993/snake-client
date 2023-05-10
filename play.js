const { connect } = require("./client");
const { setupInput } = require("./input");



console.log("hello", connect);
const connection = connect()
setupInput(connection)



