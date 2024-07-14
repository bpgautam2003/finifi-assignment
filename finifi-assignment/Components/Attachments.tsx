import { Paperclip } from 'lucide-react'
const Attachments = () => {
    return (
        <div className="w-full h-full lg:my-1 rounded-md lg:border-br-color-700 lg:border overflow-auto">
            <div className="text-primary-color p-2 h-10 hidden lg:flex gap-4 border-b-br-color-700 border-b items-center justify-between" >
                <h1 className="">Attachments</h1>
                <Paperclip size={18} />
            </div>
            <div className="p-2 pb-6 border-b-br-color-700 border-b">
                <h1 className="text-sm my-2 font-semibold">GST Certificate</h1>
                <span className="m-2 p-1 text-xs bg-blue-bg border-primary-color-800 border rounded-md">vvtech...ve.pdf</span>
                <h1 className="text-sm mt-4 my-2 font-semibold">PAN Number</h1>
                <span className="m-2 p-1 text-xs bg-blue-bg border-primary-color-800 border rounded-md">vvtech...ve.pdf</span>
                <h1 className="text-sm mt-4 my-2 font-semibold">MSME Certificate</h1>
                <span className="m-2 p-1 text-xs bg-blue-bg border-primary-color-800 border rounded-md">vvtech...ve.pdf</span>

            </div>
            <div className="p-2 pb-6">
                <h1 className="text-sm my-2 font-semibold">Vendor Contract</h1>
                <span className="m-2 p-1 text-xs bg-blue-bg border-primary-color-800 border rounded-md">vvtech...ve.pdf</span>
                <h1 className="text-sm mt-4 my-2 font-semibold">Vendor Final Proposal</h1>
                <span className="m-2 p-1 text-xs bg-blue-bg border-primary-color-800 border rounded-md">vvtech...ve.pdf</span>

            </div>



        </div>
    )
}

export default Attachments
