import express from "express";
import contactRouter from "./src/routes/contactRouter.js";

const app = express();
const urlPreffix = "/api";

app.use(express.json());
app.use(`${urlPreffix}/contacts`, contactRouter);

export default app;
