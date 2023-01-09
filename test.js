import request from "supertest";
import app from "./app.js";

describe("Test GET", () => {
  test("It should respond to the GET method with 200", () => {
    request(app)
      .get("/api/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test GET Contacts", () => {
  test("It should respond to the POST method with 200", () => {
    request(app)
      .get("/api/contacts")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
  test("It should have name with Jphn", () => {
    request(app)
      .get("/api/contacts")
      .then((response) => {
        expect(response.body[0].name).toBe("John");
      });
  });
});
