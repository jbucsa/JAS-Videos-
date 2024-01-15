import mongoose, { Document } from 'mongoose';

// Interface with explicit types
export interface Movie extends Document {
    movie_id: number;
    title: string;
    plot: string;
    author: string;
    year?: number;
    released?: number;
    run_time?: number;
    genres?: string;
    director?: string;
    language?: string;
    country?: string;
    poster?: string;
}
//typscript format for mongoose schema
const movieSchema = new mongoose.Schema({
    movie_id: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    plot: {
        type: String,
        required: true,
        default: 'The reality-bending adventures of...',
    },
    author: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        default: 2023,
    },
    released: {
        type: Number,
        default: 2023,
    },
    run_time: {
        type: Number,
        default: 120,
    },
    genres: {
        type: String,
        default: 'Action',
    },
    director: {
        type: String,
        default: "Stephen Spielberg",
    },
    language: {
        type: String,
        default: "English",
    },
    country: {
        type: String,
        default: "USA",
    },
    poster: {
        type: String,
        default: 'https://media.istockphoto.com/id/157482029/photo/stack-of-books.jpg?s=1024x1024&w=is&k=20&c=iQdICOnz_UmfAiFuY3d3LQe1B9cYHI3UwjTPNKBOlow='
    },
});
//typscript exports
export default mongoose.model<Movie>('Movie', movieSchema); // Default export with type
