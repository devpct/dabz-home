import React from 'react'

export default function Header() {
  return (
    <>
  <div className="w-full px-[1rem] pt-[6rem] h-[63rem] bg-no-repeat bg-cover bg-[100%] text-center flex flex-col gap-y-8" style={{backgroundImage: "url('/images/header.svg')"}} >
    <p className='font-extrabold text-[35px] lg:text-[50px]'>به دابز هوم خوش آمدید</p>
    <h2 className='font-bold text-[22px] lg:text-[28px]'>اینجا مکانی امن برای خرید، فروش، رهن و اجاره ملک است </h2>
    <h3 className='text-[21px] lg:text-[24px]'><span className='text-[30px] lg:text-[40px] font-extrabold text-[#CB9044]'>۳۳۸۵+</span>آگهی ثبت شده</h3>
  </div>
    </>
  )
}
