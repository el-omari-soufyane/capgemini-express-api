import express from "express";
import { getContact, getContacts } from "../controllers/contactController.js";
const router = express.Router();

router.get("/", getContacts);
router.get("/:id", getContact);

export default router;
