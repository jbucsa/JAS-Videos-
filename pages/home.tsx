import NavBar from "./components/NavBar"
import Billboard from "./components/Billboard";
import '../styles/globals.css';
import VideoCard from "./components/VideoCard";
import MovieGrid from "./components/MovieGrid";
import randomMovies from '../lib/seedData'

// These imports are used for the SIGNOUT BUTTON
import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";

// This is used to import current user information
import useCurrentUser from "@/hooks/useCurrentUser";


//DATABASE RENDERING ISSUES
//import db from '../models/movie2'
//UNFINISHED CONNECTING DATABASE
//const some_movies = await db.find().limit(10)

// This export is needed to execute a signout from the database
export async function getServerSideProps( context: NextPageContext){
 const session = await getSession(context); 

if (!session) {
  return {
    redirect: {
      // destination: '/auth' if you followed the tutorials properly 
      destination: '/index',
      permanent: false 
    }
  }
}

return {
  props: {}
}


}

console.log(randomMovies)


export default function Home() {
  // Use the following function to import CurrentUser data
  const { data: user } = useCurrentUser();
  
  return (
    <div>
      {/* This is a template for signout button */}
      <button className="h-10 w-full bg-white" onClick={() => signOut()}>Logout!</button>

      {/* This will display current user information */}
      <p className="text-white"> Logged in as : {user?.name} - {user?.email} </p>

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
    </div>
  )
}


