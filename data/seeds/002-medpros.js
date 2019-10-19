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
          medicPassword: "curie",
          company: "MedFirst",
          position: "OBGYN",
        },
        {
          id: 2,
          medicEmail: "virginia@gmail.com",
          medicPassword: "apgar",
          company: "Beaumont",
          position: "Pediatrician ",
        },
      ]);
    });
};
