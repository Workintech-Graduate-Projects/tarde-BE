const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../api/auth/auth-router");
const usersRouter = require("../users/users-router.js");

const server = express();

server.use(helmet());

server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});
module.exports = server;
