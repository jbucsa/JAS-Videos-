// import { NextApiRequest, NextApiResponse } from "next";
// import prismadb from '@/lib/prismadb';

// export default async function randomMovies(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const moviesCount = await prismadb.movies.count();
//     console.log(moviesCount)
//     const randomIndex = Math.floor(Math.random() * moviesCount);

//     const randomMovies = await prismadb.movies.findMany({
//       take: 1,
//       skip: randomIndex
//     });

//     console.log(randomMovies[0])
//     return res.status(200).json(randomMovies[0]);
//   } catch (error) {
//     console.log(error);

//     return res.status(500).end();
//   }
// };


import { NextApiRequest } from "next";

// This import WILL change depending on what database we use: Mongo or Postgree
// import dbConnect from "./dbConnect";

// This import WILL change depending on what database we use: Mongo or Postgree
import prismadb from "./prismadb";

const randomBillBoard = async (req: NextApiRequest) => {
  const moviesCount = await prismadb.movies.count();
  console.log(moviesCount)
  const randomIndex = Math.floor(Math.random() * moviesCount);
  const randomBillBoard = await prismadb.movies.findMany({
      take: 1,
      skip: randomIndex
    });
    console.log(randomBillBoard)
    return { randomBillBoard };
};

export default randomBillBoard;