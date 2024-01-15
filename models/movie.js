require('dotenv').config()
const mongoose = require('mongoose');

//connect mongoose
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const movieSchema = new mongoose.Schema({
    movie_id: { type: Number, required: true },
    title: { type: String, required: true },
    plot: { type: String, required: true, default: 'The reality- bending adventures of a clandestine service agency in the year 2166' },
    author: { type: String, required: true },
    year: { type: Number, default: 2023 },
    released: { type: Number, default: 2023 },
    run_time: { type: Number, default: 120 },
    genres: { type: String, default: 'Action' },
    director: { type: String, default: "Stephen Spielberg" },
    language: { type: String, default: "English" },
    country: { type: String, default: "USA" },
    poster: { type: String, default: 'https://media.istockphoto.com/id/157482029/photo/stack-of-books.jpg?s=1024x1024&w=is&k=20&c=iQdICOnz_UmfAiFuY3d3LQe1B9cYHI3UwjTPNKBOlow=' }

}, { toJSON: { virtuals: true } })

//exports Movie
module.exports.Movie = mongoose.model('Movie', movieSchema)