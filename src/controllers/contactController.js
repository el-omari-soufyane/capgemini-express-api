import { contacts } from "../../contacts.js";

const getContacts = (req, res) => {
  res.status(200).json({ contacts });
};

const getContact = (req, res) => {
  const { id } = req.params;
  const contact = contacts.find((contact) => contact.id == id);
  res.status(200).json({ contact });
};

export { getContacts, getContact };
