const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("medicalProfessionals")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("medicalProfessionals").insert([
        {
          id: 1,
          medicEmail: "marie@gmail.com",
          medicPassword: bcrypt.hashSync("curie", 10),
          medicFirstName: "Marie",
          medicLastName: "Curie",
          company: "MedFirst",
          position: "OBGYN",
        },
        {
          id: 2,
          medicEmail: "virginia@gmail.com",
          medicPassword: bcrypt.hashSync("apgar", 10),
          medicFirstName: "Virginia",
          medicLastName: "Apgar",
          company: "Beaumont",
          position: "Pediatrician ",
        },
      ]);
    });
};
