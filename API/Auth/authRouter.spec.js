const db = require("../../data/dbConfig");
const request = require("supertest");

const User = require("./authModel");
const express = require("express");

const server = require("./authRouter");

// describe("user model", () => {
//   beforeEach(async () => {
//     await db("users").truncate();
//   });
// });
describe("auth model", () => {
  it("should set testing environment", () => {
    expect(process.env.NODE_ENV).toBe("testing");
  });
});
