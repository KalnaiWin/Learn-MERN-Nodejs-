import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

connectDB();

// middleware
app.use(express.json()); // --> allow to access req.body and take info by json

app.use("/api/notes", notesRoutes);

app.listen(port, () => {
  console.log("Server started on PORT: ", port);
});
