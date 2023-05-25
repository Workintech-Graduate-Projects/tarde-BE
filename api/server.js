const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const userRouter = require("./auth/auth-router");
const tableRouter = require("./table/table-router");
const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());
 
server.use("/api/users", userRouter);
server.use("/api/table", tableRouter);


server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});
module.exports = server;