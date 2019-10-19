exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("patients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("patients").insert([
        {
          id: 1,
          firstName: "Karl",
          lastName: "Mozart",
          age: 10,
          gender: "male",
          weight: "80lb",
          height: "4'11",
          patientEmail: "mozart@gmail.com",
          patientPhone: "123-345-5678",
          isChild: true,
          userId: 1,
        },
        {
          id: 2,
          firstName: "Wolfgang",
          lastName: "Mozart",
          age: 45,
          gender: "male",
          weight: "150lb",
          height: "5'5",
          patientEmail: "mozart@gmail.com",
          patientPhone: "123-345-5678",
          isChild: false,
          userId: 1,
        },
      ]);
    });
};
