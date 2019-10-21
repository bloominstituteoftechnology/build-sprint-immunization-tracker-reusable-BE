const express = require("express");
const router = express.Router();
const patient = require("./patientModel");
const restricted = require("./auth-middleware");

//get all patients
router.get("/", restricted, (req, res) => {
  patient
    .getAllPatients()
    .then(patients => {
      res.status(200).json(patients);
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "Error retrieving all patients from server" });
    });
});

//get patient by userID
router.get("/:id", restricted, (req, res) => {
  const userId = req.params.id;
  patient
    .getPatientByUserId(userId)
    .then(patient => {
      if (patient.length < 0) {
        res
          .status(400)
          .json({ message: "There is no patient associated to this user ID" });
      } else {
        res.status(200).json(patient);
      }
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: "Error retrieving patient info from server by user ID",
      });
    });
});

//get patient by patient ID
router.get("/patient/:id", restricted, (req, res) => {
  const patientId = req.params.id;
  patient
    .getPatientById(patientId)
    .then(patient => {
      if (!patient) {
        res.status(400).json({
          message: "There is no patient associated to this patient ID",
        });
      } else {
        res.status(200).json(patient);
      }
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: "Error retrieving patient info by patient ID from server",
      });
    });
});

//remove patient by ID
router.delete("/patient/:id", restricted, (req, res) => {
  const deleteId = req.params.id;
  patient
    .removePatient(deleteId)
    .then(patient => {
      if (!patient) {
        res
          .status(400)
          .json({ message: "Failed to delete patient due to wrong ID" });
      } else {
        res.status(200).json({ message: "Patient deleted" });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "Failed to delete patient from server" });
    });
});

//add patient
router.post("/addpatient", restricted, (req, res) => {
  const addPat = req.body;
  if (
    !addPat.firstName ||
    !addPat.lastName ||
    !addPat.age ||
    !addPat.gender ||
    !addPat.weight ||
    !addPat.height ||
    !addPat.patientEmail ||
    !addPat.userId
  ) {
    res.status(404).json({ message: "Missing information to add patient" });
  } else {
    patient
      .addPatient(addPat)
      .then(patient => {
        res.status(201).json({ message: "New patient created", patient });
      })
      .catch(error => {
        res.status(500).json({ errorMessage: "Error creating new patient" });
      });
  }
});

//edit patient
router.put("/patient/:id", restricted, (req, res) => {
  const updatePat = req.body;
  const updateId = req.params.id;
  if (
    !updatePat.firstName ||
    !updatePat.lastName ||
    !updatePat.age ||
    !updatePat.gender ||
    !updatePat.weight ||
    !updatePat.height ||
    !updatePat.patientEmail ||
    !updatePat.userId
  ) {
    res.status(404).json({ message: "Missing information to update patient" });
  } else {
    patient
      .updatePatient(updatePat, updateId)
      .then(patient => {
        if (!patient) {
          res
            .status(400)
            .json({ message: "There is no patient associated with this ID" });
        } else {
          res.status(200).json({ message: "Patient information updated" });
        }
      })
      .catch(error => {
        res.status(500).json({ errorMessage: "Error updating patient info" });
      });
  }
});

module.exports = router;
