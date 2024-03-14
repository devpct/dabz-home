import Textarea from '@/components/modules/AddProperty/Textarea';
import UploadImage from '@/components/modules/AddProperty/UploadImage';
import Button from '@/components/modules/SalesSteps/Button';
import Head from 'next/head'

export default function index() {
  return (
    <>
    <Head>
    <title>مراحل فروش خانه - دابزهوم</title>
    </Head>

    <div className='text-[#000929] grid px-4'>
      <h2 className='sm:text-[24px] text-[16px] font-bold m-auto sm:mt-[4rem] sm:mb-[2rem] mt-[2.5rem] mb-[1.5rem]'>توضیحات و تصاویر</h2>
      <div className="p-[1.8rem] lg:w-[880px] w-full bg-white border border-[#E0DEF7] rounded-[16px] sm:mx-auto grid">
      <div className="mb-[2rem]">
      <Textarea label='توضیحات تکمیلی ملک'/>
      </div>
      <UploadImage/>
      </div>

      <Button title='ثبت نهایی' route='/confirm-request'/>
    </div>
    </>
  )
}

