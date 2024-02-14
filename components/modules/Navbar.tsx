import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
export default function Navbar() {

    const [state, setState] = useState(false)
    const navRef = useRef()
  
    const navigation = [
        { title: "مزایای ثبت خانه در دابزهوم", path: "javascript:void(0)" },
        { title: "درباره ما", path: "javascript:void(0)" },
    ]

  
    useEffect(() => {
        
        const body = document.body
  
        // Disable scrolling
        const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"]
        if (state) body.classList.add(...customBodyStyle)
        // Enable scrolling
        else body.classList.remove(...customBodyStyle)
  
        // Sticky strick
        const customStyle = ["sticky-nav", "fixed", "border-b","lg:left-[8%]","left-0", "w-full", "bg-white", "text-black"]
        window.onscroll = () => {
            if (window.scrollY > 80) navRef.current.classList.add(...customStyle)
            else navRef.current.classList.remove(...customStyle)
        }
      }, [state])
    
      
  return (
    <>
    <div className="bg-[#26397F] lg:pt-5">
    <nav ref={navRef} className="bg-[rgb(255,255,255,50%)]  lg:w-[85%]   z-20 mx-auto lg:rounded-[12px] font-bold text-[1.1rem]">
    
          <div className="items-center px-4 md:px-8 lg:flex justify-between">
              <div className="flex items-center lg:w-fit w-full justify-between py-3 lg:py-4 lg:block">
                <div className='flex items-center gap-x-4'>
                    <Link href="/">
                        
                    <svg width="58" height="44" viewBox="0 0 58 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.997 1.40131C27.1149 -0.298059 30.3464 -0.522503 32.5629 1.11808C36.4871 4.01716 40.2088 7.1861 44.1357 10.0852C46.6878 12.164 49.296 14.176 51.9041 16.1879C53.7796 17.898 55.9881 19.1966 57.8503 20.9253C58.2366 21.262 57.7784 21.7136 57.5626 22.0021C56.1852 23.5839 55.0637 25.3741 53.6304 26.9052C53.2681 27.2819 52.7965 26.7449 52.4769 26.5551C48.8804 23.6481 45.148 20.912 41.5728 17.9782C37.3263 14.8252 33.3169 11.3651 29.0464 8.24421C21.6216 13.8152 14.4366 19.6962 7.10775 25.3902C6.34316 25.954 5.64783 26.6433 4.77668 27.0414C4.29715 27.0334 4.08669 26.5365 3.80696 26.2318C2.55751 24.5378 1.15088 22.9587 0 21.1925C0.423587 20.7356 0.876482 20.3054 1.39331 19.9527C3.03971 18.8439 4.42769 17.401 6.08208 16.3002C12.3426 11.2795 18.7417 6.42727 24.997 1.40131Z" fill="#CA8E45"/>
                    <path d="M9.4844 1.99041C12.0765 1.98507 14.6687 1.9637 17.2608 2.0011C17.2555 2.83208 17.2448 3.66306 17.1862 4.49404C14.5728 6.39648 12.1405 8.54473 9.50038 10.4124C9.4471 7.60687 9.48174 4.79864 9.4844 1.99041Z" fill="#2E1F64"/>
                    <path d="M31.8684 23.8468C33.4348 21.7707 34.996 19.6759 36.7196 17.7307C40.0337 20.5015 43.5023 23.0827 46.8484 25.8134C47.8688 26.7379 48.5454 28.0819 48.5428 29.474C48.5641 32.0604 48.5454 34.6469 48.5508 37.2334C48.6014 39.5606 47.1601 41.8318 45.0768 42.8364C44.0778 43.3468 42.9376 43.4804 41.832 43.5018C33.2164 43.4938 24.6034 43.4964 15.9905 43.4991C13.3451 43.5739 10.7316 41.8959 9.86313 39.3602C9.3463 37.9067 9.48484 36.3436 9.47418 34.8286C9.49283 32.162 9.44488 29.4954 9.49816 26.8287C12.0903 24.8729 14.5599 22.7513 17.2053 20.8729C17.2639 25.8081 17.192 30.7458 17.2373 35.6836C25.1016 35.705 32.9659 35.721 40.8303 35.6729C40.8596 34.1365 40.8196 32.5975 40.8596 31.0611C37.9478 28.5575 34.8548 26.2623 31.8684 23.8468Z" fill="#2E1F64"/>
                    </svg>

                    </Link>
                    <Link href='/login' >
                    <p>ورود به سایت دابز هوم</p>
                    </Link>
                </div>
                  <div className="lg:hidden">
                      <button className=" outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${ state ? 'h-screen pb-20 overflow-auto pr-4' : 'hidden'} `}>
                    <div className="flex-1">
                        <ul className="items-center space-y-8 lg:flex lg:space-x-5 lg:space-y-0 w-fit">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx}>
                                            <Link href={item.path} className='lg:mr-4'>
                                                { item.title }
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
              </div>
          </div>
      </nav>
    </div>
    </>
  )
}



