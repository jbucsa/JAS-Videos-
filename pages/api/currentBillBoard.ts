import { NextApiRequest, NextApiResponse } from "next";
import serverBillBoard from "@/lib/serverBillBoard";

export default async function handler( req: NextApiRequest, res: NextApiResponse) {
    if (req.method != 'GET'){
        return res.status(405).end();
    }

    try {
        const { randomBillBoard } = await serverBillBoard(req);
   
        return res.status(200).json(randomBillBoard);
    } catch (error){
        console.log(error);
        return res.status(400).end();
    }
}