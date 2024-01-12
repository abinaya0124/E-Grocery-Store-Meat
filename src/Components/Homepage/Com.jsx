// import * as React from "react";
import BigBanner from "../images/banner/Bannar Big.png"
function MyComponent() {
  return (
    <div>
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[67%] max-md:w-full max-md:ml-0">
          <div className="flex-col overflow-hidden relative flex min-h-[600px] grow pl-16 pr-20 py-12 items-start max-md:max-w-full max-md:mt-6 max-md:px-5">
            <img
              loading="lazy"
              src={BigBanner}
              className="absolute h-full w-full object-cover object-center inset-0"
            />
            <div className="relative text-white text-5xl font-semibold leading-[58px] w-[596px] max-w-full mt-28 max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
              Fresh & Healthy
              <br />
              Organic Food
            </div>
            <div className="relative flex gap-3 mt-7 items-start">
              <div className="bg-orange-600 flex w-0.5 shrink-0 h-[65px] flex-col" />
              <div className="items-stretch self-stretch flex flex-col">
                <div className="items-center flex justify-between gap-2">
                  <div className="text-white text-xl font-medium leading-8 grow whitespace-nowrap my-auto">
                    Sale up to
                  </div>
                  <div className="text-white text-xl font-semibold leading-8 whitespace-nowrap items-stretch bg-orange-600 self-stretch grow justify-center px-3 py-1 rounded-md">
                    30% OFF
                  </div>
                </div>
                <div className="text-white text-sm leading-5 whitespace-nowrap mt-2">
                  Free shipping on all your order.
                </div>
              </div>
            </div>
            <div className="relative justify-center items-stretch bg-black flex gap-5 mt-7 mb-20 px-10 py-5 rounded-[53px] max-md:mb-10 max-md:px-5">
              <div className="text-orange-600 text-base font-semibold leading-5">
                Shop now
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/80944329290a50f00f0fab60a141d70f7039a81438e09736af1ce54aaa41c020?apiKey=f50fc97234d04439b8978904637e7b9c&"
                className="aspect-[1.15] object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full self-start"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-6">
            <div className="flex-col overflow-hidden relative flex min-h-[288px] w-full pl-8 pr-20 pt-8 pb-12 items-start max-md:max-w-full max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3b815d103d2558261034f923a7b70a3f853cd37a3c2852241ffbe5613f265a44?apiKey=f50fc97234d04439b8978904637e7b9c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b815d103d2558261034f923a7b70a3f853cd37a3c2852241ffbe5613f265a44?apiKey=f50fc97234d04439b8978904637e7b9c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b815d103d2558261034f923a7b70a3f853cd37a3c2852241ffbe5613f265a44?apiKey=f50fc97234d04439b8978904637e7b9c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b815d103d2558261034f923a7b70a3f853cd37a3c2852241ffbe5613f265a44?apiKey=f50fc97234d04439b8978904637e7b9c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b815d103d2558261034f923a7b70a3f853cd37a3c2852241ffbe5613f265a44?apiKey=f50fc97234d04439b8978904637e7b9c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b815d103d2558261034f923a7b70a3f853cd37a3c2852241ffbe5613f265a44?apiKey=f50fc97234d04439b8978904637e7b9c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b815d103d2558261034f923a7b70a3f853cd37a3c2852241ffbe5613f265a44?apiKey=f50fc97234d04439b8978904637e7b9c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b815d103d2558261034f923a7b70a3f853cd37a3c2852241ffbe5613f265a44?apiKey=f50fc97234d04439b8978904637e7b9c&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative text-black text-sm font-medium leading-4 tracking-wide uppercase">
                Summer Sale
              </div>
              <div className="relative text-black text-3xl font-semibold leading-10 whitespace-nowrap mt-2">
                75% OFF
              </div>
              <div className="relative text-stone-500 text-sm leading-5 whitespace-nowrap mt-3">
                Only Fruit & Vegetable
              </div>
              <div className="relative justify-center items-stretch flex gap-3 mt-6 mb-12 pr-2 rounded-[43px] max-md:mb-10">
                <div className="text-orange-500 text-base font-semibold leading-5">
                  Shop Now
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/44632a1135995eeb90e5356264659acbb486c96e8254e8470d064ab8f82138f8?apiKey=f50fc97234d04439b8978904637e7b9c&"
                  className="aspect-[1.15] object-contain object-center w-[15px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
              </div>
            </div>
            <div className="flex-col overflow-hidden relative flex min-h-[288px] w-full items-stretch mt-6 px-10 py-12 max-md:max-w-full max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3183fe579ad9d922db798ca8d83cc62faa52147bdc901bf55f39b6c994374e87?apiKey=f50fc97234d04439b8978904637e7b9c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3183fe579ad9d922db798ca8d83cc62faa52147bdc901bf55f39b6c994374e87?apiKey=f50fc97234d04439b8978904637e7b9c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3183fe579ad9d922db798ca8d83cc62faa52147bdc901bf55f39b6c994374e87?apiKey=f50fc97234d04439b8978904637e7b9c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3183fe579ad9d922db798ca8d83cc62faa52147bdc901bf55f39b6c994374e87?apiKey=f50fc97234d04439b8978904637e7b9c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3183fe579ad9d922db798ca8d83cc62faa52147bdc901bf55f39b6c994374e87?apiKey=f50fc97234d04439b8978904637e7b9c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3183fe579ad9d922db798ca8d83cc62faa52147bdc901bf55f39b6c994374e87?apiKey=f50fc97234d04439b8978904637e7b9c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3183fe579ad9d922db798ca8d83cc62faa52147bdc901bf55f39b6c994374e87?apiKey=f50fc97234d04439b8978904637e7b9c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3183fe579ad9d922db798ca8d83cc62faa52147bdc901bf55f39b6c994374e87?apiKey=f50fc97234d04439b8978904637e7b9c&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative text-white text-center text-sm font-medium leading-4 tracking-wide uppercase self-center whitespace-nowrap mt-4">
                Best Deal
              </div>
              <div className="relative text-white text-center text-3xl font-semibold leading-10 mt-3">
                Special Products Deal of the Month
              </div>
              <div className="relative justify-center items-stretch self-center flex gap-3 mt-8 mb-5 rounded-[43px]">
                <div className="text-white text-center text-base font-semibold leading-5">
                  Shop Now
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/362582d95bee6233e8dd1c708905c5cfd99273cef87c8c4d77b30204d0c05e20?apiKey=f50fc97234d04439b8978904637e7b9c&"
                  className="aspect-[1.15] object-contain object-center w-[15px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyComponent;

