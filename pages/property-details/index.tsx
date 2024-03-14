import React from 'react'
import QtyRoom from '@/components/modules/AddProperty/QtyRoom';
import Input from '@/components/modules/AddProperty/Input';
import Button from '@/components/modules/SalesSteps/Button';
import Head from 'next/head'

export default function index() {
  return (
    <>
    <Head>
    <title>مراحل فروش خانه - دابزهوم</title>
    </Head>
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
      <Button title='ثبت و ادامه' route='/property-facilities'/>
    </div>
    </>
  )
}
