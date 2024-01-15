import React from 'react';
//infterface allows us to add functional components (FC)
//when calling/creating this component
interface NavbarItemProps {
    label: string;
    active?: boolean;
}
//see below, the FC is called for the props outlined above
const NavbarItem: React.FC<NavbarItemProps> = ({ label, active }) => {
    return (
        <div className={active ? 'text-white cursor-default' : 'text-gray-200 hover:text-gray-300 cursor-pointer transition'}>
            {label}
        </div>
    )
}

export default NavbarItem;
