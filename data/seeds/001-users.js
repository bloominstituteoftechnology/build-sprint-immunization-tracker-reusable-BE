const bcrypt = require("bcryptjs");

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
          userPassword: bcrypt.hashSync("mozart", 10),
          userName: "Wolfgang Mozart",
        },
        {
          id: 2,
          userEmail: "john@gmail.com",
          userPassword: bcrypt.hashSync("locke", 10),
          userName: "John Locke",
        },
        {
          id: 3,
          userEmail: "ludwig@gmail.com",
          userPassword: bcrypt.hashSync("beethoven", 10),
          userName: "Ludwig Beethoven",
        },
      ]);
    });
};
