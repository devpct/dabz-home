import React from 'react'
import Button from '@/components/modules/Home/Button';

export default function Header() {
  return (
    <>
  <div className="w-full px-[1rem] pt-[2.8rem] lg:pt-[6rem] h-[39rem] lg:h-[56rem] bg-no-repeat bg-cover bg-[100%] text-center flex flex-col gap-y-8
  lg:bg-[url('/images/header.svg')] bg-[url('/images/headerMobile.svg')]">
    <p className='font-extrabold text-[30px] lg:text-[35px] lg:text-[50px]'>به دابز هوم خوش آمدید</p>
    <h2 className='font-bold text-[20px] lg:text-[28px]'>اینجا مکانی امن برای خرید، فروش، رهن و اجاره ملک است </h2>
    <h3 className='flex items-center justify-center text-[21px] lg:text-[24px] lg:mt-5'><span className='text-[30px] lg:text-[40px] font-extrabold text-[#E0DEF7] ml-2'>۳۳۸۵+</span>آگهی ثبت شده</h3>
    <div className='mx-5 lg:mt-8  sm:mb-0 mb-[3rem] sm:mx-auto grid sm:gap-y-8 gap-y-5'>
     <Button title='میخوام بفروشم!'/>
     <Button title='میخوام بخرم!'/>
     <Button title='میخوام اجاره بدم!'/>
     <Button title='میخوام اجاره کنم!'/>
     </div>
  </div>
    </>
  )
}
