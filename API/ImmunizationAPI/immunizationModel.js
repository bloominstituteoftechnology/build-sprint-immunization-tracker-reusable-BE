const db = require("../../data/dbConfig");

module.exports = {
  addImmunization,
  getAll,
  getByPatientId,
  removeImmunization,
};

function addImmunization(record) {
  return db("immunization_records").insert(record);
}

function getAll() {
  return db("immunization_records");
}

function getByPatientId(id) {
  return db("immunization_records").where("patientId", id);
}

function removeImmunization(id) {
  return db("immunization_records")
    .where("id", id)
    .del();
}
