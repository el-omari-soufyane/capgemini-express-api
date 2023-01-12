import express from "express";
import {
  getContact,
  getContacts,
  addContact,
  updateContact,
  deleteContact,
} from "../controllers/contactController.js";
const router = express.Router();

router.get("/", getContacts);
router.get("/:id", getContact);
router.post("/add", addContact);
router.put("/update/:id", updateContact);
router.delete("/delete/:id", deleteContact);

export default router;
