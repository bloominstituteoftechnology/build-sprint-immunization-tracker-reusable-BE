const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");

//routers
const authRouter = require("./API/Auth/authRouter");
const patientRouter = require("./API/PatientAPI/patientRouter");
const permissionRouter = require("./API/PermissionAPI/permissionRouter");

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/patient", patientRouter);
server.use("/api/perm", permissionRouter);

server.get("/", (req, res) => {
  res.send(`This is working`);
});

module.exports = server;
