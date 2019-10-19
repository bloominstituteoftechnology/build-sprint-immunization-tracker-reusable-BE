exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("permissions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("permissions").insert([
        { patientId: 1, medproId: 1, permission: false },
        { patientId: 1, medproId: 2, permission: false },
        { patientId: 2, medproId: 1, permission: false },
        { patientId: 2, medproId: 2, permission: false },
      ]);
    });
};
