// Update with your config settings.
require("dotenv").config();
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/immunize.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
      },
    },
  },
  testing: {
    client: "sqlite3",
    connection: { filename: "./data/test.db3" },
    useNullAsDefault: true,
    migrations: { directory: "./data/migrations" },
    seeds: { directory: "./data/seeds" },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  // production: {
  //   client: "pg",
  //   connection: {
  //     host: "ec2-174-129-252-226.compute-1.amazonaws.com",
  //     database: "da331ci5il1rtb",
  //     user: "vhurvlbvryxlxf",
  //     password:
  //       "4e453cc71be3af80a773d51c77458f6392074623bc80dd5da2bbc044c5ae8a42",
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     directory: "./data/migrations",
  //     tableName: "knex_migrations",
  //   },
  // },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
