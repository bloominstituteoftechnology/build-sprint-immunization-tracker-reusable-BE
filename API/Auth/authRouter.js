const express = require("express");
const router = express.Router();
const user = require("./authModel.js");
const bcrypt = require("bcryptjs");

router.post("/user-register", (req, res) => {
  let creds = req.body;

  if (!creds.userEmail || !creds.userPassword || !creds.userName) {
    res.status(404).json({
      message:
        "Email, password, and name are required for registering an account",
    });
  } else {
    const hash = bcrypt.hashSync(creds.userPassword, 8);
    creds.userPassword = hash;
    user
      .addUser(creds)
      .then(user => {
        res.status(201).json(user);
      })
      .catch(error => {
        res
          .status(500)
          .json({ errorMessage: "Error registering user account to server" });
      });
  }
});

router.post("/med-register", (req, res) => {
  let medCreds = req.body;
  if (
    !medCreds.userEmail ||
    !medCreds.userPassword ||
    !medCreds.company ||
    !medCreds.position
  ) {
    res.status(404).json({
      message:
        "Email, password, company and position are required for registering an account",
    });
  } else {
    const hash = bcrypt.hashSync(medCreds.userPassword, 8);
    medCreds.userPassword = hash;
    user
      .addUser(medCreds)
      .then(pro => {
        res.status(201).json(pro);
      })
      .catch(error => {
        res.status(500).json({
          errorMessage:
            "Error registering medical professional account to server",
        });
      });
  }
});

router.post("/user-login", (req, res) => {
  const userlogin = req.body;
  user
    .findUserBy(userlogin.userEmail)
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(userlogin.userPassword, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ message: `Welcome ${user.userName}`, token });
      } else {
        res.status(401).json({ message: "Invalid User Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json({ errorMessage: "Error user login to server" });
    });
});

router.post("/medpro-login", (req, res) => {});
module.exports = router;
