// import styles from './PopularProducts.module.css';
// import Gruop from "../images/Group.svg";
// import Bag from "../images/popularProducts/Rectangle.svg"
// import Heart from "../images/popularProducts/Heart.svg"
// import Eye from "../images/popularProducts/Eye 1.svg";
// import Star from "../images/popularProducts/Star 1.svg"
import HotDeals from './hotdealsnew';
import  { useState, useEffect } from 'react';

const PopularProducts = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
          // Subtracting 10 seconds from the current time
          const newTime = new Date(currentTime.getTime() - 10000);
          setCurrentTime(newTime);
        }, 1000); // Update every second
    
        // Cleanup function to clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
      }, [currentTime]);
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();

        // Add leading zero if the value is less than 10
        const formatTime = (value) => (value < 10 ? `0${value}` : value);

		  return (
			<div className='flex mr-9 ml-9'>
			<div className="items-stretch border border-[color:var(--Branding-Success-Dark,#FF6316)] shadow-sm bg-white flex max-w-[528px] flex-col pb-6 border-solid hover:focus-within">
			<img
					loading="lazy"
					srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/041d3dbda250a96c7abcdd682f51ad7190f1dcd61e5cdbc5cc0ce921bd285f73?apiKey=f50fc97234d04439b8978904637e7b9c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/041d3dbda250a96c7abcdd682f51ad7190f1dcd61e5cdbc5cc0ce921bd285f73?apiKey=f50fc97234d04439b8978904637e7b9c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/041d3dbda250a96c7abcdd682f51ad7190f1dcd61e5cdbc5cc0ce921bd285f73?apiKey=f50fc97234d04439b8978904637e7b9c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/041d3dbda250a96c7abcdd682f51ad7190f1dcd61e5cdbc5cc0ce921bd285f73?apiKey=f50fc97234d04439b8978904637e7b9c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/041d3dbda250a96c7abcdd682f51ad7190f1dcd61e5cdbc5cc0ce921bd285f73?apiKey=f50fc97234d04439b8978904637e7b9c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/041d3dbda250a96c7abcdd682f51ad7190f1dcd61e5cdbc5cc0ce921bd285f73?apiKey=f50fc97234d04439b8978904637e7b9c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/041d3dbda250a96c7abcdd682f51ad7190f1dcd61e5cdbc5cc0ce921bd285f73?apiKey=f50fc97234d04439b8978904637e7b9c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/041d3dbda250a96c7abcdd682f51ad7190f1dcd61e5cdbc5cc0ce921bd285f73?apiKey=f50fc97234d04439b8978904637e7b9c&"
					className="aspect-[1.18] object-contain object-center w-full overflow-hidden max-md:max-w-full"
				  />
				  <div className="items-stretch flex w-full flex-col pt-1.5 px-6 max-md:max-w-full max-md:px-5">
					<div className="text-orange-500 text-center text-lg leading-7 max-md:max-w-full">
					  Chinese cabbage
					</div>
					<div className="items-stretch self-center flex gap-1 mt-2">
					  <div className="text-black text-2xl font-medium leading-9 grow whitespace-nowrap">
						$12.00
					  </div>
					  <div className="text-red-600 text-2xl leading-9 grow whitespace-nowrap">
						$24.00
					  </div>
					</div>
					<div className="items-start self-center flex gap-0 mt-2">
					  <img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/953f2e36829eede30b7dc1af691100b4d3ff7564a9133d94797769280319ddb4?apiKey=f50fc97234d04439b8978904637e7b9c&"
						className="aspect-square object-contain object-center w-[18px] overflow-hidden self-stretch shrink-0 max-w-full"
					  />
					  <img
					  alt='kjdfk'
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b836d89b148cc23c7135c61860666ccb30dd42966d98a0cb0840d524a9ce6b0?apiKey=f50fc97234d04439b8978904637e7b9c&"
						className="aspect-square object-contain object-center w-[18px] overflow-hidden self-stretch shrink-0 max-w-full"
					  />
					  <img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b836d89b148cc23c7135c61860666ccb30dd42966d98a0cb0840d524a9ce6b0?apiKey=f50fc97234d04439b8978904637e7b9c&"
						className="aspect-square object-contain object-center w-[18px] overflow-hidden self-stretch shrink-0 max-w-full"
					  />
					  <img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/2053b72a84bcf9fca87299468ac1915155c71f0245237db4ae5ebf126e9b98d9?apiKey=f50fc97234d04439b8978904637e7b9c&"
						className="aspect-square object-contain object-center w-[18px] overflow-hidden self-stretch shrink-0 max-w-full"
					  />
					  <img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/2053b72a84bcf9fca87299468ac1915155c71f0245237db4ae5ebf126e9b98d9?apiKey=f50fc97234d04439b8978904637e7b9c&"
						className="aspect-square object-contain object-center w-[18px] overflow-hidden self-stretch shrink-0 max-w-full"
					  />
					  <div className="text-zinc-500 text-xs leading-4 grow whitespace-nowrap self-start">
						{" "}
						(524 Feedback)
					  </div>
					</div>
				  </div>
				  <div className="text-red-600 text-center text-sm leading-5 self-center whitespace-nowrap mt-5">
					Hurry up! Offer ends In:
				  </div>
				  <div className="items-start self-center flex gap-0 mt-1.5 px-5">
					<div className="items-center self-stretch flex grow basis-[0%] flex-col">
					  <div className="text-black text-center text-lg font-medium leading-7 whitespace-nowrap">
						01
					  </div>
					  <div className="text-red-600 text-center text-xs font-medium leading-3 tracking-wide uppercase self-stretch whitespace-nowrap">
						Days
					  </div>
					</div>
					<div className="items-center self-stretch flex grow basis-[0%] flex-col">
					  <div className="text-black text-center text-lg font-medium leading-7 whitespace-nowrap">
						{formatTime(hours)}
					  </div>
					  <div className="text-red-600 text-center text-xs font-medium leading-3 tracking-wide uppercase self-stretch whitespace-nowrap">
						Hours
					  </div>
					</div>
					<div className="text-zinc-500 text-center text-xl leading-7 self-start">
					  :
					</div>
					<div className="items-center self-stretch flex grow basis-[0%] flex-col">
					  <div className="text-black text-center text-lg font-medium leading-7 whitespace-nowrap">
					  {formatTime(minutes)}
					  </div>
					  <div className="text-red-600 text-center text-xs font-medium leading-3 tracking-wide uppercase self-stretch whitespace-nowrap">
						Mins
					  </div>
					</div>
					<div className="text-zinc-500 text-center text-xl leading-7 self-start">
					  :
					</div>
					<div className="items-center self-stretch flex grow basis-[0%] flex-col">
					  <div className="text-black text-center text-lg font-medium leading-7 whitespace-nowrap">
					  {formatTime(seconds)}
					  </div>
					  <div className="text-red-600 text-center text-xs font-medium leading-3 tracking-wide uppercase self-stretch whitespace-nowrap">
						Secs
					  </div>
					</div>
				  </div>
				
				</div>
				<div className="flex-grow hover:focus-within:*: border:none">
        {/* Render the HotDeals component in the larger space */}
        <HotDeals />
      </div>
				</div>
			  );
		}
		
		
		

export default PopularProducts;
