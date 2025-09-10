import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

app.use("/api/notes", notesRoutes);
// app.use("/api/products", productsRoutes);

app.listen(5000, () => {
  console.log("Server started on PORT: 5000");
});
