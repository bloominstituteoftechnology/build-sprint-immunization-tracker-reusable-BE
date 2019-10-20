const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require("./API/Auth/authRouter");
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.send(`This is working`);
});

module.exports = server;
