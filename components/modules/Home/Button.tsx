import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setTarget } from '@/redux/actions';

export default function Button({ title }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    // add value state target
    dispatch(setTarget(title));
  };

  return (
    <Link href='/property-type'>
      <button 
        className='sm:w-[500px] w-full h-[60px] bg-[#CB9044] text-white rounded-[12px] font-bold sm:text-[20px] text-[18px]'
        onClick={handleClick}
        key={title}
      >
        {title}
      </button>
    </Link>
  );
}
