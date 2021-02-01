const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");

const app = express()
const PORT = process.env.PORT || 3000;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);
// require("./routes/api/books.js")(app);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://dit1091:Ruby2021@cluster0.bxcpm.mongodb.net/googlebooks?retryWrites=true&w=majority",
{
  useCreateIndex: true,
  useNewUrlParser: true
  }
);

console.log("PID: " + process.pid);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now listening on port ${PORT}!`);
});