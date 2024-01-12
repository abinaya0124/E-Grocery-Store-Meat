// import React from "react";
// import { Aoorw } from "./Aoorw";
// import { Property1Hover } from "./Property1Hover";
// import { TestimonialCard } from "./TestimonialCard";
import Group from "../Images/testimonials/Group.svg";
import Group2 from "../Images/testimonials/Group2.svg";
import Image1 from "../Images/testimonials/Image-1.svg";
import Image2 from "../Images/testimonials/Image-2.svg";
import Image3 from "../Images/testimonials/Image-3.svg";
import rating from "../Images/testimonials/star 10.svg";
import Vector from "../Images/testimonials/Vector.svg";
import { useThemeHook } from "../../GlobalComponents/ThemeProvider";

import { TestimonialsCard } from "../Testimonials/TestimonialsCard";

export const Testimonial1 = () => {
  const [theme] = useThemeHook();

  return (
    <div className="bg-[#F2F2F2] w-[113.5%] ml-[-8%] ">
      <div
      style={{ background: theme ? "black" : "" }}
      className=" px-4 py-[100px] relative bg-gray-scalegray-50  w-[100%]"
    >
      <div className="flex flex-col items-center justify-between ">
        <div
          style={{ color: theme ? "#fff" : "" }}
          className=" font-heading-02-heading-02-600 text-gray-scalegray-900 text-center"
        >
          <p className="text-4xl mt-[-20%]">Client Testimonial </p>
        </div>
        <div className="inline-flex items-start gap-3 mb-6 ml-[67%] relative flex-[0_0_auto]">
          <div className="relative w-[45px] h-[45px] bg-gray-scalewhite rounded-[22.5px]">
            <img
              className="absolute w-[16px] h-[14px] top-[15px] left-[15px]"
              alt="Group"
              src={Group2}
            />
            </div>
            <div className="relative w-[45px] h-[45px] bg-brandingsuccess rounded-[22.5px]">
              <img
                className="absolute w-[16px] h-[14px] top-[15px] left-[14px]"
                alt="Group"
                src={Group}
              />
            </div>
         </div>
        </div>

         <div className="gap-[20px]  ml-2%  mr-[28%]  inline-flex items-start relative flex-[0_0_auto] sm:flex-row flex-col">
          <TestimonialsCard
            className="!flex-[0_0_auto]"
            image={Image1}
            property1="default"
            rating={rating}
            vector={Vector}
          />
          <TestimonialsCard
            className="!flex-[0_0_auto]"
            image={Image2}
            infoClassName="!mr-[-18.00px]"
            property1="default"
            rating={rating}
            text="Dianne Russell"
            vector={Vector}
          />
          <TestimonialsCard
            className="!flex-[0_0_auto]"
            image={Image3}
            infoClassName="!mr-[-5.00px]"
            property1="default"
            rating={rating}
            text="Eleanor Pena"
            vector={Vector}
          />
        </div> 
      </div>
    </div>
  );
};
{
  /* <div className="justify-center items-stretch bg-zinc-100 self-stretch flex w-full flex-col py-12 max-md:max-w-full">
<div className="justify-center items-center flex w-full flex-col mt-12 px-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
  <div className="flex w-full max-w-[1320px] items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
    <div className="text-black text-center text-5xl font-semibold leading-[57.6px] grow shrink basis-auto max-md:max-w-full max-md:text-4xl">
      Client Testimonail
    </div>
    <div className="items-stretch self-center flex gap-3 my-auto">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/648d347a94c3794ede1aa91787f313321b651770884330dfdb739f3efc22debe?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
        className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/26f1f3c37361a1c1b12a637a1cbd03c54395155a7e7765498885811856a520cc?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
        className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full"
      />
    </div>
  </div>
</div>
<div className="self-center w-full max-w-[1320px] my-12 px-5 max-md:max-w-full max-md:my-10">
  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
      <div className="shadow-lg bg-white flex grow flex-col w-full p-6 rounded-lg items-start max-md:max-w-full max-md:mt-6 max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6ddd03ae69f4ba019497b19b08034c559adc7c2778671b6ba3ada3411e77dea?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
          className="aspect-[1.23] object-contain object-center w-8 fill-orange-500 overflow-hidden max-w-full"
        />
        <div className="text-neutral-600 text-sm leading-5 self-stretch mt-4">
          Pellentesque eu nibh eget mauris congue mattis mattis nec
          tellus. Phasellus imperdiet elit eu magna dictum, bibendum
          cursus velit sodales. Donec sed neque eget
        </div>
        <div className="justify-between items-stretch self-stretch flex w-full gap-5 mt-4 pt-2">
          <div className="items-stretch flex justify-between gap-3 pr-4">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9a05f2483ed66df58cbd78e40c8d0f98e5b47a39b9d47169a7c46c2f0e24a007?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a05f2483ed66df58cbd78e40c8d0f98e5b47a39b9d47169a7c46c2f0e24a007?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a05f2483ed66df58cbd78e40c8d0f98e5b47a39b9d47169a7c46c2f0e24a007?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a05f2483ed66df58cbd78e40c8d0f98e5b47a39b9d47169a7c46c2f0e24a007?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a05f2483ed66df58cbd78e40c8d0f98e5b47a39b9d47169a7c46c2f0e24a007?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a05f2483ed66df58cbd78e40c8d0f98e5b47a39b9d47169a7c46c2f0e24a007?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a05f2483ed66df58cbd78e40c8d0f98e5b47a39b9d47169a7c46c2f0e24a007?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a05f2483ed66df58cbd78e40c8d0f98e5b47a39b9d47169a7c46c2f0e24a007?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
              className="aspect-square object-contain object-center w-14 overflow-hidden shrink-0 max-w-full rounded-[50%]"
            />
            <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
              <div className="text-black text-center text-base font-medium leading-6 whitespace-nowrap">
                Robert Fox
              </div>
              <div className="text-red-600 text-center text-sm leading-5 whitespace-nowrap">
                Customer
              </div>
            </div>
          </div>
          <div className="items-stretch self-center flex gap-px my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e89ac8b501087f3e61a89ca62874f3a7595ddb4dc02a9b26ebc7076fedab35?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e89ac8b501087f3e61a89ca62874f3a7595ddb4dc02a9b26ebc7076fedab35?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e89ac8b501087f3e61a89ca62874f3a7595ddb4dc02a9b26ebc7076fedab35?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e89ac8b501087f3e61a89ca62874f3a7595ddb4dc02a9b26ebc7076fedab35?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e89ac8b501087f3e61a89ca62874f3a7595ddb4dc02a9b26ebc7076fedab35?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
      <div className="shadow-lg bg-white flex grow flex-col w-full p-6 rounded-lg items-start max-md:max-w-full max-md:mt-6 max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6ddd03ae69f4ba019497b19b08034c559adc7c2778671b6ba3ada3411e77dea?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
          className="aspect-[1.23] object-contain object-center w-8 fill-orange-500 overflow-hidden max-w-full"
        />
        <div className="text-neutral-600 text-sm leading-5 self-stretch mt-4">
          Pellentesque eu nibh eget mauris congue mattis mattis nec
          tellus. Phasellus imperdiet elit eu magna dictum, bibendum
          cursus velit sodales. Donec sed neque eget
        </div>
        <div className="justify-between items-stretch self-stretch flex w-full gap-5 mt-4 pt-2">
          <div className="items-stretch flex justify-between gap-3">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0bd93c312a8b5635f797b2c7f2eb1e481b29dad68bfc6987b1e8882181650790?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bd93c312a8b5635f797b2c7f2eb1e481b29dad68bfc6987b1e8882181650790?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bd93c312a8b5635f797b2c7f2eb1e481b29dad68bfc6987b1e8882181650790?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bd93c312a8b5635f797b2c7f2eb1e481b29dad68bfc6987b1e8882181650790?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bd93c312a8b5635f797b2c7f2eb1e481b29dad68bfc6987b1e8882181650790?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bd93c312a8b5635f797b2c7f2eb1e481b29dad68bfc6987b1e8882181650790?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bd93c312a8b5635f797b2c7f2eb1e481b29dad68bfc6987b1e8882181650790?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bd93c312a8b5635f797b2c7f2eb1e481b29dad68bfc6987b1e8882181650790?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
              className="aspect-square object-contain object-center w-14 overflow-hidden shrink-0 max-w-full rounded-[50%]"
            />
            <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
              <div className="text-black text-center text-base font-medium leading-6 whitespace-nowrap">
                Dianne Russell
              </div>
              <div className="text-red-600 text-center text-sm leading-5">
                Customer
              </div>
            </div>
          </div>
          <div className="items-stretch self-center flex gap-px my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e89ac8b501087f3e61a89ca62874f3a7595ddb4dc02a9b26ebc7076fedab35?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e89ac8b501087f3e61a89ca62874f3a7595ddb4dc02a9b26ebc7076fedab35?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e89ac8b501087f3e61a89ca62874f3a7595ddb4dc02a9b26ebc7076fedab35?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e89ac8b501087f3e61a89ca62874f3a7595ddb4dc02a9b26ebc7076fedab35?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e89ac8b501087f3e61a89ca62874f3a7595ddb4dc02a9b26ebc7076fedab35?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
      <div className="shadow-lg bg-white flex grow flex-col w-full p-6 rounded-lg items-start max-md:max-w-full max-md:mt-6 max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6ddd03ae69f4ba019497b19b08034c559adc7c2778671b6ba3ada3411e77dea?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
          className="aspect-[1.23] object-contain object-center w-8 fill-orange-500 overflow-hidden max-w-full"
        />
        <div className="text-neutral-600 text-sm leading-5 self-stretch mt-4">
          Pellentesque eu nibh eget mauris congue mattis mattis nec
          tellus. Phasellus imperdiet elit eu magna dictum, bibendum
          cursus velit sodales. Donec sed neque eget
        </div>
        <div className="justify-between items-stretch self-stretch flex w-full gap-5 mt-4 pt-2">
          <div className="items-stretch flex justify-between gap-3">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/69229c5e6fe3bd3bc05945621de59d292d4f15cc1ac9d3aca29f315e1608eb86?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/69229c5e6fe3bd3bc05945621de59d292d4f15cc1ac9d3aca29f315e1608eb86?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/69229c5e6fe3bd3bc05945621de59d292d4f15cc1ac9d3aca29f315e1608eb86?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/69229c5e6fe3bd3bc05945621de59d292d4f15cc1ac9d3aca29f315e1608eb86?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/69229c5e6fe3bd3bc05945621de59d292d4f15cc1ac9d3aca29f315e1608eb86?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/69229c5e6fe3bd3bc05945621de59d292d4f15cc1ac9d3aca29f315e1608eb86?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/69229c5e6fe3bd3bc05945621de59d292d4f15cc1ac9d3aca29f315e1608eb86?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/69229c5e6fe3bd3bc05945621de59d292d4f15cc1ac9d3aca29f315e1608eb86?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
              className="aspect-square object-contain object-center w-14 overflow-hidden shrink-0 max-w-full rounded-[50%]"
            />
            <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
              <div className="text-black text-center text-base font-medium leading-6 whitespace-nowrap">
                Eleanor Pena
              </div>
              <div className="text-red-600 text-center text-sm leading-5">
                Customer
              </div>
            </div>
          </div>
          <div className="items-stretch self-center flex gap-px my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e89ac8b501087f3e61a89ca62874f3a7595ddb4dc02a9b26ebc7076fedab35?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e89ac8b501087f3e61a89ca62874f3a7595ddb4dc02a9b26ebc7076fedab35?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e89ac8b501087f3e61a89ca62874f3a7595ddb4dc02a9b26ebc7076fedab35?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e89ac8b501087f3e61a89ca62874f3a7595ddb4dc02a9b26ebc7076fedab35?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e89ac8b501087f3e61a89ca62874f3a7595ddb4dc02a9b26ebc7076fedab35?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div> */
}
