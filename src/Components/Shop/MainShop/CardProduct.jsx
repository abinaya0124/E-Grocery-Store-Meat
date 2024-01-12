// import React from 'react';
import Bag from "../Images/Bag.svg"
// import { useThemeHook } from "../GlobalComponents/ThemeProvider";

const ProductCard = ({ imageUrl, title, price, iconUrl}) => {
  return (
    
    
    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
        
      <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex grow flex-col items-stretch w-full py-1 rounded-lg border-solid max-md:mt-6]">
        <img
          loading="lazy"
          src={imageUrl}
          className="aspect-[1.03] object-contain object-center w-full overflow-hidden"
          alt="Product Image"
        />
        <div className="justify-center flex flex-col p-4 items-start">
          <div className="text-neutral-600 text-sm leading-5 self-stretch whitespace-nowrap">
            {title}
          </div>
          
          <div className="text-black text-base font-medium leading-6 self-stretch">
            ${price}
          </div>
          <img
            loading="lazy"
            src={iconUrl}
            className="aspect-[5] object-contain object-center w-[60px] items-start overflow-hidden max-w-full mt-1.5"
            alt="Icon Image"
          />
 
 
 <div className='ml-52  absolute items-end md:mr-0'    >
 <button>
           <div className="relative w-[60px] h-[60px] bg-gray-scalegray-50 rounded-[30px]  items-end  ">
           <img className="absolute w-[40px] h-[40px] top-[10px] ml-3 " alt="Bag" src={Bag} />
    </div>
    </button>


</div>
          
          <div >
        
        </div>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
