import Image from 'next/image';
import React, { useState } from 'react'

export default function Features() {
    const [features, setFeatures] = useState([
        { id: 1, imageSrc: "/images/addProperty/parking.svg", label: "پارکینگ", isChecked: false },
        { id: 2, imageSrc: "/images/addProperty/stock.svg", label: "انباری", isChecked: false },
        { id: 3, imageSrc: "/images/addProperty/swimming-pool.svg", label: "استخر", isChecked: false },
        { id: 4, imageSrc: "/images/addProperty/balcony.svg", label: "بالکن", isChecked: true },
        { id: 5, imageSrc: "/images/addProperty/elevator.svg", label: "آسانسور", isChecked: false },
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
        <div>
    <p className='pine-border pr-2 font-bold'>امکانات ملک</p>
    <div className='mt-5 flex flex-wrap gap-3 sm:gap-5'>
    {features.map(feature => (
      <div 
        key={feature.id}
        className={`cursor-pointer sm:w-[110px] w-[90px] h-[100px] sm:h-[116px] border-[#E0DEF7] border-[2px] rounded-[16px] text-center relative ${feature.isChecked ? 'border-none bg-[#CB9044] text-white' : 'text-[#455A64]'} select-none`}
        onClick={() => handleFeatures(feature.id)}
      >
        <Image
          src={feature.imageSrc} 
          width={48}
          height={48}
          quality={100}
          alt=""
          className='w-[40px] h-[40px] mx-auto sm:mt-6 mb-2 mt-4'    
        />
        <p className='sm:text-[16px] text-[13px] '>{feature.label}</p>
      </div>
    ))}
    </div>
    </div>
    </>
  )
}
