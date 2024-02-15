import React, { useState } from 'react'

export default function QtyRoom() {

    const [qtyRoom, setQtyRoom] = useState([
        { id: 1, label: "بدون اتاق", isChecked: true },
        { id: 2, label: "۱ اتاق", isChecked: false },
        { id: 3, label: "۲ اتاق", isChecked: false },
        { id: 4, label: "۳ اتاق", isChecked: false },
        { id: 5, label: "۴ اتاق", isChecked: false },
        { id: 6, label: "۵ اتاق یا بیشتر", isChecked: false },
      ]);
      const handleQtyRoomClick = (id) => {
        setQtyRoom(prevQtyRoom => 
          prevQtyRoom.map(qty => 
            qty.id === id ? { ...qty, isChecked: !qty.isChecked } : { ...qty, isChecked: false }
          )
        );
    };

  return (
    <>
    <div className="mb-[5rem]">
    <p>تعداد اتاق</p>
    <div className='mt-5 flex flex-wrap lg:justify-normal justify-center gap-4'>
    {qtyRoom.map(qty => (
      <div 
        key={qty.id}
        className={`grid cursor-pointer w-fit px-8 h-[40px] border-[#E0DEF7] border-[2px] rounded-[12px] text-center relative ${qty.isChecked ? 'border-yellow-600' : ''} select-none`}
        onClick={() => handleQtyRoomClick(qty.id)}
      >
        <p className='m-auto'>{qty.label}</p>
      </div>
    ))}
    </div>
    </div>
    </>
  )
}
