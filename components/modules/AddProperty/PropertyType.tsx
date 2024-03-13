import Image from 'next/image'
import React, { useState } from 'react'

export default function PropertyType() {

    const [propertyType, setPropertyType] = useState([
        { id: 1, imageSrc: "/images/addProperty/apartment.svg", label: "مسکونی", isChecked: false },
        { id: 2, imageSrc: "/images/addProperty/residential.svg", label: "تجاری", isChecked: false },
        { id: 3, imageSrc: "/images/addProperty/office.svg", label: "اداری", isChecked: false },
        { id: 4, imageSrc: "/images/addProperty/modern-house.svg", label: "ویلایی", isChecked: false },
        { id: 5, imageSrc: "/images/addProperty/house.svg", label: "کلنگی", isChecked: false },
        { id: 6, imageSrc: "/images/addProperty/house.svg", label: "مستقلات", isChecked: false },
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
    <div className="mb-[4.3rem] m-auto">
    <div className='mt-5 flex flex-wrap lg:justify-normal justify-center gap-5'>
    {propertyType.map(property => (
      <div 
        key={property.id}
        className={`bg-white cursor-pointer sm:w-[110px] w-[90px] h-[100px] sm:h-[116px] border-[#E0DEF7] border-[2px] rounded-[16px] text-center relative ${property.isChecked ? 'border-yellow-600' : ''} select-none`}
        onClick={() => handlePropertyTypeClick(property.id)}
      >
        <div className="absolute right-[1.9rem] top-2 ">
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
          className='sm:w-[40px] sm:h-[40px] w-[33px] mx-auto sm:mb-4 sm:mt-5 mt-7 mb-2'    
        />
        <p className='sm:text-[16px] text-[13px]'>{property.label}</p>
      </div>
    ))}
    </div>
    </div>
    </>
  )
}
