const express = require("express");
const path = require("path");
const app = express();
const port = 80;

app.use(express.static(path.join(__dirname, "dist")));

app.get("/health", (rep, res) => {
  res.status(200).send("OK");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
