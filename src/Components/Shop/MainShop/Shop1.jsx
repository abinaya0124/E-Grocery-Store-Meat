// import React from 'react';
// import "../MainShop/shop1.css" ;
import ShopFilter from "./ShopFilter";
import AllCategories from '../Cateogries/AllCategories';
import Bannar from '../ShopProduct/Bannar';
// import PagesChang from './PagesChang';
// import breadcrumbs from "../components/shop1/breadcrumbs";
// import { Product } from '../ShopProduct/Product';
import { SidePrice } from '../ShopProduct/SidePrice';
import { Rating } from '../ShopProduct/Rating';
import PopularTag from '../ShopProduct/PopularTag';
import { HotDeals } from '../ShopProduct/HotDeals';
import ProductCard from "./CardProduct";
import home1 from "../Images/home-1.png";
import vector from "../Images/Vector.png";
import group from "../Images/Group.png";
// import star from "../Images/Star 1.png";
import Stars from "../Images/Stars.svg";


// import Banner from "../Images/Banner3.png";
import Image1 from "../Images/Image-1.png";
import Image2 from "../Images/Image2.png"
import Image3 from "../Images/Image-3.png"
import Image4 from "../Images/Image-4.png"
import Image5 from "../Images/Image-5.png"
import Image6 from "../Images/Image-6.png"
import Image7 from "../Images/Image-7.png"
import Image8 from "../Images/Image-8.png"
import Image10 from "../Images/Image-10.png"
import Image11 from "../Images/Image-11.png"
import Image12 from "../Images/Image-12.png"
import Image13 from "../Images/Image-13.png"
import Image14 from "../Images/Image-14.png"
import Image15 from "../Images/Image-15.png"



import { useThemeHook } from "../../GlobalComponents/ThemeProvider";
// import { Price } from "../ShopProduct/Price";
// import {MainProducts} from "./ProductsMain";
// export const Shop1 = () => {

//   return (
//     <div style={{ background: theme ? "black" : "" }} className="h-[2340px]">
{/* <div className="breadcrumbs">
        <div className="location">
          < a href="/" ><img className="home" alt="Home" src={home1} /> </a>
          <img className="vector" alt="Vector" src={vector} />
          <div style={{ color: theme ? "#fff" : "" }} className="text-wrapper"><a href="/"> Categories</a></div>
          <img className="vector" alt="Vector" src={vector} />
          <div style={{ color: theme ? "#fff" : "" }} className="div"><a href="/"> Vegetables</a></div>
        </div> */}

{/* </div>   */ }
{/* <ShopFilter/>

        <div className="sort-by">
          <div style={{ color: theme ? "#fff" : "" }} className="text-wrapper">Sort by:</div>
          <div className="dropdown">
            <div style={{ color: theme ? "#fff" : "" }} className="div">Latest</div>
            <div className='ChevronDown'>
              <div className="chevron-down-screen">
                <img className="group" alt="Group" src={group} />
              </div>
            </div>
          </div>
        </div>
      
        <AllCategories /> */}



{/* <Rating />

        <PopularTag />

        <Bannar />

        <HotDeals /> */}

{/* <MainProducts /> */ }
{/* </div>
      
      )}





 export default Shop1; */}






export const Shop1 = () => {
  const [theme] = useThemeHook()


  return (
    <div className="bg-white flex flex-col" style={{ background: theme ? "black" : "" }}>


      <div className="self-center flex w-full max-w-[1314px] items-stretch justify-between gap-5 mt-8 px-5 max-md:max-w-full max-md:flex-wrap">
        <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="justify-between items-stretch bg-orange-500 flex gap-3 px-8 py-3.5 rounded-[43px] max-md:px-5">
            <div className="text-white text-sm font-semibold leading-4">
              Filter
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/03fa821a477cc79b3d6467b4154158d4e84491bc79121171b2a896d919010845?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
              className="aspect-[1.18] object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            />
          </div>
          <div className="items-center self-center flex gap-2 my-auto">
            <div className="text-zinc-500 text-sm leading-5 grow whitespace-nowrap my-auto">
              Sort by:
            </div>
            <div className="items-stretch rounded border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] self-stretch flex justify-between gap-0 px-4 py-2.5 border-solid">
              <div className="text-neutral-600 text-sm leading-5 grow whitespace-nowrap">
                Latest
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0127fc81ac84a746e4c37c51b62aeb9df94ec983674302779650f5cb9b345b36?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                className="aspect-square object-contain object-center w-3.5 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
        </div>
        <div className="text-stone-500 text-base leading-6 my-auto">
          <span className="font-semibold leading-5 text-black">52</span>{" "}
          <span className="text-stone-500">Results Found</span>
        </div>
      </div>


      <div className="self-center w-full max-w-[1320px] mt-6 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
            <div className="items-start flex flex-col px-5 max-md:mt-6">
              <AllCategories />


              <div className="justify-between   flex gap-5 pt-5 pb-1">
                <SidePrice />
              </div>


              <Rating />



              <PopularTag />


              {/* banner  */}
              <div className="flex-col items-center overflow-hidden self-stretch relative flex aspect-[1.0576271186440678] w-full mt-7 pt-5 pb-12">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/49e630b9ab008521d8320b07fd5032e79c696621f036e6f78a72238e89755d86?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/49e630b9ab008521d8320b07fd5032e79c696621f036e6f78a72238e89755d86?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/49e630b9ab008521d8320b07fd5032e79c696621f036e6f78a72238e89755d86?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/49e630b9ab008521d8320b07fd5032e79c696621f036e6f78a72238e89755d86?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/49e630b9ab008521d8320b07fd5032e79c696621f036e6f78a72238e89755d86?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/49e630b9ab008521d8320b07fd5032e79c696621f036e6f78a72238e89755d86?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/49e630b9ab008521d8320b07fd5032e79c696621f036e6f78a72238e89755d86?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/49e630b9ab008521d8320b07fd5032e79c696621f036e6f78a72238e89755d86?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                  className="absolute h-full w-full object-cover object-center inset-0"
                />
              </div>


              <HotDeals/>

            </div>
          </div>

          {/* main products of the year  */}

          <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-6">
              <div className="px-5 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <ProductCard
                    imageUrl={Image1}
                    title="Big Potatoes"
                    price="14.99"
                    iconUrl={Stars}
                  />

                  <ProductCard
                    imageUrl={Image2}
                    title=" Chanise Cabbage"
                    price="14.99"
                    iconUrl={Stars}
                  />


                  <ProductCard
                    imageUrl={Image3}
                    title="Corn"
                    price="14.99"
                    iconUrl={Stars}
                  />

                </div>
              </div>


              <div className="mt-6 px-5 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0"  style={{ background: theme ? "#black" : "" }}>
                  <ProductCard
                    imageUrl={Image4}
                    title="  Eggplant"
                    price="14.99"
                    iconUrl={Stars}
                  />

                  <ProductCard
                    imageUrl={Image5}
                    title=" Fresh Cauliflower"
                    price="14.99"
                    iconUrl={Stars}
                  />

                  <ProductCard
                    imageUrl={Image6}
                    title=" Green Apple"
                    price="14.99"
                    iconUrl={Stars}
                  />

                </div>
              </div>




              <div className="mt-6 px-5 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">

                  <ProductCard
                    imageUrl={Image7}
                    title="Green Capsicum"
                    price="14.99"
                    iconUrl={Stars}
                  />
                  <ProductCard
                    imageUrl={Image8}
                    title="Green Chilli"
                    price="14.99"
                    iconUrl={Stars}
                  />



                  <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex grow flex-col items-stretch w-full py-1 rounded-lg border-solid max-md:mt-6">
                      <div className="flex-col overflow-hidden relative flex aspect-[1.033112582781457] w-full pl-3 pr-16 pt-3 pb-12 items-start max-md:pr-5">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3c71f0bf25f644886fd1834a4e1221c55bc41b8d3f1910449b466de561b47fa0?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c71f0bf25f644886fd1834a4e1221c55bc41b8d3f1910449b466de561b47fa0?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c71f0bf25f644886fd1834a4e1221c55bc41b8d3f1910449b466de561b47fa0?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c71f0bf25f644886fd1834a4e1221c55bc41b8d3f1910449b466de561b47fa0?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c71f0bf25f644886fd1834a4e1221c55bc41b8d3f1910449b466de561b47fa0?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c71f0bf25f644886fd1834a4e1221c55bc41b8d3f1910449b466de561b47fa0?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c71f0bf25f644886fd1834a4e1221c55bc41b8d3f1910449b466de561b47fa0?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c71f0bf25f644886fd1834a4e1221c55bc41b8d3f1910449b466de561b47fa0?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                          className="absolute h-full w-full object-cover object-center inset-0"
                        />
                        <div className="relative justify-center items-stretch rounded bg-orange-500 flex gap-1 mb-40 px-2.5 py-1 max-md:mb-10">
                          <div className="text-white text-sm leading-5 grow whitespace-nowrap">
                            Sale
                          </div>
                          <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                            50%
                          </div>
                        </div>
                      </div>
                      <div className="justify-center flex flex-col mt-1.5 p-4 items-start">
                        <div className="text-neutral-600 text-sm leading-5 self-stretch whitespace-nowrap">
                          Green Cucumber
                        </div>
                        <div className="items-stretch self-stretch flex justify-between gap-0.5">
                          <div className="text-black text-base font-medium leading-6">
                            $14.99
                          </div>
                          <div className="text-red-600 text-base leading-6">
                            $20.99
                          </div>
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/561f7a35eb58f5074d790cd9a975dd0f34d6529cefae49dea07804d1dfb682c0?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                          className="aspect-[5] object-contain object-center w-[60px] items-start overflow-hidden max-w-full mt-1.5"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>




              <div className="mt-6 px-5 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <ProductCard
                    imageUrl={Image10}
                    title="Green Littuce"
                    price="14.99"
                    iconUrl={Stars}
                  />
                  <ProductCard
                    imageUrl={Image11}
                    title="Ladies finger"
                    price="14.99"
                    iconUrl={Stars}
                  />
                  <ProductCard
                    imageUrl={Image12}
                    title="Red Capsicum"
                    price="14.99"
                    iconUrl={Stars}
                  />    
                </div>
              </div>





              <div className="mt-6 px-5 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <ProductCard
                    imageUrl={Image13}
                    title="Red Chilli"
                    price="14.99"
                    iconUrl={Stars}
                  />
                  <ProductCard
                    imageUrl={Image14}
                    title="Red Tomatoe"
                    price="14.99"
                    iconUrl={Stars}
                  />
                  <ProductCard
                    imageUrl={Image15}
                    title="Fresh Mangoe"
                    price="14.99"
                    iconUrl={Stars}
                  />   
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      
      <div className="items-stretch self-center flex gap-3 ml-44 mt-12 mb-6 px-5">
        <div className="items-center bg-zinc-100 flex aspect-square flex-col justify-center w-9 h-9 px-2 rounded-[500px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3300747e9e9b3116ed2014868ff2cc80a1defaef614dec44a7ad9e7157c0edf?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
            className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden"
          />
        </div>
        <div className="items-stretch flex gap-0">
          <div className="justify-center text-white text-center text-base font-medium leading-6 whitespace-nowrap items-center bg-orange-500 aspect-square h-9 px-2 rounded-[130px] pt-1">
            1
          </div>
          <div className="justify-center text-stone-500 text-center text-base leading-6 whitespace-nowrap items-center bg-white aspect-square h-9 px-2 rounded-[130px] pt-1">
            2
          </div>
          <div className="justify-center text-stone-500 text-center text-base leading-6 whitespace-nowrap items-center bg-white aspect-square h-9 px-2 rounded-[130px] pt-1">
            3
          </div>
          <div className="justify-center text-stone-500 text-center text-base leading-6 whitespace-nowrap items-center bg-white aspect-square h-9 px-2 rounded-[130px] pt-1">
            4
          </div>
          <div className="justify-center text-stone-500 text-center text-base leading-6 whitespace-nowrap items-center bg-white aspect-square h-9 px-2 rounded-[130px] pt-1">
            5
          </div>
          <div className="justify-center text-stone-500 text-center text-base leading-6 whitespace-nowrap items-center bg-white aspect-square h-9 px-2 rounded-[130px] pt-1">
            ...
          </div>
          <div className="justify-center text-stone-500 text-center text-base leading-6 whitespace-nowrap items-center bg-white aspect-square h-9 px-2 rounded-[130px] pt-1">
            21
          </div>
        </div>
        <div className="items-center border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex aspect-square flex-col justify-center w-9 h-9 px-2 rounded-[500px] border-solid">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eed6b8ae34263e1bd4f34ad4f3d68887a9ce73d6a988289171775ca7956227d0?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
            className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden"
          />
        </div>
      </div>

     
    </div>
  );
}

export default Shop1;
