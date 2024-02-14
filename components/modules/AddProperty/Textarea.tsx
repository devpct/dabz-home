import React from 'react'

export default function Textarea({ label }) {
  return (
    <>
    <div className='w-full'>
     <p className='text-[#232F43] mb-1 '>{label}</p>
        <div className="relative">
            <textarea className="p-4 pb-12 block w-full h-[120px] bg-[#F7F7FA] border-[#E0DEF7] border rounded-lg text-sm focus:outline-none text-gray-600"></textarea>
            <div className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-gray-100 ">
            </div>
        </div>
    </div>
    </>
  )
}
