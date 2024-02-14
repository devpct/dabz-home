import Image from 'next/image'
import React, { useState } from 'react'

export default function PropertyType() {

    const [propertyType, setPropertyType] = useState([
        { id: 1, imageSrc: "/images/addProperty/apartment.png", label: "مسکونی", isChecked: false },
        { id: 2, imageSrc: "/images/addProperty/residential.png", label: "تجاری", isChecked: false },
        { id: 3, imageSrc: "/images/addProperty/office.png", label: "اداری", isChecked: false },
        { id: 4, imageSrc: "/images/addProperty/modern-house.png", label: "ویلایی", isChecked: false },
        { id: 5, imageSrc: "/images/addProperty/house.png", label: "کلنگی", isChecked: false },
        { id: 6, imageSrc: "/images/addProperty/house.png", label: "مستقلات", isChecked: false },
      ]);
      const handlePropertyTypeClick = (id) => {
        setPropertyType(prevPropertyType => 
          prevPropertyType.map(property => 
            property.id === id ? { ...property, isChecked: !property.isChecked } : { ...property, isChecked: false }
          )
        );
      };
      
  return (
    <>
        <div className="mb-[4.3rem]">
    <p className='pine-border pr-2 font-bold'>نوع ملک</p>
    <div className='mt-5 flex flex-wrap lg:justify-normal justify-center gap-5'>
    {propertyType.map(property => (
      <div 
        key={property.id}
        className={`cursor-pointer w-[110px] h-[116px] border-[#E0DEF7] border-[2px] rounded-[16px] text-center relative ${property.isChecked ? 'border-yellow-600' : ''} select-none`}
        onClick={() => handlePropertyTypeClick(property.id)}
      >
        <div className="absolute right-[1.9rem] top-1">
          <label className="container-checkbox">
            <input 
              type="checkbox"
              checked={property.isChecked}
            />
            <span className="checkmark"></span>
          </label>
        </div>

        <Image
          src={property.imageSrc} 
          width={48}
          height={48}
          quality={100}
          alt=""
          className='w-[48px] h-[48px] mx-auto my-4'    
        />
        <p>{property.label}</p>
      </div>
    ))}
    </div>
    </div>
    </>
  )
}