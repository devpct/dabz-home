import { useRouter } from 'next/router';
import Link from 'next/link'
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const progressBar = {
    '/property-type': 20,
    '/property-details': 40,
    '/property-facilities': 60,
    '/property-description': 80,
    '/confirm-request': 100,
  };

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const { pathname } = router;
    setProgress(progressBar[pathname] || 0);
  }, [router.pathname]);

  const convertToPersian = (num) => {
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return String(num)
      .split('')
      .map((char) => (/\d/.test(char) ? persianNumbers[parseInt(char, 10)] : char))
      .join('');
  };

  return (
    <>
        <nav className='w-full flex relative items-center justify-between py-5 px-[1.2rem] sm:px-[5rem] border-b-2'>
        <div className='w-full h-[8px] absolute bottom-[-5px] right-0'>
          <div
            style={{ 
              background: `repeating-linear-gradient(45deg, #E8C597, #E8C597 6px, #CB9044 6px, #CB9044 16px)`,
              width: `${progress}%`,
              transition: 'width 1s'
             }}
            className='w-full h-full bg-[45px] rounded-l-lg progress-bar'
          ></div>
        </div>

                <svg className='cursor-pointer' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleGoBack}>
                <path d="M19.2399 7.90674L27.3333 16.0001L19.2399 24.0934" stroke="#434C5D" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.66669 16H27.1067" stroke="#434C5D" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className='flex items-center gap-x-3'>
                <Link href="/">
                <svg width="44" height="34" viewBox="0 0 58 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.997 1.40131C27.1149 -0.298059 30.3464 -0.522503 32.5629 1.11808C36.4871 4.01716 40.2088 7.1861 44.1357 10.0852C46.6878 12.164 49.296 14.176 51.9041 16.1879C53.7796 17.898 55.9881 19.1966 57.8503 20.9253C58.2366 21.262 57.7784 21.7136 57.5626 22.0021C56.1852 23.5839 55.0637 25.3741 53.6304 26.9052C53.2681 27.2819 52.7965 26.7449 52.4769 26.5551C48.8804 23.6481 45.148 20.912 41.5728 17.9782C37.3263 14.8252 33.3169 11.3651 29.0464 8.24421C21.6216 13.8152 14.4366 19.6962 7.10775 25.3902C6.34316 25.954 5.64783 26.6433 4.77668 27.0414C4.29715 27.0334 4.08669 26.5365 3.80696 26.2318C2.55751 24.5378 1.15088 22.9587 0 21.1925C0.423587 20.7356 0.876482 20.3054 1.39331 19.9527C3.03971 18.8439 4.42769 17.401 6.08208 16.3002C12.3426 11.2795 18.7417 6.42727 24.997 1.40131Z" fill="#CA8E45"/>
                <path d="M9.4844 1.99041C12.0765 1.98507 14.6687 1.9637 17.2608 2.0011C17.2555 2.83208 17.2448 3.66306 17.1862 4.49404C14.5728 6.39648 12.1405 8.54473 9.50038 10.4124C9.4471 7.60687 9.48174 4.79864 9.4844 1.99041Z" fill="#2E1F64"/>
                <path d="M31.8684 23.8468C33.4348 21.7707 34.996 19.6759 36.7196 17.7307C40.0337 20.5015 43.5023 23.0827 46.8484 25.8134C47.8688 26.7379 48.5454 28.0819 48.5428 29.474C48.5641 32.0604 48.5454 34.6469 48.5508 37.2334C48.6014 39.5606 47.1601 41.8318 45.0768 42.8364C44.0778 43.3468 42.9376 43.4804 41.832 43.5018C33.2164 43.4938 24.6034 43.4964 15.9905 43.4991C13.3451 43.5739 10.7316 41.8959 9.86313 39.3602C9.3463 37.9067 9.48484 36.3436 9.47418 34.8286C9.49283 32.162 9.44488 29.4954 9.49816 26.8287C12.0903 24.8729 14.5599 22.7513 17.2053 20.8729C17.2639 25.8081 17.192 30.7458 17.2373 35.6836C25.1016 35.705 32.9659 35.721 40.8303 35.6729C40.8596 34.1365 40.8196 32.5975 40.8596 31.0611C37.9478 28.5575 34.8548 26.2623 31.8684 23.8468Z" fill="#2E1F64"/>
                </svg>
                </Link>
                <p className='text-[#232F43] '>مراحل فروش خانه</p>
                </div>
                <p className='text-[#CB9044] font-bold text-[18px]'>{`${convertToPersian(progress)}%`}</p>
        </nav>
    </>
  )
}
