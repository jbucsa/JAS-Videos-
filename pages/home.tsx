import NavBar from "./components/NavBar"
import Billboard from "./components/Billboard";
import '../styles/globals.css';
import VideoCard from "./components/VideoCard";
import MovieGrid from "./components/MovieGrid";
import randomMovies from '../lib/seedData'
//DATABASE RENDERING ISSUES
//import db from '../models/movie2'
//UNFINISHED CONNECTING DATABASE
//const some_movies = await db.find().limit(10)

console.log(randomMovies)
export default function Home() {

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <NavBar />
        <Billboard />
        <div className="pb-40">
          <MovieGrid movieData={randomMovies} listName={"Trending"} />
        </div>
        <div className="pb-40">
          <MovieGrid movieData={randomMovies} listName={"New Releases"} />
        </div>
        <div className="pb-40">
          <MovieGrid movieData={randomMovies} listName={"For You"} />
        </div>
      </div>
    </div>
  )
}


