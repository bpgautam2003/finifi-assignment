import { useState } from 'react';
import { Compass, FileText, Settings, X } from 'lucide-react';

interface SidebarProps {
  showSidebar: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ showSidebar, toggleSidebar }) => {
  const [activeIcon, setActiveIcon] = useState('FileText');

  return (
    <div className="relative bg-blue-bg h-screen py-2 w-16 flex flex-col items-center gap-6 text-primary-color">
      <X className="lg:hidden mt-2" onClick={toggleSidebar} />
      <div className="bg-[url(/images/logo.png)] bg-cover h-8 w-8 mx-auto my-1 hidden lg:flex"></div>

      <div
        className={`cursor-pointer w-full p-2 rounded-s-full ${activeIcon === 'Compass' ? 'bg-primary-color text-white' : 'hover:bg-br-color'}`}
        onClick={() => setActiveIcon('Compass')}
      >
        <Compass className="mx-auto" />
      </div>

      <div
        className={`cursor-pointer w-full p-2 rounded-s-full ${activeIcon === 'FileText' ? 'bg-primary-color text-white' : 'hover:bg-br-color'}`}
        onClick={() => setActiveIcon('FileText')}
      >
        <FileText className="mx-auto" />
      </div>

      <div
        className={`cursor-pointer w-full p-2 rounded-s-full ${activeIcon === 'CustomIcon' ? 'bg-primary-color text-white' : 'hover:bg-br-color'}`}
        onClick={() => setActiveIcon('CustomIcon')}
      >
        <div className="bg-[url(/images/s3.svg)] bg-cover h-6 w-6 mx-auto"></div>
      </div>

      <div
        className={`cursor-pointer w-full p-2 rounded-s-full ${activeIcon === 'Settings' ? 'bg-primary-color text-white' : 'hover:bg-br-color'}`}
        onClick={() => setActiveIcon('Settings')}
      >
        <Settings className="mx-auto" />
      </div>
    </div>
  );
};

export default Sidebar;
