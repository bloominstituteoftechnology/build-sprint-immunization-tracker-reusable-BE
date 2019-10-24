exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("immunization_records")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("immunization_records").insert([
        {
          id: 1,
          vaccineName: "Polio",
          vaccineDate: "1810-10-10",
          vaccineLocation: "Austria",
          patientId: 1,
          isCompleted: false,
        },
        {
          id: 2,
          vaccineName: "Polio",
          vaccineDate: "1810-10-10",
          vaccineLocation: "Austria",
          patientId: 2,
          isCompleted: false,
        },
        {
          id: 3,
          vaccineName: "Hepatitis B",
          vaccineDate: "1820-12-12",
          vaccineLocation: "Austria",
          patientId: 1,
          isCompleted: false,
        },
      ]);
    });
};
