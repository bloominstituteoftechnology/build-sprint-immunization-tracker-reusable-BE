const express = require("express");
const router = express.Router();
const db = require("./permissionModel");

//Get all permission records
router.get("/", (req, res) => {
  db.getAllRecord()
    .then(perm => {
      perm.forEach(patient => {
        if (patient.permission === 1) {
          patient.permission = true;
        } else {
          patient.permission = false;
        }
      });
      res.status(200).json(perm);
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "Error retrieving all permission record" });
    });
});

//Get permission record by Patient's ID
router.get("/patient/:id", (req, res) => {
  const patientid = req.params.id;
  db.getRecordByPatientId(patientid)
    .then(patient => {
      patient.forEach(patient => {
        if (patient.permission === 1) {
          patient.permission = true;
        } else {
          patient.permission = false;
        }
      });
      res.status(200).json(patient);
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: "Error retrieving permission status for patient",
      });
    });
});

//Get permission by Medical Profession's ID
router.get("/:id", (req, res) => {
  const medProId = req.params.id;
  db.getRecordByPermission(medProId)
    .then(perm => {
      if (perm.length === 0) {
        res.status(400).json({ message: "There is no patient" });
      } else {
        res.status(200).json(perm);
      }
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: "Error retrieving patient permission record from server",
      });
    });
});

//Update permission record
router.put("/update", (req, res) => {
  const { permission, patientId, medproId } = req.body;
  console.log(req.body);
  if (!permission || !patientId || !medproId) {
    res.status(400).json({
      message:
        "Permission status, patient ID and medical professional ID required for updating permission status",
    });
  } else {
    db.updatePerm({ permission, patientId, medproId })
      .then(perm => {
        res.status(200).json({ message: "Permission status changed" });
      })
      .catch(error => {
        res
          .status(500)
          .json({ errorMessage: "Error changing permission status to server" });
      });
  }
});

//Add permission record
router.post("/add", (req, res) => {
  const add = req.body;
  db.addPerm(add)
    .then(perm => {
      res.status(200).json({ message: "New permission request posted" });
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "Error adding permission request to server" });
    });
});

module.exports = router;
