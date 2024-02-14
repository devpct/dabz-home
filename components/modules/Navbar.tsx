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
    <nav ref={navRef} className="bg-[rgb(255,255,255,50%)]  lg:w-[85%]   z-20 mx-auto lg:rounded-[12px] font-extrabold text-[1.1rem]">
    
          <div className="items-center px-4 md:px-8 lg:flex justify-between">
              <div className="flex items-center lg:w-fit w-full justify-between py-3 lg:py-4 lg:block">
                <div className='flex items-center gap-x-4'>
                    <Link href="/">
                        <Image
                            src="/icon.png" 
                            width={500}
                            height={500}
                            quality={100}
                            alt="Dabz"
                            className='w-fit'    
                        />
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



