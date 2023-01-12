import ContactService from "../services/contact.js";

const contactService = new ContactService();

const getContacts = (req, res) => {
  try {
    const contacts = contactService.getAll();
    res.status(200).json({ contacts });
  } catch (error) {
    res.status(404).json({ status: 404, message: error.message });
  }
};

const getContact = (req, res) => {
  try {
    const { id } = req.params;
    const contact = contactService.findOneById(id);
    res.status(200).json({ contact });
  } catch (error) {
    res.status(404).json({ status: 404, message: error.message });
  }
};

const addContact = (req, res) => {
  try {
    const { name, phone } = req.body;
    const newContact = contactService.addOne({ name, phone });
    res.status(200).json({ contact: newContact });
  } catch (error) {
    res.status(404).json({ status: 404, message: error.message });
  }
};

const updateContact = (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone } = req.body;
    const updatedContact = contactService.updateOne({
      id,
      name,
      phone,
    });
    res.status(200).json({ contact: updatedContact });
  } catch (error) {
    res.status(404).json({ status: 404, message: error.message });
  }
};

const deleteContact = (req, res) => {
  try {
    const { id } = req.params;
    contactService.deleteOne(id);
    res.status(200).json({ message: "Contact deleted !" });
  } catch (error) {
    res.status(404).json({ status: 404, message: error.message });
  }
};

export { addContact, getContacts, getContact, updateContact, deleteContact };
