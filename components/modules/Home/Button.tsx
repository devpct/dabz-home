import React from 'react'

export default function Header({ title }) {
  return (
    <>
    <button className='sm:w-[500px] w-full h-[60px] bg-[#CB9044] text-white rounded-[12px] font-bold sm:text-[20px]
     text-[18px]'>{title}</button>
    </>
  )
}
