
import React from 'react';
import { useRouter } from 'next/router'

//import useCurrentUser from '@/hooks/useCurrentUser';
//import { signOut } from 'next-auth/react';

interface AccountMenuProps {
    visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
    //CHANGE WHEN DATA ROUTES ARE COMPLETE
    //const { data: currentUser } = useCurrentUser();

    if (!visible) {
        return null;
    }

    //DUMMY DATA FOR FRONT-END RENDERING
    const router = useRouter();
    const testUser = {
        name: "john doe"
    }

    return (
        <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
            <div className="flex flex-col gap-3">
                <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
                    <img className="w-8 rounded-md" src="/images/default-blue.png" alt="" />
                    <p className="text-white text-sm group-hover/item:underline">{testUser.name}</p>
                </div>
            </div>
            <hr className="bg-gray-600 border-0 h-px my-4" />
            <div onClick={() => router.push('/home')} className="px-3 text-center text-white text-sm hover:underline">
                Sign out of Netflix
            </div>
        </div>
    )
}

export default AccountMenu;