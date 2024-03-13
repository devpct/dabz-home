import React, { useState } from 'react'

export default function QtyRoom() {

    const [qtyRoom, setQtyRoom] = useState([
        { id: 1, label: "بدون اتاق", isChecked: true },
        { id: 2, label: "۱ اتاق", isChecked: false },
        { id: 3, label: "۲ اتاق", isChecked: false },
        { id: 4, label: "۳ اتاق", isChecked: false },
        { id: 5, label: "۴ اتاق", isChecked: false },
        { id: 6, label: "۵ اتاق یا بیشتر", isChecked: false,
        fontSize: '74%'},
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
    <div className="sm:mr-[11px] mt-8">
    <p className='pine-border pr-2 font-bold'>تعداد اتاق</p>
    <div className='mt-5 flex flex-wrap lg:gap-8 gap-3'>
    {qtyRoom.map(qty => (
      <div 
        key={qty.id}
        className={`grid cursor-pointer sm:w-[105px] w-[90px] h-[40px] border-[#E0DEF7] border-[2px] rounded-[12px] text-center relative ${qty.isChecked ?
        'border-yellow-600 text-yellow-600' : ''} select-none`}
        onClick={() => handleQtyRoomClick(qty.id)}
      >
        <p style={{fontSize: qty.fontSize }} className='m-auto'>{qty.label}</p>
      </div>
    ))}
    </div>
    </div>
    </>
  )
}
