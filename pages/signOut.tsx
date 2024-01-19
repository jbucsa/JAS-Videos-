import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";

import useCurrentUser from "@/hooks/useCurrentUser";

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

   export default function ExitUser() {
    // Use the following function to import CurrentUser data
    const { data: user } = useCurrentUser();

    return (
        <div>
            {/* This is a template for signout button */}
        <button className="h-10 w-full bg-white" onClick={() => signOut()}>Logout!
        </button>
        {/* This will display current user information */}
        <p className="text-white"> Logged in as : {user?.name} - {user?.email} </p>
        </div>
    )
   }