const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: {type: String},
    title: { type: String, require: true},
    authors: [{ type: String, require: true}],
    sypnosis: String,
    description: { type: String, require: true},
    image: { type: String},
    link: { type: String, required: true}
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;