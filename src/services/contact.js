import { nanoid } from "nanoid";

class ContactService {
  contacts = [{ id: 1, name: "John", phone: "077777777" }];

  constructor() {}

  _findIndex = (contactId) => {
    return this.contacts.findIndex((contact) => contact.id === contactId);
  };

  _generateId = () => {
    return nanoid();
  };

  getAll = () => {
    return this.contacts;
  };

  findOneById = (idContact) => {
    const contact = this.contacts.find((contact) => contact.id === idContact);
    if (!contact) throw new Error("Contact not found !");
  };

  addOne = (newContact) => {
    const generatedId = this._generateId();
    this.contacts.push({ id: generatedId, ...newContact });
    return { id: generatedId, ...newContact };
  };

  updateOne = (updatedContact) => {
    const index = this._findIndex(updatedContact.id);
    if (index == -1) throw new Error("The contact does not exist !");
    this.contacts.splice(index, 1, updatedContact);
    return updatedContact;
  };

  deleteOne = (contact) => {
    const index = this._findIndex(contact);
    this.contacts.splice(index, 1);
  };
}

export default ContactService;
