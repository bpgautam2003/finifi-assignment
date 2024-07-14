import MainContent from "./MainContent"
import Navbar from "@/Components/Navbar";
import { ArrowLeft, Info, ReceiptText, RotateCcw, MessageCircle, Download, Forward, MonitorCheck, ChevronRight } from 'lucide-react';
import Attachments from "./Attachments";

const MainBody: React.FC = () => {
    return (
        <div className="h-full overflow-hidden">
            <Navbar />
            <div className="mt-1 pr-2 flex w-full items-center justify-between">
                <div className="flex flex-wrap w-full lg:w-fit justify-between md:justify-start px-2 gap-1 lg:p-2 lg:gap-2 items-center">
                    <div className="flex items-center gap-1">
                        <ArrowLeft />
                        <h1 className=" text-sm lg:text-md font-bold">OlaMoney Technologies India Pvt Ltd</h1>
                    </div>
                    <span className="text-[10px] md:text-xs text-center text-purple-color lg:font-semi-bold bg-blue-bg px-2 py-1 lg:py-2 lg:px-2 mx-2 border-purple-color border rounded-2xl">Awaiting Business Approval</span>

                </div>
                <div className="flex items-center p-2 md:px-4 w-full lg:w-fit lg:w-3/5 justify-between fixed bottom-0 bg-white z-20 lg:relative lg:px-2 lg:py-0">
                    <div className="flex gap-1 md:gap-4 lg:gap-4 items-center ">
                        <Info size={20} className="cursor-pointer h-4 md:h-6 lg:h-12" />
                        <ReceiptText size={20} className="cursor-pointer h-4 md:h-6 lg:h-12" />
                        <RotateCcw size={20} className="cursor-pointer h-4 md:h-6 lg:h-12" />
                        <MessageCircle size={20} className="cursor-pointer h-4 md:h-6 lg:h-12" />
                        <Download size={20} className="cursor-pointer h-4 md:h-6 lg:h-12" />
                        <Forward size={20} className="cursor-pointer h-4 md:h-6 lg:h-12" />
                    </div>

                    <div className="flex gap-4 mx-2">
                        <button className="flex h-8 items-center bg-[#f5faf4] text-green-color px-1 py-1 rounded-md text-xs lg:gap-2 lg:px-2">
                            <MonitorCheck size={20} className="cursor-pointer h-4 lg:h-12 hidden md:flex lg:flex" />
                            Save Draft
                        </button>
                        <button className="flex h-8 items-center bg-primary-color text-white p-1 rounded-md text-xs justify-center lg:text-sm lg:px-2">
                            Submit
                            <ChevronRight size={20} className="cursor-pointer h-4 lg:h-12" />
                        </button>

                    </div>

                </div>

            </div>
            <div className="flex h-full pb-2">
                <MainContent />
                <div className="h-full overflow-auto hidden lg:flex lg:w-1/4">
                    <Attachments />
                </div>


            </div>




        </div>
    )
}

export default MainBody
