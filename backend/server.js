import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
  res.status(200).send("You have got 5 notes");

});

app.listen(5000, () => {
  console.log("Server started on PORT: 5000");
});
