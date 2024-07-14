"use client"
import { Paperclip, CloudUpload } from 'lucide-react'
import { Switch, DatePicker } from "@nextui-org/react";
import Attachments from './Attachments';
import { useState } from 'react';
const MainContent = () => {
    const [showTabs, setShowTabs] = useState('vendor-details');
    return (
        <div className="relative w-full h-full border-br-color-800 border rounded-md overflow-auto lg:mx-2 my-1">
            <div className="sticky w-full top-0 z-20 flex overflow-x-auto bg-white gap-6 border-b-br-color-800 border-b py-2 px-4 items-center">
                <h3 className={`text-xs md:text-sm lg:text-sm text-primary-color cursor-pointer  ${showTabs === 'request-details' ? 'font-bold' : ''}`} onClick={() => setShowTabs('request-details')} >Vendor request details</h3>
                <h3 className={`text-xs md:text-sm lg:text-sm text-primary-color cursor-pointer  ${showTabs === 'vendor-details' ? 'font-bold' : ''}`} onClick={() => setShowTabs('vendor-details')}>Vendor form details</h3>
                <h3 className={`text-xs md:text-sm lg:text-sm text-primary-color cursor-pointer  ${showTabs === 'finance-details' ? 'font-bold' : ''}`} onClick={() => setShowTabs('finance-details')}>Add finance details</h3>
                <h3 className={`text-xs md:text-sm lg:text-sm text-primary-color cursor-pointer hidden md:flex lg:hidden ${showTabs === 'attachments' ? 'font-bold' : ''}`} onClick={() => setShowTabs('attachments')}>Attachments</h3>
                <Paperclip size={20} className="text-primary-color cursor-pointer md:hidden lg:hidden" onClick={() => setShowTabs('attachments')} />
            </div>

            <div className={`w-full h-full overflow-auto ${showTabs === 'attachments' ? '' : 'hidden'}`}>
                <Attachments />
            </div>

            <div className={`border-b-br-color border-b pb-4 mb-4 ${showTabs === 'vendor-details' ? '' : 'hidden'}`}>
                <div className="flex gap-2 p-4 lg:m-2">
                    <span className="bg-red-600 p-1 rounded-md"></span>
                    <h2 className="text-md font-bold">Business Details</h2>
                </div>
                <div className="flex flex-wrap gap-2 lg:gap-4 px-2 m-2">
                    <div className="p-2 w-48">
                        <h3 className="text-sm">Vendor ID</h3>
                        <input type="text" className="w-full h-8 px-2 border-br-color border rounded-md mt-2"></input>
                    </div>
                    <div className="p-2 w-48">
                        <h3 className="text-sm">Legal Name<span className="text-red-600">*</span></h3>
                        <input type="text" className="w-full h-8 px-2 border-br-color border rounded-md mt-2"></input>
                    </div>
                    <div className="p-2 w-48">
                        <h3 className="text-sm">Trade Name<span className="text-red-600">*</span></h3>
                        <input type="text" className="w-full h-8 px-2 border-br-color border rounded-md mt-2"></input>
                    </div>
                    <div className="p-2 w-48">
                        <h3 className="text-sm">Vendor State<span className="text-red-600">*</span></h3>
                        <select className="w-full h-8  border-br-color border rounded-md mt-2 p-1 items-center cursor-pointer">
                            <option>Select</option>
                            <option>Karnataka</option>
                        </select>
                    </div>
                    <div className="p-2 w-48">
                        <h3 className="text-sm">Vendor Location<span className="text-red-600">*</span></h3>
                        <select className="w-full h-8  border-br-color border rounded-md mt-2 p-1 items-center cursor-pointer">
                            <option>Select</option>
                            <option>Bangalore</option>
                        </select>
                    </div>
                    <div className="p-2 w-48">
                        <h3 className="text-sm">GST Registered</h3>
                        <Switch defaultSelected color="success" className="mt-2" />
                    </div>
                    <div className="p-2 w-48">
                        <h3 className="text-sm">GST Certificate<span className="text-red-600">*</span></h3>
                        <label htmlFor="file-upload" className="w-full h-8 border-br-color border rounded-md mt-2 flex gap-1 items-center justify-center cursor-pointer bg-blue-bg text-primary-color text-sm ">
                            <CloudUpload size={18} /> Browse or drop files
                        </label>
                        <input id="file-upload" type="file" className="hidden" />
                    </div>
                    <div className="p-2 w-48">
                        <h3 className="text-sm">Payment Terms</h3>
                        <input type="text" className="w-full h-8 px-2 border-br-color border rounded-md mt-2"></input>
                    </div>
                    <div className="p-2 w-48 ">
                        <h3 className="text-sm">PAN Attachment<span className="text-red-600">*</span></h3>
                        <label htmlFor="file-upload" className="w-full h-8 border-br-color border rounded-md mt-2 flex gap-1 items-center justify-center cursor-pointer bg-blue-bg text-primary-color text-sm ">
                            <CloudUpload size={18} /> Browse or drop files
                        </label>
                        <input id="file-upload" type="file" className="hidden" />
                    </div>
                    <div className="p-2 w-48">
                        <h3 className="text-sm">Policy<span className="text-red-600">*</span></h3>
                        <select className="w-full h-8  border-br-color border rounded-md mt-2 p-1 items-center cursor-pointer">
                            <option>Select</option>
                            <option>MarketingALL</option>
                        </select>
                    </div>
                    <div className="p-2 w-64 lg:w-4/12">
                        <h3 className="text-sm">Vendor address</h3>
                        <input type="text" className="w-full h-8 px-2 border-br-color border rounded-md mt-2"></input>
                    </div>


                </div>

            </div>
            <div className={`border-b-br-color border-b pb-4 mb-4 ${showTabs === 'vendor-details' ? '' : 'hidden'}`}>
                <div className="flex gap-2 p-4 lg:m-2">
                    <span className="bg-red-600 p-1 rounded-md"></span>
                    <h2 className="text-md font-bold">MSME Details</h2>
                </div>
                <div></div>
                <div className="flex flex-wrap gap-4 px-2 m-2">
                    <div className="p-2 w-48">
                        <h3 className="text-sm">MSME Registered</h3>
                        <Switch defaultSelected color="success" className="mt-2" />
                    </div>
                    <div className="p-2 w-48">
                        <h3 className="text-sm">MSME Attachment<span className="text-red-600">*</span></h3>
                        <label htmlFor="file-upload" className="w-full h-8 border-br-color border rounded-md mt-2 flex gap-1 items-center justify-center cursor-pointer bg-blue-bg text-primary-color text-sm ">
                            <CloudUpload size={18} /> Browse or drop files
                        </label>
                        <input id="file-upload" type="file" className="hidden" />
                    </div>
                    <div className="p-2 w-48">
                        <h3 className="text-sm">Lower Exception</h3>
                        <Switch defaultSelected color="success" className="mt-2" />
                    </div>
                    <div className="p-2 w-56">
                        <h3 className="text-sm">Lower exception certificate</h3>
                        <label htmlFor="file-upload" className="w-full h-8 border-br-color border rounded-md mt-2 flex gap-1 items-center justify-center cursor-pointer bg-blue-bg text-primary-color text-sm ">
                            <CloudUpload size={18} /> Browse or drop files
                        </label>
                        <input id="file-upload" type="file" className="hidden" />
                    </div>
                    <div className="p-2 w-48">
                        <h3 className="text-sm">LDC Upper limit</h3>
                        <input type="text" className="w-full h-8 px-2 border-br-color border rounded-md mt-2"></input>
                    </div>
                    <div className="p-2 w-48">
                        <h3 className="text-sm">LDC Start Date<span className="text-red-600">*</span></h3>
                        <DatePicker className="mt-2" />

                    </div>
                    <div className="p-2 w-48">
                        <h3 className="text-sm">LDC End Date<span className="text-red-600">*</span></h3>
                        <DatePicker className="mt-2" />
                    </div>
                    <div className="p-2 w-48">
                        <h3 className="text-sm">PAN Number</h3>
                        <input type="text" className="w-full h-8 px-2 border-br-color border rounded-md mt-2"></input>
                    </div>


                </div>

            </div>
            <div className={`border-b-br-color border-b pb-4 mb-4 ${showTabs === 'vendor-details' ? '' : 'hidden'}`}>
                <div className="flex gap-2 p-4 lg:m-2">
                    <span className="bg-red-600 p-1 rounded-md"></span>
                    <h2 className="text-md font-bold">Additional location for supply</h2>
                </div>
                <div className="flex flex-wrap gap-8 gap-y-4 px-2 m-2">
                    <div className="p-2 w-48">
                        <h3 className="text-sm">Select State<span className="text-red-600">*</span></h3>
                        <select className="w-full h-8  border-br-color border rounded-md mt-2 p-1 items-center cursor-pointer">
                            <option>Select</option>
                            <option>Karnataka</option>
                        </select>
                    </div>
                    <div className="p-2 w-48">
                        <h3 className="text-sm">Location</h3>
                        <input type="text" className="w-full h-8  border-br-color border rounded-md mt-2"></input>
                    </div>
                    <div className="p-2 w-48">
                        <h3 className="text-sm">Location GSTIn</h3>
                        <input type="text" className="w-full h-8  border-br-color border rounded-md mt-2"></input>
                    </div>
                    <div className="p-2 w-56">
                        <h3 className="text-sm">Location GSTIn certificate<span className="text-red-600">*</span></h3>
                        <label htmlFor="file-upload" className="w-full h-8 border-br-color border rounded-md mt-2 flex gap-1 items-center justify-center cursor-pointer bg-blue-bg text-primary-color text-sm ">
                            <CloudUpload size={18} /> Browse or drop files
                        </label>
                        <input id="file-upload" type="file" className="hidden" />
                    </div>
                    <div className="p-2 w-48">
                        <h3 className="text-sm">POC Name<span className="text-red-600">*</span></h3>
                        <input type="text" className="w-full h-8  border-br-color border rounded-md mt-2"></input>
                    </div>
                    <div className="p-2 w-48">
                        <h3 className="text-sm">POC Designation<span className="text-red-600">*</span></h3>
                        <input type="text" className="w-full h-8  border-br-color border rounded-md mt-2"></input>
                    </div>
                    <div className="p-2 w-48">
                        <h3 className="text-sm">POC Email ID<span className="text-red-600">*</span></h3>
                        <input type="email" className="w-full h-8  border-br-color border rounded-md mt-2"></input>
                    </div>
                    <div className="p-2 w-56">
                        <h3 className="text-sm">POC Mobile Number<span className="text-red-600">*</span></h3>
                        <input type="text" className="w-full h-8  border-br-color border rounded-md mt-2"></input>
                    </div>
                    <div className="p-2 w-64">
                        <h3 className="text-sm">Address<span className="text-red-600">*</span></h3>
                        <input type="text" className="w-full h-8  border-br-color border rounded-md mt-2"></input>
                    </div>


                </div>

            </div>
            <div className={`border-b-br-color border-b pb-8 mb-8 ${showTabs === 'vendor-details' ? '' : 'hidden'}`}>
                <div className="flex gap-2 p-4 lg:m-2">
                    <span className="bg-red-600 p-1 rounded-md"></span>
                    <h2 className="text-md font-bold">Account Details</h2>
                </div>
                <div className="flex flex-wrap gap-8 gap-y-4 px-2 m-2 mb-10 pb-8">
                    <div className="p-2 w-48">
                        <h3 className="text-sm">Select Bank<span className="text-red-600">*</span></h3>
                        <select className="w-full h-8  border-br-color border rounded-md mt-2 p-1 items-center cursor-pointer">
                            <option>Select</option>
                            <option>SBI</option>
                        </select>
                    </div>
                    <div className="p-2 w-48">
                        <h3 className="text-sm">Account Name</h3>
                        <input type="text" className="w-full h-8  border-br-color border rounded-md mt-2"></input>
                    </div>
                    <div className="p-2 w-48">
                        <h3 className="text-sm">Account Number</h3>
                        <input type="text" className="w-full h-8  border-br-color border rounded-md mt-2"></input>
                    </div>
                    <div className="p-2 w-56">
                        <h3 className="text-sm">Confirm Account Number</h3>
                        <input type="text" className="w-full h-8  border-br-color border rounded-md mt-2"></input>
                    </div>
                    <div className="p-2 w-48">
                        <h3 className="text-sm">IFSC Code</h3>
                        <input type="text" className="w-full h-8  border-br-color border rounded-md mt-2"></input>
                    </div>
                    <div className="p-2 w-48">
                        <h3 className="text-sm">Cancelled Check</h3>
                        <label htmlFor="file-upload" className="w-full h-8 border-br-color border rounded-md mt-2 flex gap-1 items-center justify-center cursor-pointer bg-blue-bg text-primary-color text-sm ">
                            <CloudUpload size={18} /> Browse or drop files
                        </label>
                        <input id="file-upload" type="file" className="hidden" />
                    </div>

                    <div className="p-2 w-56 md:hidden h-6">

                    </div>
                </div>

            </div>

        </div>
    )
}

export default MainContent
