exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          userEmail: "wolfgang@gmail.com",
          userPassword: "mozart",
          userName: "Wolfgang Mozart",
        },
        {
          id: 2,
          userEmail: "john@gmail.com",
          userPassword: "locke",
          userName: "John Locke",
        },
        {
          id: 3,
          userEmail: "ludwig@gmail.com",
          userPassword: "beethoven",
          userName: "Ludwig Beethoven",
        },
      ]);
    });
};
