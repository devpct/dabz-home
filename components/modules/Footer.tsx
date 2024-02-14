import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
    <div className='pt-8 relative bg-[#26397F] rounded-tl-[40px] rounded-tr-[40px] mt-20 w-full'>
      <button onClick={scrollToTop} className='w-[64px] h-[64px] rounded-full bg-[#CB9044] absolute top-[-36px] left-1/2 z-10 transform -translate-x-1/2 shadow-lg'>
      <svg className='m-auto' width="30" height="30" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="m5 15 7-7 7 7"></path>
      </svg>
      </button>
      <Image
        src="/images/footer.png" 
        width={500}
        height={500}
        quality={100}
        alt=""
        className='w-[12rem] absolute top-[-36px] left-1/2 transform -translate-x-1/2'    
      />
        <div className="px-4 pb-6 pt-16 mx-auto sm:max-w-xl md:max-w-full md:px-24">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-7 text-sm">
          <p className="text-[18px] font-bold tracking-wide ">
            راه های ارتباطی
          </p>
          <div className="flex">
          <Image
            src="/images/footer/location.png" 
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
          <Image
            src="/images/footer/call.png" 
            width={500}
            height={500}
            quality={100}
            alt="call"
            className='w-[24px] h-[24px] ml-2'    
          />
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
          <Image
            src="/images/footer/sms.png" 
            width={500}
            height={500}
            quality={100}
            alt="sms"
            className='w-[24px] h-[24px] ml-2'    
          />
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
          <div>
            <p className="text-[18px] font-bold tracking-wide">
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
            <p className="text-[18px] font-bold tracking-wide ">
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
          <span className="text-[18px] font-bold tracking-wide">
            مارا در شبکه های اجتماعی 
            <br />
            دنبال کنید
          </span>
          <div className="flex items-center mt-7 gap-x-5 gap-y-5  justify-center flex-wrap">
            <a
              href="#"
            >
              <Image
              src="/images/footer/instagram.png" 
              width={500}
              height={500}
              quality={100}
              alt="instagram"
              className='w-[24px]'    
            />
            </a>
            <a
              href="#"
            >
            <Image
              src="/images/footer/linkedin.png" 
              width={500}
              height={500}
              quality={100}
              alt="linkedin"
              className='w-[24px]'    
            />
            </a>
            <a
              href="#"
            >
            <Image
              src="/images/footer/facebook.png" 
              width={500}
              height={500}
              quality={100}
              alt="facebook"
              className='w-[24px]'    
            />
            </a>
            <a
              href="#"
            >
            <Image
              src="/images/footer/twitter.png" 
              width={500}
              height={500}
              quality={100}
              alt="twitter"
              className='w-[24px]'    
            />
            </a>
            <a
              href="#"
            >
            <Image
              src="/images/footer/telegram.png" 
              width={500}
              height={500}
              quality={100}
              alt="telegram"
              className='w-[24px]'    
            />
            </a>
            <a
              href="#"
            >
            <Image
              src="/images/footer/aparat.png" 
              width={500}
              height={500}
              quality={100}
              alt="aparat"
              className='w-[24px]'    
            />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between lg:flex-row">
      </div>
    </div>
    </div>
    </>
  )
}