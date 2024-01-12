// // import React from 'react';
import About1 from "./Images/About1.png";

// import Banner from "./Images/Banner2.png";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";

import { WeDelvieredYou } from "./WeDeliver";
// // // import { Box } from "./Box/Box1";
import { Team } from "./Team";
// import { Testimonial1 } from "./Testimonials/Testimonial1";
import Frame from "./Frame";
// import Testimonials from "../Homepage/Testimonials";
import { Testimonial1 } from "./Testimonials/Testimonial1";

function About() {
  const [theme] = useThemeHook();

  return (
    <div className="m-[2rem] md:m-[5rem]">
      <div className="md:flex justify-evenly align-middle">
        <div className="md:w-[48%]">
          <p
            style={{ color: theme ? "#fff" : "" }}
            className="text-6xl font-semibold max-md:text-4xl"
          >
            100% Trusted
            <br /> Organic Food Store
          </p>
          <div className="text-stone-500 text-lg leading-7 mt-9 ">
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
          </div>
        </div>
        <div>
          <img src={About1} className="w-[500px]" />
        </div>
      </div>
      <Frame />
      <WeDelvieredYou />
      <Testimonial1 />
    </div>
  );
}

export default About;
// const About = () => {
//     const [theme] = useThemeHook();

//     return (

//         <div style={{ backgroundColor: theme ? "black" : "" }}>
//             <img src={Banner} className="w-[98%] " alt='banner' />

//             <div className='relative w-screen h-[492px] mt-20 text-center' style={{ backgroundColor: theme ? "black" : "" }}>
//                 <p className='text-#000000 text-4xl font-bold absolute top-[36px] left-1/2 transform -translate-x-1/2' style={{ color: theme ? "#fff" : "" }}>
//                     100% Trusted <br />Organic Food Store
//                 </p>
//                 <p style={{ color: theme ? "#fff" : "" }} className="text-gray-scalegray-600 text-lg absolute w-full top-[180px] left-1/2 transform -translate-x-1/2">
//                     Welcome to our Organic Vegetable Store, where taste meets purity! We take pride in offering a curated selection of 100% organic vegetables that not only nourish your body but also tantalize your taste buds with unrivaled flavors. From vibrant tomatoes to crisp leafy greens, our commitment to organic farming practices
//                 </p>
//                 <img src={About1} alt="image" className="w-full h-[400px] object-cover mt-4" />
//             </div>

//             <div className="w-full relative mt-4">
//                 <div className="w-full bg-gradient-to-b from-gray-100 to-white" style={{ height: '600px' }}>
//                     <img className="w-full h-[585px] object-cover" alt="Bg" src={BG} />
//                     <img className="w-full h-[585px] object-cover absolute" alt="Image" src={About2} />
//                     <p className="text-4xl font-bold absolute top-[4px] left-1/2 transform -translate-x-1/2" style={{ color: theme ? "#fff" : "" }}>
//                         100% Trusted <br />Organic Food Store
//                     </p>
//                     <p style={{ color: theme ? "#fff" : "" }} className="text-gray-scalegray-500 text-lg absolute w-full top-[36px] left-1/2 transform -translate-x-1/2">
//                         Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat.
//                     </p>

//                     <div className="grid-cols-2  w-screen">
//                         <div>
//                             <div className="inline-flex flex-wrap gap-[1px]  bg-gray-scalewhite relative left-[48%]  mt-[17%] ">
//                                 <div className=" inline-flex flex-col items-start p-[20px] relative bg-[#00b2061a] rounded-[1000px]">
//                                     <img className="relative flex-[0_0_auto]" alt="Icon" src={leaf2} />
//                                 </div>
//                                 <div className="inline-flex flex-col items-start justify-center gap-[8px] relative flex-[0_0_auto]">
//                                     <div className="relative w-[224px] mt-[-1.00px] font-body-large-body-large-500 font-[number:var(--body-large-body-large-500-font-weight)] text-gray-scalegray-900 text-[length:var(--body-large-body-large-500-font-size)] tracking-[var(--body-large-body-large-500-letter-spacing)] leading-[var(--body-large-body-large-500-line-height)] [font-style:var(--body-large-body-large-500-font-style)]">
//                                         100% Organic food
//                                     </div>
//                                     <p className="relative w-[224px] font-body-small-body-small-400 font-[number:var(--body-small-body-small-400-font-weight)] text-gray-scalegray-500 text-[length:var(--body-small-body-small-400-font-size)] tracking-[var(--body-small-body-small-400-letter-spacing)] leading-[var(--body-small-body-small-400-line-height)] [font-style:var(--body-small-body-small-400-font-style)]">
//                                         100% healthy &amp; Fresh food.
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className="relative mt-[-112px] inline-flex left-[55%] bg-white">
//                                 <div className=" inline-flex flex-col items-start p-[20px] relative bg-[#00b2061a] rounded-[1000px]">
//                                     <img className="relative flex-[0_0_auto]" alt="Icon" src={Headphones} />
//                                 </div>
//                                 <div className="inline-flex flex-col items-start justify-center gap-[8px] relative flex-[0_0_auto]">
//                                     <div className="relative w-[224px] mt-[-1.00px] font-body-large-body-large-500 font-[number:var(--body-large-body-large-500-font-weight)] text-gray-scalegray-900 text-[length:var(--body-large-body-large-500-font-size)] tracking-[var(--body-large-body-large-500-letter-spacing)] leading-[var(--body-large-body-large-500-line-height)] [font-style:var(--body-large-body-large-500-font-style)]">
//                                         Great Support 24/7
//                                     </div>
//                                     <p className="relative w-[224px] font-body-small-body-small-400 font-[number:var(--body-small-body-small-400-font-weight)] text-gray-scalegray-500 text-[length:var(--body-small-body-small-400-font-size)] tracking-[var(--body-small-body-small-400-letter-spacing)] leading-[var(--body-small-body-small-400-line-height)] [font-style:var(--body-small-body-small-400-font-style)]">
//                                         Instant access to Contact
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="flex-col relative mt-[-240px]" >
//                             <div>
//                                 <div className="inline-flex flex-wrap gap-[1px]  bg-gray-scalewhite relative left-[48%]  mt-[17%] ">
//                                     <div className=" inline-flex flex-col items-start p-[20px] relative bg-[#00b2061a] rounded-[1000px]">
//                                         <img className="relative flex-[0_0_auto]" alt="Icon" src={stars} />
//                                     </div>
//                                     <div className="inline-flex flex-col items-start justify-center gap-[8px] relative flex-[0_0_auto]">
//                                         <div className="relative w-[224px] mt-[-1.00px] font-body-large-body-large-500 font-[number:var(--body-large-body-large-500-font-weight)] text-gray-scalegray-900 text-[length:var(--body-large-body-large-500-font-size)] tracking-[var(--body-large-body-large-500-letter-spacing)] leading-[var(--body-large-body-large-500-line-height)] [font-style:var(--body-large-body-large-500-font-style)]">
//                                             Customer Feedback
//                                         </div>
//                                         <p className="relative w-[224px] font-body-small-body-small-400 font-[number:var(--body-small-body-small-400-font-weight)] text-gray-scalegray-500 text-[length:var(--body-small-body-small-400-font-size)] tracking-[var(--body-small-body-small-400-letter-spacing)] leading-[var(--body-small-body-small-400-line-height)] [font-style:var(--body-small-body-small-400-font-style)]">
//                                             Our happy customer
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <div className="relative mt-[-112px] inline-flex left-[55%] bg-white">
//                                     <div className=" inline-flex flex-col items-start p-[20px] relative bg-[#00b2061a] rounded-[1000px]">
//                                         <img className="relative flex-[0_0_auto]" alt="Icon" src={Shoppingbag} />
//                                     </div>
//                                     <div className="inline-flex flex-col items-start justify-center gap-[8px] relative flex-[0_0_auto]">
//                                         <div className="relative w-[224px] mt-[-1.00px] font-body-large-body-large-500 font-[number:var(--body-large-body-large-500-font-weight)] text-gray-scalegray-900 text-[length:var(--body-large-body-large-500-font-size)] tracking-[var(--body-large-body-large-500-letter-spacing)] leading-[var(--body-large-body-large-500-line-height)] [font-style:var(--body-large-body-large-500-font-style)]">
//                                             100% Sucure Payment
//                                         </div>
//                                         <p className="relative w-[224px] font-body-small-body-small-400 font-[number:var(--body-small-body-small-400-font-weight)] text-gray-scalegray-500 text-[length:var(--body-small-body-small-400-font-size)] tracking-[var(--body-small-body-small-400-letter-spacing)] leading-[var(--body-small-body-small-400-line-height)] [font-style:var(--body-small-body-small-400-font-style)]">
//                                             We ensure your money is save                                        </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="flex-col relative mt-[-240px]" >
//                             <div>
//                                 <div className="inline-flex flex-wrap gap-[1px]  bg-gray-scalewhite relative left-[48%]  mt-[17%] ">
//                                     <div className=" inline-flex flex-col items-start p-[20px] relative bg-[#00b2061a] rounded-[1000px]">
//                                         <img className="relative flex-[0_0_auto]" alt="Icon" src={delivery} />
//                                     </div>
//                                     <div className="inline-flex flex-col items-start justify-center gap-[8px] relative flex-[0_0_auto]">
//                                         <div className="relative w-[224px] mt-[-1.00px] font-body-large-body-large-500 font-[number:var(--body-large-body-large-500-font-weight)] text-gray-scalegray-900 text-[length:var(--body-large-body-large-500-font-size)] tracking-[var(--body-large-body-large-500-letter-spacing)] leading-[var(--body-large-body-large-500-line-height)] [font-style:var(--body-large-body-large-500-font-style)]">
//                                             Free Shipping                                        </div>
//                                         <p className="relative w-[224px] font-body-small-body-small-400 font-[number:var(--body-small-body-small-400-font-weight)] text-gray-scalegray-500 text-[length:var(--body-small-body-small-400-font-size)] tracking-[var(--body-small-body-small-400-letter-spacing)] leading-[var(--body-small-body-small-400-line-height)] [font-style:var(--body-small-body-small-400-font-style)]">
//                                             Free shipping with discount                                        </p>
//                                     </div>
//                                 </div>

//                                 <div className="relative mt-[-112px] inline-flex left-[55%] bg-white">
//                                     <div className=" inline-flex flex-col items-start p-[20px] relative bg-[#00b2061a] rounded-[1000px]">
//                                         <img className="relative flex-[0_0_auto]" alt="Icon" src={Package} />
//                                     </div>
//                                     <div className="inline-flex flex-col items-start justify-center gap-[8px] relative flex-[0_0_auto]">
//                                         <div className="relative w-[224px] mt-[-1.00px] font-body-large-body-large-500 font-[number:var(--body-large-body-large-500-font-weight)] text-gray-scalegray-900 text-[length:var(--body-large-body-large-500-font-size)] tracking-[var(--body-large-body-large-500-letter-spacing)] leading-[var(--body-large-body-large-500-line-height)] [font-style:var(--body-large-body-large-500-font-style)]">
//                                             100% Organic food
//                                         </div>
//                                         <p className="relative w-[224px] font-body-small-body-small-400 font-[number:var(--body-small-body-small-400-font-weight)] text-gray-scalegray-500 text-[length:var(--body-small-body-small-400-font-size)] tracking-[var(--body-small-body-small-400-letter-spacing)] leading-[var(--body-small-body-small-400-line-height)] [font-style:var(--body-small-body-small-400-font-style)]">
//                                             100% healthy &amp; Fresh food.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* part 3 delivery agent */}
//                     </div>
//                 </div>

//                 {/* <Team />
//                 <Testimonial1 /> */}

//             </div>
//             // <WeDelvieredYou />
//             // <Team />
//             // <Testimonial1 />
//         </div>

//     )
// }

// export default About;
// import * as React from "react";
