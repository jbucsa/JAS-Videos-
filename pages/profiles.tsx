import { NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback } from "react";

import useCurrentUser from "@/hooks/useCurrentUser";

//saves web-browser context from previous sessions
export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/index',
                permanent: false,
            }
        }
    }

    return {
        props: {}
    }
}
//necessary for typescript
interface UserCardProps {
    name: string;
}
//creates a react component called UserCard that inputs a name
const UserCard: React.FC<UserCardProps> = ({ name }) => {

    return (
        <div className="group flex-row w-44 mx-auto">
            <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                <img draggable={false} className="w-max h-max object-contain" src={'/images/default-red.png'} alt="profile-guy" />
            </div>
            <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">{name}</div>
        </div>
    );
}
//the actual running part of the code
const App = () => {
    const router = useRouter();
    //grabs the data from our current user via the hook
    const { data: currentUser } = useCurrentUser();
    //updates anytime the router changes
    const selectProfile = useCallback(() => {
        router.push('/home');
    }, [router]);
    //inject react/html elements
    return (
        <div className="flex items-center h-full justify-center">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-6xl text-white text-center">Who&#39;s watching?</h1>
                <div className="flex items-center justify-center gap-8 mt-10">
                    <div onClick={() => selectProfile()}>
                        <UserCard name={currentUser?.name} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
