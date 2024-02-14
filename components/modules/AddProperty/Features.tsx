import Image from 'next/image';
import React, { useState } from 'react'

export default function Features() {
    const [features, setFeatures] = useState([
        { id: 1, imageSrc: "/images/addProperty/parking.png", label: "پارکینگ", isChecked: false },
        { id: 2, imageSrc: "/images/addProperty/stock.png", label: "انباری", isChecked: false },
        { id: 3, imageSrc: "/images/addProperty/swimming-pool.png", label: "استخر", isChecked: false },
        { id: 4, imageSrc: "/images/addProperty/balcony.png", label: "بالکن", isChecked: true },
        { id: 5, imageSrc: "/images/addProperty/elevator 1.png", label: "آسانسور", isChecked: false },
      ]);
    
    
      const handleFeatures = (id) => {
        setFeatures(prevFeatures => 
          prevFeatures.map(feature => 
            feature.id === id ? { ...feature, isChecked: !feature.isChecked } : { ...feature, isChecked: false }
          )
        );
      };
  return (
    <>
        <div className="mb-[5rem]">
    <p className='pine-border pr-2'>امکانات ملک</p>
    <div className='mt-5 flex flex-wrap lg:justify-normal justify-center gap-5'>
    {features.map(feature => (
      <div 
        key={feature.id}
        className={`cursor-pointer w-[110px] h-[116px] border-[#E0DEF7] border-[2px] rounded-[16px] text-center relative ${feature.isChecked ? 'bg-[#CB9044] border-0 text-white' : ''} select-none`}
        onClick={() => handleFeatures(feature.id)}
      >
        <Image
          src={feature.imageSrc} 
          width={48}
          height={48}
          quality={100}
          alt=""
          className='w-[48px] h-[48px] mx-auto my-4'    
        />
        <p>{feature.label}</p>
      </div>
    ))}
    </div>
    </div>
    </>
  )
}
