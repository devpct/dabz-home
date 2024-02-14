import Image from 'next/image'
import React, { useState } from 'react'
import TypeAds from '@/components/modules/AddProperty/TypeAds';
import PropertyType from '@/components/modules/AddProperty/PropertyType';
import QtyRoom from '@/components/modules/AddProperty/QtyRoom';
import Features from '@/components/modules/AddProperty/Features';

export default function AddProperty() {
  return (
    <>
    <div className="lg:px-[5rem] px-[1rem] pb-[9rem] ">
    <div className="shadow-2xl max-w-[1160px] h-fit text-black bg-white m-auto mt-[6rem] rounded-[16px] lg:px-[1.5rem] px-[1.5rem] pb-[3.5rem] pt-5">

    <div className="text-center">
    <h2 className='text-[32px] font-extrabold mb-8 text-[#26397F]'>همین حالا ملکتو آگهی کن! :)</h2>
    <p className='text-[#333A54]'>جتاپی ارائه دهنده راهکارهای خرید و پرداخت های بین المللی می باشد. جتاپی در تلاش است</p>
    </div>

    <hr className='my-[2rem]'/>

    <div className="mb-[2.2rem]">
    <p className='text-[#232F43] mb-2 font-bold'>عنوان آگهی</p>
    <input
    type="text"
    className="py-3 px-4 block w-full border-[#E0DEF7] border rounded-lg bg-[#F7F7FA] text-gray-600 focus:ring-gray-300 focus:outline-none"
    />
    </div>

    <TypeAds/>
    <PropertyType/>

    <div className="mb-[2.8rem]">
    <p className='pine-border pr-2 font-bold'>مشخصات ملک</p>
    <div className='mt-5 flex flex-wrap xl:justify-normal justify-center gap-5'>
    
    <div className='w-[355px]'>
    <p className='text-[#232F43] mb-1 font-bold'>متراژ</p>
    <input
    type="text"
    className="py-3 px-4 block w-full h-[48px] border-[#E0DEF7] border rounded-lg bg-[#F7F7FA] text-gray-600 focus:ring-gray-300 focus:outline-none"
    />
    </div>

    <div className='w-[355px]'>
    <p className='text-[#232F43] mb-1 font-bold'>سال ساخت</p>
    <select defaultValue='' className='select-home w-full h-[48px] focus:outline-none border-[#E0DEF7] border bg-[#F7F7FA] rounded-lg px-4'>
    <option value='' disabled hidden style={{color: '#434C5D'}}>انتخاب کنید</option>
    <option value='option1'>۱۴۰۰</option>
    <option value='option2'>۱۴۰۱</option>
    <option value='option3'>۱۴۰۲</option>
    </select>
    </div>

    <div className='w-[355px]'>
    <p className='text-[#232F43] mb-1 font-bold'>طبقه</p>
    <select defaultValue='' className='select-home w-full h-[48px] focus:outline-none border-[#E0DEF7] border bg-[#F7F7FA] rounded-lg px-4'>
    <option value='' disabled hidden style={{color: '#434C5D'}}>انتخاب کنید</option>
    <option value='option1'>یک</option>
    <option value='option2'>دو</option>
    <option value='option3'>سوم</option>
    </select>
    </div>

    <div className='w-[355px]'>
    <p className='text-[#232F43] mb-1 font-bold'>واحد</p>
    <select defaultValue='' className='select-home w-full h-[48px] focus:outline-none border-[#E0DEF7] border bg-[#F7F7FA] rounded-lg px-4'>
    <option value='' disabled hidden style={{color: '#434C5D'}}>انتخاب کنید</option>
    <option value='option1'>یک</option>
    <option value='option2'>دو</option>
    <option value='option3'>سوم</option>
    </select>
    </div>
    
    <div className='w-[355px]'>
    <p className='text-[#232F43] mb-1 font-bold'>قیمت</p>
    <input
    type="text"
    className="py-3 px-4 block w-full h-[48px] border-[#E0DEF7] border rounded-lg bg-[#F7F7FA] text-gray-600 focus:ring-gray-300 focus:outline-none"
    />
    </div>

    </div>
    </div>

    <QtyRoom/>
    <Features/>

    <div className='w-full mb-[2rem]'>
    <p className='text-[#232F43] mb-1 '>آدرس ملک</p>
    <div className="relative">
  <textarea className="p-4 pb-12 block w-full h-[120px] bg-[#F7F7FA] border-[#E0DEF7] border rounded-lg text-sm focus:outline-none text-gray-600"></textarea>
  <div className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-gray-100 ">
  </div>
  </div>
    </div>

    <div className='w-full mb-[4rem]'>
    <p className='text-[#232F43] mb-1 '>توضیحات تکمیلی ملک</p>
    <div className="relative">
  <textarea className="p-4 pb-12 block w-full h-[120px] bg-[#F7F7FA] border-[#E0DEF7] border rounded-lg text-sm focus:outline-none text-gray-600"></textarea>
  <div className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-gray-100 ">
  </div>
  </div>
    </div>

    <div className='w-full'>
    <p className='text-[#000000] text-[18px] mb-5 '>تصاویر ملک را بارگذاری کنید</p>

    </div>

    <button className='w-full h-[56px] bg-[#26397F] text-white rounded-[8px]'>ثبت آگهی</button>
    </div>
    </div>
    </>
  )
}