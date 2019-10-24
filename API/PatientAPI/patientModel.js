const db = require("../../data/dbConfig");

module.exports = {
  getAllPatients,
  getPatientByUserId,
  getPatientById,
  addPatient,
  updatePatient,
  removePatient,
};

function getAllPatients() {
  return db("patients");
}

function getPatientByUserId(userId) {
  return db("patients").where("userId", userId);
}

function getPatientById(id) {
  return db("patients")
    .where({ id: id })
    .first();
}

// function addPatient(patient, id) {
//   return db("patients")
//     .insert(patient)
//     .then(ids => ({ id: ids[0] }));
// }

async function addPatient(user) {
  const [newPatient] = await db("patients")
    .insert(user)
    .returning("*");
  return newPatient;
}

function updatePatient(patient, id) {
  return db("patients")
    .where("id", id)
    .update(patient);
}

function removePatient(id) {
  return db("patients")
    .where("id", id)
    .del();
}
