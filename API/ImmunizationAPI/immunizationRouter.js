const express = require("express");
const router = express.Router();
const db = require("./immunizationModel");
const checkuser = require("../PatientAPI/auth-user-middleware");
const checkmed = require("../PatientAPI/auth-med-middleware");
const checkall = require("../PatientAPI/auth-all-middleware");

router.get("/", checkall, (req, res) => {
  db.getAll()
    .then(record => {
      res.status(200).json(record);
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "Error getting all immunization record" });
    });
});

router.get("/:id", checkall, (req, res) => {
  const patientId = req.params.id;
  db.getByPatientId(patientId)
    .then(record => {
      res.status(200).json(record);
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: "Error retrieving patient's immunization record",
      });
    });
});

router.post("/addimmunization", checkmed, (req, res) => {
  const { vaccineName, vaccineDate, vaccineLocation, patientId } = req.body;
  if (!vaccineName || !vaccineDate || !vaccineLocation || !patientId) {
    res.status(400).json({
      message:
        "Vaccine name, date, location and patient ID required for adding immunization record",
    });
  } else {
    db.addImmunization({
      vaccineName,
      vaccineDate,
      vaccineLocation,
      patientId,
    })
      .then(record => {
        res
          .status(200)
          .json({ message: "New immunization record added", record });
      })
      .catch(error => {
        res
          .status(500)
          .json({ errorMessage: "Error adding immunization record to server" });
      });
  }
});

router.delete("/vaccine/:id", checkmed, (req, res) => {
  const deleteid = req.params.id;
  db.removeImmunization(deleteid)
    .then(record => {
      if (!record) {
        res
          .status(404)
          .json({ message: "There is no record associated with this ID" });
      } else {
        res.status(200).json({ message: "Immunization Record deleted" });
      }
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: "Error removing immunization record from server",
      });
    });
});

module.exports = router;
