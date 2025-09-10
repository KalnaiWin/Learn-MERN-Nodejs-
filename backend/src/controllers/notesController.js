export function getAllNotes(req, res) {
  res.status(200).send("You have just fetch 20 notes.");
}

export function createNotes(req, res) {
  res.status(201).json({ message: "Post created successfully" });
}

export function updateNotes(req, res) {
  res.status(201).json({ message: "Post updated successfully" });
}

export function deleteNotes(req, res) {
  res.status(200).json({ message: "Post deleted successfully" });
}
