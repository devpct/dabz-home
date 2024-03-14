import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const router = useRouter();
  const isRootPath = router.pathname === "/"

  return (
    <>
        <div className={`mt-auto text-[#232F43]  w-full bg-no-repeat bg-cover 
        ${isRootPath && "lg:bg-none sm:p-0 pt-[3.8rem]"}
        ${!isRootPath && "lg:pt-[9.1rem] pt-[3.8rem] sm:bg-[url('/images/wave.png')]"}
         bg-[url('/images/mask.png')]`}>

        <div className="px-4 pb-6 pt-16 mx-auto sm:max-w-xl md:max-w-full md:px-24">
      <div className="grid gap-10 row-gap-6 sm:mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-7 text-sm">
          <p className="text-[18px] font-semibold tracking-wide text-[#000929]">
            راه های ارتباطی
          </p>
          <div className="flex">
          <Image
            src="/images/footer/location.svg" 
            width={500}
            height={500}
            quality={100}
            alt="location"
            className='w-[24px] h-[24px] ml-2'    
          />
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
             تهران - نارمک - خیابان گلستان - میدان نود - بن بست سربند - پلاک 7
            </a>
          </div>
          <div className="flex">

          <svg className='w-[24px] h-[24px] ml-2' width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.03 18.33C2.03 18.69 2.11 19.06 2.28 19.42C2.45 19.78 2.67 20.12 2.96 20.44C3.45 20.98 3.99 21.37 4.6 21.62C5.2 21.87 5.85 22 6.55 22C7.57 22 8.66 21.76 9.81 21.27C10.96 20.78 12.11 20.12 13.25 19.29C14.4 18.45 15.49 17.52 16.53 16.49C17.56 15.45 18.49 14.36 19.32 13.22C20.14 12.08 20.8 10.94 21.28 9.81C21.76 8.67 22 7.58 22 6.54C22 5.86 21.88 5.21 21.64 4.61C21.4 4 21.02 3.44 20.49 2.94C19.85 2.31 19.15 2 18.41 2C18.13 2 17.85 2.06 17.6 2.18C17.34 2.3 17.11 2.48 16.93 2.74L14.61 6.01C14.43 6.26 14.3 6.49 14.21 6.71C14.12 6.92 14.07 7.13 14.07 7.32C14.07 7.56 14.14 7.8 14.28 8.03C14.41 8.26 14.6 8.5 14.84 8.74L15.6 9.53C15.71 9.64 15.76 9.77 15.76 9.93C15.76 10.01 15.75 10.08 15.73 10.16C15.7 10.24 15.67 10.3 15.65 10.36C15.47 10.69 15.16 11.12 14.72 11.64C14.27 12.16 13.79 12.69 13.27 13.22C12.73 13.75 12.21 14.24 11.68 14.69C11.16 15.13 10.73 15.43 10.39 15.61C10.34 15.63 10.28 15.66 10.21 15.69C10.13 15.72 10.05 15.73 9.96 15.73C9.79 15.73 9.66 15.67 9.55 15.56L8.79 14.81C8.54 14.56 8.3 14.37 8.07 14.25C7.84 14.11 7.61 14.04 7.36 14.04C7.17 14.04 6.97 14.08 6.75 14.17C6.53 14.26 6.3 14.39 6.05 14.56L2.74 16.91C2.48 17.09 2.3 17.3 2.19 17.55C2.09 17.8 2.03 18.05 2.03 18.33Z" stroke="#434C5D" stroke-width="1.5" stroke-miterlimit="10"/>
          </svg>

            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              تلفن همراه: ۰۹۳۹۰۰۹۳۴۹۴
            </a>
          </div>
          <div className="flex">
          <svg className='w-[24px] h-[24px] ml-2' width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#434C5D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#434C5D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              ایمیل: yousefi.uiux@gmail.com
            </a>
          </div>
        </div>
        <div className='sm:hidden flex justify-between mb-5'>
          <div>
            <p className="text-[18px] font-bold tracking-wide text-[#000929]">
              لینک های مهم ۱
            </p>
            <ul className="mt-8 space-y-3">
              <li>
                <Link
                  href="#"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  عنوان یک
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  عنوان دو
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  عنوان سه
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  عنوان شماره چهار
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[18px] font-bold tracking-wide text-[#000929]">
            لینک های مهم ۲
            </p>
            <ul className="mt-8 space-y-3">
              <li>
                <Link
                  href="#"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  عنوان یک
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  عنوان دو
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  عنوان سه
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  عنوان شماره چهار
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='hidden sm:block'>
            <p className="text-[18px] font-bold tracking-wide text-[#000929]">
              لینک های مهم ۱
            </p>
            <ul className="mt-8 space-y-3">
              <li>
                <Link
                  href="#"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  عنوان یک
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  عنوان دو
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  عنوان سه
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  عنوان شماره چهار
                </Link>
              </li>
            </ul>
          </div>
          <div className='hidden sm:block'>
            <p className="text-[18px] font-bold tracking-wide text-[#000929]">
            لینک های مهم ۲
            </p>
            <ul className="mt-8 space-y-3">
              <li>
                <Link
                  href="#"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  عنوان یک
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  عنوان دو
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  عنوان سه
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  عنوان شماره چهار
                </Link>
              </li>
            </ul>
          </div>
        <div className='text-center m-auto'>
          <span className="text-[18px] font-bold tracking-wide text-[#000929]">
            مارا در شبکه های اجتماعی 
            <br />
            دنبال کنید
          </span>
          <div className="flex items-center mt-7 gap-x-5 gap-y-5  justify-center flex-wrap">
            <a
              href="#"
            >

            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#434C5D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.9997 11.3703C16.1231 12.2025 15.981 13.0525 15.5935 13.7993C15.206 14.5461 14.5929 15.1517 13.8413 15.53C13.0898 15.9082 12.2382 16.0399 11.4075 15.9062C10.5768 15.7726 9.80947 15.3804 9.21455 14.7855C8.61962 14.1905 8.22744 13.4232 8.09377 12.5925C7.96011 11.7619 8.09177 10.9102 8.47003 10.1587C8.84829 9.40716 9.45389 8.79404 10.2007 8.40654C10.9475 8.01904 11.7975 7.87689 12.6297 8.0003C13.4786 8.12619 14.2646 8.52176 14.8714 9.12861C15.4782 9.73545 15.8738 10.5214 15.9997 11.3703Z" stroke="#434C5D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.5 6.5H17.51" stroke="#434C5D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            </a>
            <a
              href="#"
            >

            <svg width="24" height="24" viewBox="0 0 24 24" fill="#434C5D" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.0409 19.0413H16.0776V14.4004C16.0776 13.2937 16.0578 11.8691 14.5363 11.8691C12.9929 11.8691 12.7567 13.0749 12.7567 14.3199V19.041H9.79336V9.49741H12.6382V10.8016H12.678C12.9627 10.3148 13.3741 9.91439 13.8684 9.64291C14.3627 9.37143 14.9214 9.23911 15.4849 9.26003C18.4884 9.26003 19.0422 11.2357 19.0422 13.8059L19.0409 19.0413ZM6.44969 8.19287C6.10957 8.19293 5.77706 8.09213 5.49422 7.90321C5.21139 7.71429 4.99094 7.44574 4.86073 7.13152C4.73051 6.81731 4.69638 6.47153 4.76268 6.13792C4.82897 5.80431 4.99271 5.49785 5.23317 5.2573C5.47363 5.01675 5.78002 4.8529 6.11359 4.78649C6.44716 4.72007 6.79293 4.75406 7.10719 4.88417C7.42144 5.01428 7.69006 5.23465 7.87907 5.51743C8.06808 5.80021 8.16901 6.13268 8.16907 6.47282C8.16911 6.69866 8.12466 6.92229 8.03827 7.13095C7.95189 7.33962 7.82527 7.52922 7.66561 7.68895C7.50595 7.84867 7.31638 7.97538 7.10775 8.06184C6.89913 8.1483 6.67552 8.19282 6.44969 8.19287ZM7.93137 19.0413H4.96491V9.49741H7.93137V19.0413ZM20.5183 2.00136H3.47582C3.08901 1.997 2.71626 2.14639 2.43953 2.4167C2.1628 2.68702 2.00472 3.05614 2 3.44297V20.5567C2.00456 20.9437 2.16255 21.3131 2.43927 21.5837C2.71599 21.8543 3.08882 22.004 3.47582 21.9999H20.5183C20.9061 22.0047 21.28 21.8555 21.5578 21.5849C21.8356 21.3143 21.9946 20.9445 22 20.5567V3.44174C21.9945 3.05414 21.8353 2.6846 21.5575 2.41429C21.2797 2.14398 20.9059 1.99502 20.5183 2.00013" fill="#434C5D"/>
            </svg>

            </a>
            <a
              href="#"
            >

            <svg width="24" height="24" viewBox="0 0 24 24" fill="#434C5D" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9999 24H9.24151V12.1696H6V8.31792H9.24139V5.57715C9.24139 2.32932 10.6751 0 15.4206 0C16.4243 0 18 0.201761 18 0.201761V3.7783H16.345C14.6586 3.7783 14.0002 4.28988 14.0002 5.70422V8.31792H17.9369L17.5863 12.1696H14L13.9999 24Z" fill="#434C5D"/>
            </svg>

            </a>
            <a
              href="#"
            >

            <svg width="24" height="24" viewBox="0 0 24 24" fill="#434C5D" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.94693 20.9249C16.194 20.9249 20.704 14.0572 20.704 8.10175C20.704 7.90668 20.7 7.7125 20.6913 7.51919C21.5668 6.88303 22.3277 6.08916 22.9279 5.18544C22.1245 5.54438 21.26 5.78601 20.353 5.89496C21.2787 5.33701 21.9894 4.45439 22.3247 3.40221C21.4584 3.91843 20.4991 4.29362 19.4776 4.49618C18.6594 3.62018 17.4946 3.07227 16.2048 3.07227C13.7288 3.07227 11.7209 5.09061 11.7209 7.5785C11.7209 7.93216 11.7602 8.27616 11.8372 8.60613C8.11074 8.41765 4.80641 6.62428 2.59497 3.89734C2.20991 4.56336 1.98788 5.33703 1.98788 6.16254C1.98788 7.72614 2.77944 9.1065 3.98314 9.91402C3.24753 9.89118 2.55651 9.6882 1.95254 9.35035C1.95188 9.36926 1.95187 9.3877 1.95187 9.40791C1.95187 11.5906 3.49738 13.4129 5.54895 13.8258C5.17219 13.9291 4.77579 13.9844 4.36667 13.9844C4.0782 13.9844 3.79716 13.9559 3.52399 13.9032C4.0948 15.6939 5.75002 16.997 7.71242 17.0334C6.17785 18.2424 4.24472 18.9625 2.14372 18.9625C1.78226 18.9625 1.42517 18.9419 1.07422 18.9001C3.05855 20.1786 5.41475 20.9246 7.94717 20.9246" fill="#434C5D"/>
            </svg>

            </a>
            <a
              href="#"
            >

            <svg width="24" height="24" viewBox="0 0 24 24" fill="#434C5D" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0104 15.1987L18.5341 21.7276C19.5068 22.284 20.2087 21.9958 20.451 20.7914L23.9206 3.84066C24.2758 2.36419 23.3778 1.69429 22.4471 2.1323L2.07381 10.2769C0.683153 10.8552 0.691437 11.6596 1.82035 12.0179L7.0486 13.7098L19.1526 5.79297C19.724 5.43372 20.2485 5.62669 19.8181 6.02285" fill="#434C5D"/>
            </svg>

            </a>
            <a
              href="#"
            >

            <svg width="24" height="24" viewBox="0 0 24 24" fill="#434C5D" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7732 1.62777L8.27504 1.0895C6.23714 0.650159 4.21256 1.87092 3.7523 3.81619L3.18319 6.2207C4.82277 3.73551 7.57509 1.98808 10.7732 1.62777ZM1.65766 12.671L1.09376 15.0556C0.6335 17.0009 1.9124 18.9335 3.9503 19.3728L6.4693 19.916C3.86577 18.3504 2.03513 15.7238 1.65766 12.671ZM20.0497 3.62719L17.5307 3.08395C20.1342 4.64901 21.9649 7.27623 22.3423 10.3284L22.9062 7.94381C23.3665 5.99965 22.0876 4.06654 20.0497 3.62719ZM13.2268 21.3722L15.725 21.9105C17.7629 22.3498 19.7874 21.1291 20.2477 19.1838L20.8168 16.7793C19.1772 19.2645 16.4249 21.0119 13.2268 21.3722Z" fill="#434C5D"/>
            <path d="M12.5 3C7.80534 3 4 6.80534 4 11.5C4 16.1947 7.80534 20 12.5 20C17.1947 20 21 16.1947 21 11.5C21 6.80534 17.1947 3 12.5 3ZM10.375 5.65625C11.5485 5.65625 12.5 6.60772 12.5 7.78125C12.5 8.95478 11.5485 9.90625 10.375 9.90625C9.20147 9.90625 8.25 8.95478 8.25 7.78125C8.25 6.60772 9.20147 5.65625 10.375 5.65625ZM8.78125 15.75C7.60772 15.75 6.65625 14.7985 6.65625 13.625C6.65625 12.4515 7.60772 11.5 8.78125 11.5C9.95478 11.5 10.9062 12.4515 10.9062 13.625C10.9062 14.7985 9.95478 15.75 8.78125 15.75ZM11.4375 11.5C11.4375 10.913 11.913 10.4375 12.5 10.4375C13.087 10.4375 13.5625 10.913 13.5625 11.5C13.5625 12.087 13.087 12.5625 12.5 12.5625C11.913 12.5625 11.4375 12.087 11.4375 11.5ZM14.625 17.3438C13.4515 17.3438 12.5 16.3923 12.5 15.2188C12.5 14.0452 13.4515 13.0938 14.625 13.0938C15.7985 13.0938 16.75 14.0452 16.75 15.2188C16.75 16.3923 15.7985 17.3438 14.625 17.3438ZM16.2188 11.5C15.0452 11.5 14.0938 10.5485 14.0938 9.375C14.0938 8.20147 15.0452 7.25 16.2188 7.25C17.3923 7.25 18.3438 8.20147 18.3438 9.375C18.3438 10.5485 17.3923 11.5 16.2188 11.5Z" fill="#434C5D"/>
            </svg>

            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between lg:flex-row">
      </div>
    </div>
        <div className='sm:hidden w-full grid border-t mt-4'>
          <p className='my-4 mx-auto text-[12px]'>تمامی حقوق مادی و معنوی این سایت متعلق به دابزهوم است</p>
        </div>
    </div>
    </>
  )
}
