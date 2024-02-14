import Image from 'next/image'
import React from 'react'

export default function Introduction() {
  return (
    <>
    <div className="lg:px-[5rem] px-[1rem]">
    <div className="max-w-[1240px] h-fit bg-[#26397F] m-auto mt-[6rem] rounded-[56px] lg:px-[4rem] px-[1.5rem] pb-[3.5rem] pt-5 ">
    <div className="flex lg:flex-row flex-col gap-x-4 gap-y-4 items-center">
    <Image
        src="/images/introduction/pic.png" 
        width={500}
        height={500}
        quality={100}
        alt=""
        className='w-[25rem] lg:w-[356px] lg:h-[412px] ml-2'    
    />
    <div>
      <h1 className='mb-3 text-[40px] font-extrabold text-[#CB9044]'>دابز هوم</h1>
      <p className='mb-2'>
      جتاپی ارائه دهنده راهکارهای خرید و پرداخت های بین المللی می باشد. جتاپی در تلاش است که نیازهای مشتریان و کسب و کارها را شناسایی و بهترین راهکارهای پرداخت الکترونیک را برای آنها طراحی و فراهم نماید. ما با داشتن تیمی با تجربه و مبتکر، و همچنین با استفاده از برترین تکنولوژی ها، پرداخت های سریع، ایمن و یکپارچه را در اختیار مشتریان خود قرار می دهیم.
      </p>
      <p>
      جتاپی ارائه دهنده راهکارهای خرید و پرداخت های بین المللی می باشد. جتاپی در تلاش است که نیازهای مشتریان و کسب و کارها را شناسایی و بهترین راهکارهای پرداخت الکترونیک را برای آنها طراحی و فراهم
      </p>
    </div>
    </div>
    <div className='flex justify-around flex-wrap gap-[5rem] mt-20'>
      <div className='text-center w-[300px]'>
      <Image
        src="/images/introduction/img1.png" 
        width={500}
        height={500}
        quality={100}
        alt=""
        className='w-[64px] h-[64px] mx-auto mb-4'    
      />
      <div>
        <h2 className='mb-4 font-bold text-[18px]'>جتاپی ارائه دهنده راهکارهای خرید</h2>
        <p>امکان انجام چکاپ های پزشکی در هر ساعت از شبانه روز برای خود و افراد سالمند</p>
      </div>
      </div>

      <div className='text-center w-[300px]'>
      <Image
        src="/images/introduction/img1.png" 
        width={500}
        height={500}
        quality={100}
        alt=""
        className='w-[64px] h-[64px] mx-auto mb-4'    
      />
      <div>
        <h2 className='mb-4 font-bold text-[18px]'>جتاپی ارائه دهنده راهکارهای خرید</h2>
        <p>امکان دریافت نسخه الکترونیکی بر اساس چکاپ های انجام شده</p>
      </div>
      </div>

      <div className='text-center w-[300px]'>
      <Image
        src="/images/introduction/img1.png" 
        width={500}
        height={500}
        quality={100}
        alt=""
        className='w-[64px] h-[64px] mx-auto mb-4'    
      />
      <div>
        <h2 className='mb-4 font-bold text-[18px]'>جتاپی ارائه دهنده راهکارهای خرید</h2>
        <p>کاهش هزینه های مراقبا از خود و دیگران بر اساس چکاپ های هدفمند</p>
      </div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}
