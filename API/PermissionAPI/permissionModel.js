const db = require("../../data/dbConfig");

module.exports = {
  getAllRecord,
  getRecordByPermission,
  getRecordByPatientId,
  addPerm,
  updatePerm,
};

function getAllRecord() {
  return db("permissions");
}

function getRecordByPermission(medId) {
  return db("permissions as p")
    .join("patients as pa", "pa.id", "p.patientId")
    .join("medicalProfessionals as m", "p.medproId", "m.id")
    .where("p.medproId", medId)
    .where("p.permission", true);
}

function getRecordByPatientId(patientId) {
  return db("permissions as p")
    .join("patients as pa", "p.patientId", "pa.id")
    .where("p.patientId", patientId);
}

function addPerm(perm) {
  return db("permissions").insert(perm);
}

function updatePerm(permission, patientId, medproId) {
  return db("permissions as p")
    .where("p.patientId", "=", patientId, "p.medproId", "=", medproId)

    .update(permission);
}
