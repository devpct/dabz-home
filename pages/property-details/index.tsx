import React from 'react'
import QtyRoom from '@/components/modules/AddProperty/QtyRoom';
import Input from '@/components/modules/AddProperty/Input';

export default function index() {
  return (
    <>
    <div className='text-[#000929] grid px-4'>
      <h2 className='sm:text-[24px] text-[16px] font-bold m-auto sm:mt-[4rem] sm:mb-[2rem] mt-[2.5rem] mb-[1.5rem]'>مشخصات ملک</h2>
      <div className="p-[1.8rem] lg:w-[880px] w-full bg-white border border-[#E0DEF7] rounded-[16px] sm:mx-auto grid">
      <div className='sm:grid grid-cols-2 flex flex-wrap xl:justify-normal justify-center gap-5'>
      
      <Input label='متراژ'/>
      <Input label='سال ساخت'/>
      <Input label='طبقه'/>
      <Input label='واحد'/>
      <Input label='قیمت'/>

      </div>
      <QtyRoom/>
      </div>
      <button className='sm:mt-8 mt-5 sm:mb-0 mb-[3rem] mx-auto w-[250px] h-[48px] bg-[#26397F] text-white rounded-[8px]'>ثبت و ادامه</button>
    </div>
    </>
  )
}
