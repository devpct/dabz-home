import React, { useState, useEffect } from 'react';

const DropdownMenu = ({ items,label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('انتخاب کنید');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  useEffect(() => {
    const closeMenuOnOutsideClick = (e) => {
      if (isOpen && !e.target.closest('.relative')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', closeMenuOnOutsideClick);

    return () => {
      document.removeEventListener('click', closeMenuOnOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className='w-[355px]'>
    <p className='text-[#232F43] mb-1'>{label}</p>
    <div className="relative">
      <div className="w-full h-[48px] bg-[#F7F7FA] flex justify-between items-center overflow-hidden border-[#E0DEF7] border rounded-lg ">
        <button
          onClick={toggleMenu}
          className="w-full text-right px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
        >
          {selectedItem}
        </button>

        <button
          onClick={toggleMenu}
          className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
        >
          <span className="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full border-[#E0DEF7] border rounded-lg border-gray-100 bg-[#F7F7FA] shadow-lg" role="menu">
          <div className="p-2 cursor-pointer">
            {items.map((item, index) => (
              <a
                key={index}
                onClick={() => handleItemClick(item)}
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default DropdownMenu;
