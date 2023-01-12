class ContactService {
  contacts = [
    { id: 1, name: "John", phone: "066666666" },
    { id: 2, name: "Jane", phone: "066666666" },
    { id: 3, name: "Smith", phone: "066666666" },
    { id: 4, name: "Will", phone: "066666666" },
  ];

  constructor() {}

  _findIndex = (contactId) => {
    return this.contacts.findIndex((contact) => contact.id == contactId);
  };

  _generateId = () => {
    if (this.contacts.length == 0) return 1;
    return this.contacts.sort((c1, c2) => -c1.id + c2.id)[0].id + 1;
  };

  getAll = () => {
    return this.contacts;
  };

  findOneById = (idContact) => {
    const contact = this.contacts.find((contact) => contact.id == idContact);
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
