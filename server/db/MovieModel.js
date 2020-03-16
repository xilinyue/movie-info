const mongoose = require("./index");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: {type: String, required: true},
    director: {type: String, required: true},
    year: {type: String, required: true},
    screenwriter: {type: String, required: true},
    type: {type: String, required: true},
    rating: {type: String, required: true},
    timing: {type: String, required: true},
    imdb_id: {type: String, required: true},
    poster: {type: String, required: true},
    description: {type: String, required: true},
});

const movie = mongoose.model("movie",movieSchema);

module.exports = movie;