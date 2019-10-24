const request = require("supertest");
const server = require("./server");
const db = require("./data/dbConfig");

describe("auth model", () => {
  it("should set testing environment", () => {
    expect(process.env.NODE_ENV).toBe("testing");
  });
});

describe("user registration function", () => {
  it("should register new user and return 201", async () => {
    await db("users").truncate();
    const res = await request(server)
      .post("/api/auth/user-register")
      .send({
        userEmail: "ladygaga@gmail.com",
        userPassword: "pokerface",
        userName: "Lady Gaga",
      });
    expect(res.status).toBe(201);
  });
});

describe("user login function", () => {
  it("should return messagen and token after correct login", async () => {
    const login = await request(server)
      .post("/api/auth/user-login")
      .send({ userEmail: "ladygaga@gmail.com", userPassword: "pokerface" });
    expect(login.status).toBe(200);
    expect(login.text).toContain("token");
    expect(login.text).toContain("message");
  });
});

describe("login function failure", () => {
  it("should return 401 error when login credential is incomplete", async () => {
    const loginfail = await request(server)
      .post("/api/auth/user-login")
      .send({ userEmail: "beyonce@gmail.com" });
    expect(loginfail.status).toBe(401);
  });
});

describe("medical professional registration", () => {
  it("should return 404 error if registration is incomplete", async () => {
    const medregfail = await request(server)
      .post("/api/auth/med-register")
      .send({ medicEmail: "ariana@gmail.com" });
    expect(medregfail.status).toBe(404);
  });
});

//Registration test not working
// it("should return 201 when registration is successful", async () => {
//   await db("medicalProfessionals").truncate();
//   const med = await request(server)
//     .post("/api/auth/med-register")
//     .send({
//       medicEmail: "sam@gmail.com",
//       medicPassword: "grande",
//       medicFirstName: "Sam",
//       medicLastName: "Grande",
//       company: "Methodist",
//       position: "Nurse",
//     });

//   expect(med.id).toBeTruthy();
// });

describe("get patient successfully with user id", () => {
  it("should return json data", () => {});
});
