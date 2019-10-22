const db = require("../../data/dbConfig");

module.exports = {
  getAll,
  getAllMed,
  addUser,
  addMedPro,
  findUserBy,
  findMedBy,
};

function getAll() {
  return db("users");
}

function getAllMed() {
  return db("medicalProfessionals");
}

function addUser(item) {
  return db("users")
    .insert(item)
    .then(ids => ({ id: ids[0] }));
}

function addMedPro(item) {
  return db("medicalProfessionals")
    .insert(item)
    .then(ids => ({ id: ids[0] }));
}

function findUserBy(filter) {
  return db("users").where(filter);
}

function findMedBy(filter) {
  return db("medicalProfessionals").where(filter);
}
