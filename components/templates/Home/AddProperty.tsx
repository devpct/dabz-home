import React from 'react'
import TypeAds from '@/components/modules/AddProperty/TypeAds';
import PropertyType from '@/components/modules/AddProperty/PropertyType';
import QtyRoom from '@/components/modules/AddProperty/QtyRoom';
import Features from '@/components/modules/AddProperty/Features';
import UploadImage from '@/components/modules/AddProperty/UploadImage';
import DropdownMenu from '@/components/modules/DropdownMenu';
import Input from '@/components/modules/AddProperty/Input';
import Textarea from '@/components/modules/AddProperty/Textarea';

export default function AddProperty() {
  return (
    <>
    <div className="lg:px-[5rem] px-[1rem] pb-[9rem] ">
    <div className="shadow-2xl max-w-[1160px] h-fit text-black bg-white m-auto mt-[6rem] rounded-[16px] lg:px-[1.5rem] px-[1.5rem] pb-[2rem] pt-5">

    <div className="text-center">
    <h2 className='text-[32px] font-bold mb-8 text-[#26397F]'>همین حالا ملکتو آگهی کن! :)</h2>
    <p className='text-[#333A54]'>جتاپی ارائه دهنده راهکارهای خرید و پرداخت های بین المللی می باشد. جتاپی در تلاش است</p>
    </div>

    <hr className='my-[2rem]'/>

    <div className="mb-[2.2rem]">
    <p className='text-[#232F43] mb-2'>عنوان آگهی</p>
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
    
    <Input label='متراژ'/>
    <DropdownMenu label='سال ساخت' items={['۱۴۰۰', '۱۴۰۱', '۱۴۰۲']} />
    <DropdownMenu label='طبقه' items={['یک', 'دو', 'سوم']} />
    <DropdownMenu label='واحد' items={['یک', 'دو', 'سوم']} />
    <Input label='قیمت'/>

    </div>
    </div>

    <QtyRoom/>
    <Features/>

    <div className="mb-[2rem]">
    <Textarea label='آدرس ملک'/>
    </div>

    <div className="mb-[4rem]">
    <Textarea label='توضیحات تکمیلی ملک'/>
    </div>

    <UploadImage/>

    <button className='w-full h-[56px] bg-[#26397F] text-white rounded-[8px]'>ثبت آگهی</button>
    </div>
    </div>
    </>
  )
}
