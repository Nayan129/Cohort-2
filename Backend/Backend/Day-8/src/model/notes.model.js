const mongoose = require("mongoose");

// this method mongoose.schema defines the property that comes in our database i.e. which type of data we are adding in database
const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
});

// this is model use to perform CRUD operations in database using server. without Model we cannot able to perform CRUD operations.
const noteModel = mongoose.model("notes", noteSchema);

// now we export noteModel and use it inside app.js to perform CRUD operations
module.exports = noteModel;
