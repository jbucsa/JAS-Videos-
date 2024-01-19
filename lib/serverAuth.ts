import { NextApiRequest } from "next";
import { getSession} from "next-auth/react";


// This import WILL change depending on what database we use: Mongo or Postgree
// import dbConnect from "./dbConnect";

// This import WILL change depending on what database we use: Mongo or Postgree
import prismadb from "./prismadb";

const serverAuth = async (req: NextApiRequest) => {
    const session = await getSession({req });

    if (!session?.user?.email) {
        throw new Error('Not signed in');
    }
    const currentUser = await prismadb.user.findUnique({
        where: {
            email: session.user.email
        }
    });
    if (!currentUser) {
        throw new Error('Not signed in')
    }
    return { currentUser };
};

export default serverAuth;