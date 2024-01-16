import React, { useCallback } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

import PlayButton from '../components/PlayButton';
//INCOMPLETE
//import useBillboard from '@/hooks/useBillboard';
//import useInfoModalStore from '@/hooks/useInfoModalStore';

const Billboard: React.FC = () => {
    //INCOMPLETE
    /*
    const { openModal } = useInfoModalStore();
    const { data } = useBillboard();

    const handleOpenModal = useCallback(() => {
        openModal(data?.id);
    }, [openModal, data?.id]);
    */
    //NEED TO FILL DATA FROM DATABASE HERE:
    const testMovie = {
        movie_id: 10,
        title: "SomeFilm",
        plot: 'The reality- bending adventures of a clandestine service agency in the year 2166',
        year: 2023,
        released: 2023,
        run_time: 120,
        genre: 'Action',
        director: "Stephen Spielberg",
        language: "English",
        country: "USA",
        poster: 'https://media.istockphoto.com/id/157482029/photo/stack-of-books.jpg?s=1024x1024&w=is&k=20&c=iQdICOnz_UmfAiFuY3d3LQe1B9cYHI3UwjTPNKBOlow='

    }


    return (
        <div className="relative h-[56.25vw]">
            <img src={testMovie.poster} className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500" alt={testMovie.plot}></img>
            <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
                <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
                    {testMovie.title}
                </p>
                <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
                    {testMovie.plot}
                </p>
                <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
                    <PlayButton movieId={testMovie.poster} />
                    <button
                        className="
            bg-white
            text-white
              bg-opacity-30 
              rounded-md 
              py-1 md:py-2 
              px-2 md:px-4
              w-auto 
              text-xs lg:text-lg 
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-opacity-20
              transition
            "
                    >
                        <InformationCircleIcon className="w-4 md:w-7 mr-1" />
                        More Info
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Billboard;
