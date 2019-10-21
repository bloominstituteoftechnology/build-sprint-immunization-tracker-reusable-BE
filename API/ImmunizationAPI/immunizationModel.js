const db = require("../../data/dbConfig");

module.exports = {
  addImmunization,
  getAll,
  getByPatientId,
  removeImmunization,
};

function addImmunization(record) {
  return db("immunizationRecords").insert(record);
}

function getAll() {
  return db("immunizationRecords");
}

function getByPatientId(id) {
  return db("immunizationRecords").where("patientId", id);
}

function removeImmunization(id) {
  return db("immunizationRecords")
    .where("id", id)
    .del();
}
