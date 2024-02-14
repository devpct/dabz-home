import React from 'react'

export default function Input({ label }) {
  return (
    <>
    <div className='w-[355px]'>
    <p className='text-[#232F43] mb-1'>{ label }</p>
    <input
    type="text"
    className="py-3 px-4 block w-full h-[48px] border-[#E0DEF7] border rounded-lg bg-[#F7F7FA] text-gray-600 focus:ring-gray-300 focus:outline-none"
    />
    </div>
    </>
  )
}
