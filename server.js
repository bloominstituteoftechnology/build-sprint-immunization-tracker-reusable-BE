const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");

//routers
const authRouter = require("./API/Auth/authRouter");
const patientRouter = require("./API/PatientAPI/patientRouter");
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/user", patientRouter);

server.get("/", (req, res) => {
  res.send(`This is working`);
});

module.exports = server;
