const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 255,
  },
  author: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 255,
  },
  year: {
    type: Number,
    required: true,
    min: 1000,
    max: new Date().getFullYear(),
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
