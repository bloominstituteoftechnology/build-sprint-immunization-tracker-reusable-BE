exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();
      tbl
        .string("userEmail", 128)
        .unique()
        .notNullable();
      tbl.string("userPassword", 255).notNullable();
      tbl.string("userName", 128).notNullable();
    })
    .createTable("medical_professionals", tbl => {
      tbl.increments();
      tbl
        .string("medicEmail", 128)
        .unique()
        .notNullable();
      tbl.string("medicPassword", 255).notNullable();
      tbl.string("medicFirstName", 255).notNullable();
      tbl.string("medicLastName", 255).notNullable();
      tbl.string("company", 255).notNullable();
      tbl.string("position", 255).notNullable();
    })
    .createTable("patients", tbl => {
      tbl.increments();
      tbl.string("firstName", 255).notNullable();
      tbl.string("lastName", 255).notNullable();
      tbl.integer("age", 5).notNullable();
      tbl.string("gender", 128).notNullable();
      tbl.string("weight", 128).notNullable();
      tbl.string("height", 128).notNullable();
      tbl.string("patientEmail", 255).notNullable();
      tbl.string("patientPhone", 128);
      tbl.boolean("isChild").defaultTo(false);
      tbl
        .integer("userId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users");
    })
    .createTable("immunization_records", tbl => {
      tbl.increments();
      tbl.string("vaccineName").notNullable();
      tbl.date("vaccineDate");
      tbl.string("vaccineLocation", 128).notNullable();
      tbl
        .integer("patientId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("patients");
      tbl.boolean("isCompleted").defaultTo(false);
    })
    .createTable("permissions", tbl => {
      tbl.increments();
      tbl.boolean("permission").defaultTo(false);
      tbl
        .integer("patientId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("patients");
      tbl
        .integer("medproId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("medical_professionals");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("permissions")
    .dropTableIfExists("immunization_records")
    .dropTableIfExists("patients")
    .dropTableIfExists("medical_professionals")
    .dropTableIfExists("users");
};
