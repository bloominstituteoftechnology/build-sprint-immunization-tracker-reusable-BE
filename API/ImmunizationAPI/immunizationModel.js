const db = require("../../data/dbConfig");

module.exports = {};

function addImmunization(record) {
  return db("immunizationRecords");
}
