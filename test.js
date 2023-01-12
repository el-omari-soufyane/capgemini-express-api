import request from "supertest";
import app from "./app.js";

describe("Testing GET All Contacts", () => {
  test("It should respond to the GET method with 200", () => {
    request(app)
      .get("/api/contacts")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Testing GET One Contact By ID", () => {
  test("It should respond to the GET method with 200 When ID is sent", () => {
    request(app)
      .get("/api/contacts/3")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        console.log(response)
      });
  });
});
