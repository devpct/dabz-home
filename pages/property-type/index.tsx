import React from 'react'
import PropertyType from '@/components/modules/AddProperty/PropertyType'

export default function index() {
  return (
    <>
    <div className='text-[#000929] grid mb-5'>
      <h2 className='sm:text-[24px] text-[16px] font-bold m-auto sm:mt-[4rem] sm:mb-[4.5rem] mt-[2.5rem] mb-[1rem]'>نوع ملک را مشخص کنید</h2>
      <PropertyType/>
    </div>
    </>
  )
}
