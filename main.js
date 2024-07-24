const express = require("express");
const path = require("path");
const Database = require("better-sqlite3");

const app = express();
const port = 3000;

const db = new Database("trivia.db");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Default route
app.get("/", (req, res) => {
  const stmt = db.prepare("SELECT COUNT(*) AS team_count FROM teams");
  const row = stmt.get();
  res.render("index", { teamCount: row.team_count });
});

app.post("/signup", (req, res) => {
  // Read the signup form data and write to the database

  // Redirect to the home page
  res.redirect("/");
});

app.get("/admin", (req, res) => {
  res.render("admin", {});
});

app.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}`);
});
