import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";



export async function getServerSideProps (context: NextPageContext) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/index',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}

const Profiles = () => {
    const router = useRouter();

    const { data: currentUser } = useCurrentUser();


    return (
        <div className="flex item-center h-full justify-center">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-6xl text-white text-center">
                    Who is wathcing?
                </h1>
                <div className="flex item-center justify-center gap-8 mt-10">
                    {/* router.push('/') can be written as router.push('/home') to create a bypass */}
                    <div onClick={() => router.push('/home')}>
                        <div className="group flex-row w-44 mx-auto">
                            <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent
                            group-hover:curor-pointer group-hover:border-white
                            overflow-hidden">
                                <img src="/images/default-blue.png" alt="Profile" />
                            </div>
                            <div className="mt-4 text-gray-400 text-2xl text-center
                            group-hover:text-white">
                                {currentUser?.name}
                            </div>
                       </div>
                    </div>
                </div>
            </div>
            <p className="text-white text-4xl">Profiles</p>
        </div>
    )
};

export default Profiles;