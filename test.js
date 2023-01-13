import request from "supertest";
import app from "./app.js";
import ContactService from "./src/services/contact.js";

const contactService = new ContactService();

jest.mock("nanoid", () => {
  return { nanoid: () => "1234" };
});

describe("Testing GET All Contacts", () => {
  test("It should respond to the GET method with 200", () => {
    request(app)
      .get("/api/contacts")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Testing Adding New Contact", () => {
  test("It should respond to the POST method with 200", () => {
    request(app)
      .post("/api/contacts/add")
      .send({ name: "John", phone: "0626262626" })
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});


describe("Testing Updating Contact", () => {
  test("It should respond to the PUT method with 200", () => {
    request(app)
      .post("/api/contacts/update/1")
      .send({ name: "Soufyane", phone: "0626262626" })
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.contact.name).toBe("Soufyane");
      });
  });

  test("It should respond to the PUT method with 404", () => {
    request(app)
      .post("/api/contacts/update/4")
      .send({ name: "Soufyane", phone: "0626262626" })
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
  });
});

describe("Testing Deleting a Contact", () => {
  test("It should respond to the DELETE method with 200 When ID is sent", () => {
    request(app)
      .delete("/api/contacts/delete/4")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("Contact deleted !");
      });
  });
});
