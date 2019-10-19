exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("immunizationRecords")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("immunizationRecords").insert([
        {
          id: 1,
          vaccineName: "Polio",
          vaccineDate: "1810-10-10",
          vaccineLocation: "Austria",
          patientId: 1,
        },
        {
          id: 2,
          vaccineName: "Polio",
          vaccineDate: "1810-10-10",
          vaccineLocation: "Austria",
          patientId: 2,
        },
        {
          id: 3,
          vaccineName: "Hepatitis B",
          vaccineDate: "1820-12-12",
          vaccineLocation: "Austria",
          patientId: 1,
        },
      ]);
    });
};
