import VideoCard from "./VideoCard";
import React from "react";

function MovieGrid(props) {
    //bring over data from props
    console.log("Movie Grid ALl Movies")
    console.log(props.allMovies)
    //format the videos into VideoCard components
    return (
        <div className="px-4 md:px-12 mt-4 space-y-8">
            <div>
                <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">Movie List</p>
                <div className="grid grid-cols-4 gap-2">
                    {props.allMovies.map((movie) => (
                        <VideoCard key={movie.id} myMovie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MovieGrid;