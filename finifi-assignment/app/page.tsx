"use client"
import Attachments from "@/Components/Attachments";
import MainContent from "@/Components/MainContent";
import Sidebar from "@/Components/Sidebar";
import Navbar from "@/Components/Navbar";
import { NextUIProvider } from "@nextui-org/react";
import MainBody from "@/Components/MainBody";
export default function Home() {
  return (
    <NextUIProvider>
      <div className="flex h-screen overflow-auto">
       <div className="hidden lg:flex">
         <Sidebar/>
         </div>
        <div className="relative h-full w-full">
          <MainBody/>

          {/* <div className="relative flex justify-between gap-1">
            <MainContent />           
            <Attachments />           
          </div> */}
        </div>

      </div>


    </NextUIProvider>
  );
}
