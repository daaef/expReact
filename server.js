const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

app.get("/", (req, res) => res.send("Hello"));

//  Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

// DB Config
const db = require("./config/keys").mongoURI;

// C0nnect to mongo DB via Mongoose
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(`Couldn't connect to MongoDB, error is ${err}`));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
