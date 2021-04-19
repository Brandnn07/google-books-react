const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: {type: String, require: true},
    title: { type: String, require: true},
    authors: [{ type: String, require: true}],
    sypnosis: String,
    description: { type: String, require: true},
    image: { type: String},
    link: { type: String, required: true}
})

const GoogleBooks = mongoose.model("GoogleBooks", bookSchema);

module.exports = GoogleBooks;