import Image from 'next/image';
import React, { useState } from 'react'

export default function TypeAds() {

    const [typeAds, setTypeAds] = useState([
        { id: 1, imageSrc: "/images/addProperty/clerk.png", label: "فروش", isChecked: true },
        { id: 2, imageSrc: "/images/addProperty/tent.png", label: "اجاره", isChecked: false }
      ]);
      const handleTypeAdsClick = (id) => {
        setTypeAds(prevTypeAds => 
          prevTypeAds.map(ads => 
            ads.id === id ? { ...ads, isChecked: !ads.isChecked } : { ...ads, isChecked: false }
          )
        );
      };

  return (
    <>
    <div className="mb-[4.3rem]">
    <p className='pine-border pr-2 font-bold'>نوع آگهی</p>
    <div className='mt-5 flex flex-wrap gap-5 lg:justify-normal justify-center'>
    {typeAds.map(ads => (
      <div 
        key={ads.id}
        className={`cursor-pointer w-[180px] h-[116px] border-[#E0DEF7] border-[2px] rounded-[16px] text-center relative ${ads.isChecked ? 'border-yellow-600' : ''} select-none`}
        onClick={() => handleTypeAdsClick(ads.id)}
      >
        <div className="absolute right-[2.2rem] top-4">
          <label className="container-checkbox">
            <input 
              type="checkbox"
              checked={ads.isChecked}
            />
            <span className="checkmark"></span>
          </label>
        </div>

        <Image
          src={ads.imageSrc} 
          width={48}
          height={48}
          quality={100}
          alt=""
          className='w-[48px] h-[48px] mx-auto my-4'    
        />
        <p>{ads.label}</p>
      </div>
    ))}
    </div>
    </div>
    </>
  )
}
