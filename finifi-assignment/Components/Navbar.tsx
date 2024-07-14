import { Bell, Menu } from 'lucide-react';
import { Avatar } from "@nextui-org/react";
import Sidebar from './Sidebar';
import { useState } from 'react';

const Navbar: React.FC = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className="bg-white w-full border-b-br-color border-b flex px-4 py-2 justify-between items-center">
            <div className="flex items-center gap-2">
                <Menu onClick={toggleSidebar} size={24} className="lg:hidden cursor-pointer" />
                <div className="bg-[url(/images/logo.png)] bg-cover h-6 w-6 mx-auto my-1 lg:hidden"></div>
                <h1 className="font-bold text-md lg:text-xl">Manage Vendor</h1>
            </div>
            <div className="flex gap-1 md:gap-2 items-center">
                <div className="p-2 rounded-full border-br-color border cursor-pointer">
                    <Bell size={18} />
                </div>
                <div className="border-br-color border h-8 mx-2"></div>
                <div className="flex gap-2 items-center">
                    <Avatar className="w-9 h-9 cursor-pointer" src="/images/profile.png" />
                    <div className="hidden lg:flex lg:flex-col">
                        <h3 className="text-sm font-semibold">Rohit Sharma</h3>
                        <p className="text-xs">rohit.sharma@growquest.in</p>
                    </div>
                </div>
            </div>
            <div className={`fixed left-0 top-0 h-full bg-white shadow-lg border-r border-br-color z-30 transform transition-transform duration-300 ease-in-out ${showSidebar ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
                <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
            </div>
        </div>
    )
}

export default Navbar;
