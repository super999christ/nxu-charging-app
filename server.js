const express = require("express");
const path = require("path");

const app = express();

// Serve the build folder
app.use(express.static(path.join(__dirname, "/build")));

// Handle SPA routing, return the index.html file
app.get("/healthz", (req, res) => {
  res.status(200).send("Alive");
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server listening on port ${port}`));
