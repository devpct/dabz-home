import Image from 'next/image'
import React from 'react'

export default function Introduction() {
  return (
    <>
    <div className="lg:px-[5rem] px-[1rem]">
    <div className="max-w-[1240px] h-fit bg-[#26397F] m-auto lg:mt-[6rem] rounded-[56px] lg:px-[4rem] px-[1.5rem] pb-[3.5rem] pt-5 ">
    <div className="flex lg:flex-row flex-col gap-x-4 gap-y-4 items-center">
    <Image
        src="/images/introduction/pic.png" 
        width={500}
        height={500}
        quality={100}
        alt=""
        className='w-[18rem] lg:w-[356px] lg:h-[412px] ml-2'    
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

        <svg className='w-[64px] h-[64px] mx-auto mb-4' width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V48C64 56.8366 56.8366 64 48 64H16C7.16344 64 0 56.8366 0 48V16Z" fill="#CB9044"/>
        <path d="M26.3351 12.6168C27.8406 12.4215 29.4117 12.7559 30.6953 13.5684C31.9062 14.3239 32.8609 15.4817 33.3687 16.8168C33.8796 18.1442 33.9414 19.6372 33.55 21.0036C33.1906 22.2684 32.4406 23.4176 31.4312 24.259C30.3484 25.1723 28.964 25.7176 27.5492 25.7911C26.1382 25.8723 24.7046 25.4848 23.5289 24.6981C22.3007 23.8879 21.3562 22.6559 20.8976 21.2567C20.364 19.6489 20.4781 17.8364 21.2187 16.3114C22.1601 14.3247 24.15 12.8801 26.3351 12.6168Z" fill="white"/>
        <path d="M18.8612 28.177C19.7316 26.9747 20.8644 25.9645 22.1597 25.2403C23.5136 26.3614 25.2456 27.0192 27.0058 27.0497C28.8839 27.1012 30.7667 26.4426 32.2089 25.2395C34.8527 26.7028 36.7667 29.3911 37.2956 32.3645C39.0269 32.1864 40.8151 32.5887 42.2886 33.52C44.173 34.6911 45.5206 36.6887 45.8784 38.8793C46.2816 41.1793 45.5862 43.6356 44.0386 45.3833C44.8542 46.2028 45.6777 47.0153 46.4902 47.8387C46.7894 48.1325 46.8511 48.6301 46.6261 48.9856C46.3503 49.477 45.6105 49.5856 45.205 49.1934C44.3433 48.3504 43.4987 47.4895 42.6433 46.6395C41.3847 47.5223 39.8659 48.0309 38.3269 48.0653C36.6378 48.1153 34.9378 47.5981 33.5636 46.6145C32.1831 45.6395 31.1331 44.2083 30.6183 42.5981C26.3675 42.5856 22.1167 42.5989 17.8652 42.5918C17.3433 42.6153 16.8784 42.1418 16.9081 41.6208C16.905 39.1489 16.9066 36.6762 16.9073 34.2043C16.9034 32.0559 17.5972 29.9145 18.8612 28.177ZM24.5284 30.6208C23.8073 30.6372 23.1175 31.0879 22.837 31.7559C22.6198 32.2286 22.6956 32.759 22.6823 33.2622C22.6956 33.7653 22.6198 34.2958 22.8386 34.7676C23.1198 35.4348 23.8089 35.8833 24.5284 35.9004C24.537 36.8223 25.298 37.6645 26.2222 37.734C26.8433 37.7528 27.4667 37.7489 28.0878 37.7364C29.0245 37.6809 29.798 36.8317 29.8081 35.9004C30.5206 35.8817 31.2073 35.4434 31.4902 34.7833C31.7167 34.3083 31.6417 33.7708 31.6534 33.2629C31.6409 32.7583 31.7167 32.2247 31.4964 31.7512C31.2175 31.084 30.5269 30.6387 29.8089 30.6208C29.7972 29.6895 29.0253 28.8395 28.0878 28.7848C27.4675 28.7708 26.8448 28.7668 26.2245 28.7872C25.2987 28.8543 24.5378 29.6981 24.5284 30.6208ZM37.2761 34.2575C36.4191 34.3989 35.5847 34.7043 34.8566 35.1809C33.7269 35.9106 32.8581 37.0348 32.4378 38.3122C32.0441 39.4786 32.0495 40.7606 32.3784 41.9418C32.8003 43.3465 33.7644 44.5754 35.0198 45.3309C36.1425 46.0145 37.4948 46.3067 38.8003 46.1544C39.973 46.0247 41.1019 45.5333 41.9987 44.7668C42.9519 43.959 43.6441 42.8458 43.9401 41.6317C44.262 40.3317 44.1339 38.9247 43.5737 37.7075C43.0277 36.5083 42.0753 35.4989 40.9081 34.8879C39.8034 34.3012 38.5128 34.0833 37.2761 34.2575Z" fill="white"/>
        <path d="M26.4086 32.4988C26.4102 31.8832 26.407 31.2668 26.4102 30.6504C26.9164 30.6504 27.4219 30.6504 27.9281 30.6512C27.9289 31.2668 27.9273 31.8832 27.9289 32.4988C28.5453 32.5004 29.1625 32.498 29.7789 32.5004C29.7781 33.0066 29.7789 33.5129 29.7781 34.0199C29.1617 34.0215 28.5453 34.0191 27.9289 34.0207C27.9273 34.6371 27.9297 35.2527 27.9281 35.8691C27.4219 35.8699 26.9164 35.8691 26.4102 35.8691C26.407 35.2535 26.4102 34.6371 26.4086 34.0207C25.7906 34.016 25.1727 34.0285 24.5547 34.0145C24.5609 33.5098 24.5555 33.0043 24.5578 32.4996C25.175 32.4988 25.7914 32.5004 26.4086 32.4988Z" fill="white"/>
        </svg>

      <div>
        <h2 className='mb-4 font-bold text-[18px]'>جتاپی ارائه دهنده راهکارهای خرید</h2>
        <p>امکان انجام چکاپ های پزشکی در هر ساعت از شبانه روز برای خود و افراد سالمند</p>
      </div>
      </div>

      <div className='text-center w-[300px]'>

      <svg className='w-[64px] h-[64px] mx-auto mb-4' width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V48C64 56.8366 56.8366 64 48 64H16C7.16344 64 0 56.8366 0 48V16Z" fill="#CB9044"/>
      <path d="M20.9336 11H35.0469C35.0492 14.0227 35.0414 17.0445 35.0508 20.0672C35.0578 21.4664 36.3008 22.7047 37.6992 22.7148C40.8773 22.7242 44.0555 22.7156 47.2336 22.7195C47.2336 30.7125 47.2367 38.7063 47.2328 46.6992C47.2453 48.2234 46.3742 49.7094 45.0414 50.4453C44.4422 50.7906 43.7563 50.9656 43.068 51H20.9336C19.2391 50.9586 17.6383 49.8234 17.05 48.232C16.7383 47.4758 16.7563 46.6469 16.7656 45.8445C16.7656 35.6867 16.7648 25.5289 16.7664 15.3711C16.7617 14.7117 16.8969 14.0492 17.1844 13.4539C17.85 12.0227 19.3555 11.0406 20.9336 11ZM22.9563 26.6461C22.1836 26.7641 21.7344 27.7406 22.1695 28.3977C22.3875 28.7703 22.8219 28.9914 23.2508 28.9695C28.9547 28.9672 34.6586 28.9703 40.3625 28.968C40.7227 28.9648 41.0805 28.7891 41.2945 28.4977C41.5648 28.1437 41.6063 27.6359 41.3906 27.2461C41.1938 26.8711 40.782 26.625 40.3602 26.6258C34.7352 26.6234 29.1109 26.6258 23.4859 26.625C23.3094 26.6266 23.1313 26.6148 22.9563 26.6461ZM22.9523 32.8969C22.3352 33.0031 21.8828 33.6617 22.0242 34.2766C22.1242 34.8078 22.6281 35.2227 23.1695 35.218C28.9 35.2195 34.6305 35.2195 40.3609 35.218C40.9844 35.2281 41.5391 34.6734 41.5305 34.0508C41.5445 33.4258 40.9883 32.8648 40.3633 32.8758C34.7391 32.8734 29.1141 32.8758 23.4898 32.875C23.3109 32.8758 23.1297 32.8648 22.9523 32.8969ZM22.9508 39.1469C22.5922 39.2172 22.2727 39.4617 22.1164 39.793C21.907 40.2102 21.9914 40.7438 22.3078 41.0836C22.5445 41.3461 22.9008 41.4852 23.2523 41.4695C25.1266 41.4664 27.0008 41.4719 28.875 41.4672C29.4914 41.4672 30.0344 40.9141 30.0242 40.2984C30.0367 39.6836 29.4969 39.1289 28.882 39.1266C27.0297 39.1219 25.1781 39.1273 23.3266 39.1242C23.2008 39.125 23.0742 39.1227 22.9508 39.1469Z" fill="white"/>
      <path d="M37.3919 11.4863C37.7693 11.6824 38.1122 11.9395 38.4201 12.2324C40.8958 14.5762 43.374 16.9184 45.8497 19.2621C46.1943 19.584 46.4841 19.9605 46.7115 20.3738C43.7599 20.3762 40.8083 20.3738 37.8568 20.3746C37.6286 20.4082 37.3865 20.2301 37.3935 19.9902C37.388 17.1559 37.3919 14.3207 37.3919 11.4863Z" fill="white"/>
      </svg>

      <div>
        <h2 className='mb-4 font-bold text-[18px]'>جتاپی ارائه دهنده راهکارهای خرید</h2>
        <p>امکان دریافت نسخه الکترونیکی بر اساس چکاپ های انجام شده</p>
      </div>
      </div>

      <div className='text-center w-[300px]'>

      <svg className='w-[64px] h-[64px] mx-auto mb-4' width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 16C0 7.16344 7.16345 0 16 0H48C56.8366 0 64 7.16344 64 16V48C64 56.8366 56.8366 64 48 64H16C7.16344 64 0 56.8366 0 48V16Z" fill="#CB9044"/>
      <path d="M31.7143 11H32.2823C35.1151 11.0648 37.9065 12.1828 39.9886 14.107C41.8776 15.8273 43.1901 18.1719 43.6487 20.6875C44.0948 23.0836 43.7815 25.6172 42.7471 27.8266C41.7229 30.0383 39.9971 31.9164 37.8823 33.1273C35.9237 34.2586 33.6331 34.7984 31.3753 34.6758C28.9542 34.5539 26.58 33.6562 24.68 32.1516C22.9096 30.7602 21.5448 28.857 20.8089 26.7281C19.9292 24.2125 19.9393 21.3969 20.8362 18.8875C21.6542 16.5742 23.2159 14.5352 25.2292 13.1344C27.1182 11.8023 29.4057 11.0633 31.7143 11ZM30.8276 15.7711C30.8237 16.2812 30.8307 16.7914 30.8237 17.3016C29.4784 17.3883 28.2534 18.3758 27.887 19.6734C27.5651 20.7398 27.83 21.9594 28.5714 22.7914C29.1737 23.4859 30.0729 23.9125 30.9932 23.9289C31.8487 23.9398 32.705 23.9242 33.5604 23.9359C34.112 23.9375 34.594 24.4336 34.5893 24.9836C34.6081 25.5477 34.1136 26.0578 33.5495 26.0578C31.7776 26.0688 30.0057 26.0586 28.2339 26.0633C28.2323 26.8422 28.2315 27.6219 28.2339 28.4008C29.0979 28.4016 29.962 28.4 30.8261 28.4016C30.8284 28.9078 30.8253 29.4148 30.8276 29.9211C31.6081 29.9227 32.3885 29.9219 33.1698 29.9211C33.1714 29.4148 33.1682 28.9086 33.1706 28.4016C33.8346 28.4305 34.5159 28.3336 35.105 28.0133C36.0003 27.5492 36.6659 26.6695 36.8628 25.6805C37.0714 24.6945 36.8089 23.6219 36.1659 22.8453C35.5565 22.0898 34.6112 21.618 33.6393 21.593C32.7557 21.5773 31.8721 21.6016 30.9886 21.5813C30.3784 21.5531 29.9284 20.8648 30.1495 20.293C30.2784 19.9094 30.6643 19.6305 31.0706 19.6375C32.444 19.6305 33.8175 19.6406 35.1901 19.6328L35.2175 19.6055C35.2229 18.8344 35.2182 18.0633 35.219 17.2922C34.5378 17.2914 33.8573 17.2898 33.1761 17.2937C33.162 16.7859 33.1745 16.2781 33.169 15.7703C32.3886 15.7711 31.6081 15.7695 30.8276 15.7711Z" fill="white"/>
      <path d="M28.4133 36.5801C30.7531 37.1895 33.2469 37.1887 35.5875 36.5809C35.5867 38.0816 35.5859 39.5824 35.5875 41.0832C36.9781 41.0848 38.3695 41.0832 39.7602 41.084C37.1773 44.3926 34.5875 47.6949 32 50.9996C29.4133 47.6941 26.8242 44.3902 24.2383 41.084C25.6297 41.0832 27.0211 41.0848 28.4125 41.0832C28.4141 39.5816 28.4133 38.0809 28.4133 36.5801Z" fill="white"/>
      </svg>

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
