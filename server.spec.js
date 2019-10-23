const request = require("supertest");
const server = require("./server");

describe("auth model", () => {
  it("should set testing environment", () => {
    expect(process.env.NODE_ENV).toBe("testing");
  });
});
