import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/lib/prismadb'
import serverAuth from '@/lib/serverAuth'

export default async function handler(req:NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    try {
        // is a user logged in?
        await serverAuth(req);

    const movieCount = await prismadb.movies.count();
    const randomIndice = Math.floor(Math.random() * movieCount);

    const randomMovies = await prismadb.movies.findMany({
      take: 1,
      skip: randomIndice
    });

    return res.status(200).json(randomMovies[0]); /* We need to get the first element from the array since we are only retrieving one movie*/

    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}