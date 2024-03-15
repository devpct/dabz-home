import React from 'react'
import Link from 'next/link'

export default function Button({ title, route }) {
  return (
    <>
      <Link className='mx-auto sm:mt-8 mt-5 sm:mb-0 mb-[3rem]' href={`${route}`}>
      <button className='w-[250px] h-[48px] bg-[#26397F] text-white rounded-[8px]'>{title}</button>
      </Link>
    </>
  )
}
