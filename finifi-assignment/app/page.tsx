"use client"
import Sidebar from "@/Components/Sidebar";
import { NextUIProvider } from "@nextui-org/react";
import MainBody from "@/Components/MainBody";
import { useState } from "react";
export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = ()=>{
    setShowSidebar(!showSidebar)
  }
  return (
    <NextUIProvider>
      <div className="flex h-screen overflow-auto">
       <div className="hidden lg:flex">
         <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar}/>
         </div>
        <div className="relative h-full w-full">
          <MainBody/>
        </div>

      </div>


    </NextUIProvider>
  );
}
