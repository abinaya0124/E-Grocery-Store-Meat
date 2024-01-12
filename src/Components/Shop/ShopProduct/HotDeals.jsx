import { useThemeHook } from "../../GlobalComponents/ThemeProvider";

// import React from 'react'

export const HotDeals = () => {
  const [theme] = useThemeHook()

  return (
    
    <div>
                    <div className="text-black text-xl font-medium leading-8 self-stretch mt-5 "  style={{ color: theme ? "#fff" : "" }}>
                Sale Products
              </div>
              <div className="items-center border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white self-stretch flex justify-between gap-1.5 mt-3 pl-1.5 rounded-md border-solid">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/663afa3ddfd703dc356665c2e56b624f61154fa26136cf5559bcbde58dc0c76a?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                  className="aspect-square object-contain object-center w-[102px] fill-[url(<path-to-image>),lightgray_50%_/_contain_no-repeat] overflow-hidden shrink-0 max-w-full my-auto"
                />
                <div className="justify-center self-stretch flex grow basis-[0%] flex-col px-3 py-6 items-start">
                  <div className="text-neutral-600 text-sm leading-5 self-stretch whitespace-nowrap">
                    Red Capsicum
                  </div>
                  <div className="items-stretch self-stretch flex justify-between gap-0.5">
                    <div className="text-black text-base font-medium leading-6">
                      $32.00
                    </div>
                    <div className="text-red-600 text-base leading-6">
                      $20.99
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/661338522f281d17bb0d7e623e119ed645f07b1955f1ca6bc61d7027988eb20b?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                    className="aspect-[5] object-contain object-center w-[60px] items-start overflow-hidden max-w-full mt-1.5"
                  />
                </div>
              </div>
              <div className="items-center border border-[color:var(--Branding-Success,#FF6316)] shadow-sm bg-white self-stretch flex justify-between gap-1.5 mt-4 pl-1.5 rounded-md border-solid">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f321b332e381819efc4a39d116b14a0d6358dd1ed75774675dc9b03b356820a5?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                  className="aspect-square object-contain object-center w-[102px] fill-[url(<path-to-image>),lightgray_50%_/_cover_no-repeat] overflow-hidden shrink-0 max-w-full my-auto"
                />
                <div className="justify-center self-stretch flex grow basis-[0%] flex-col px-3 py-6 items-start">
                  <div className="text-orange-500 text-sm leading-5 self-stretch whitespace-nowrap">
                    Chanise Cabbage
                  </div>
                  <div className="items-stretch self-stretch flex justify-between gap-0.5">
                    <div className="text-black text-base font-medium leading-6">
                      $24.00
                    </div>
                    <div className="text-red-600 text-base leading-6">
                      $20.99
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/661338522f281d17bb0d7e623e119ed645f07b1955f1ca6bc61d7027988eb20b?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                    className="aspect-[5] object-contain object-center w-[60px] items-start overflow-hidden max-w-full mt-1.5"
                  />
                </div>
              </div>
              <div className="items-center border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white self-stretch flex justify-between gap-1.5 mt-4 pl-1.5 rounded-md border-solid">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a25411d519a52706699b1c4d3185a2405f185c35b1eef15fd0a66bebe0c2a3ae?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                  className="aspect-square object-contain object-center w-[102px] fill-[url(<path-to-image>),lightgray_50%_/_cover_no-repeat] overflow-hidden shrink-0 max-w-full my-auto"
                />
                <div className="justify-center self-stretch flex grow basis-[0%] flex-col px-3 py-6 items-start">
                  <div className="text-neutral-600 text-sm leading-5 self-stretch whitespace-nowrap">
                    Green Capsicum
                  </div>
                  <div className="items-stretch self-stretch flex justify-between gap-0.5">
                    <div className="text-black text-base font-medium leading-6">
                      $32.00
                    </div>
                    <div className="text-red-600 text-base leading-6">
                      $20.99
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/661338522f281d17bb0d7e623e119ed645f07b1955f1ca6bc61d7027988eb20b?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                    className="aspect-[5] object-contain object-center w-[60px] items-start overflow-hidden max-w-full mt-1.5"
                  />
                </div>
              </div>
    </div>
  )
}




// // import React from "react";
// import { Product1 } from "./Product1";
// import Image1 from "../Images/Image1.svg";
// import Image2 from "../Images/Image 2.svg";
// import Image3 from "../Images/Image3.svg";
// import { useThemeHook } from "../../GlobalComponents/ThemeProvider";



//  export const HotDeals = () => {
//   const [theme] = useThemeHook()

//   return (
//     <div className="inline-flex flex-col  items-start justify-center gap-6relative mr-[-44] ml-5">
//       {/* Title */}
//       <div style={{ color: theme ? "#fff" : "" }} className="relative w-fit mt-[3.00px] text-3xl  mt-5 text-gray-scalegray-900 text-length-body-XL-body-XL-500-font-size tracking-body-XL-body-XL-500-letter-spacing leading-body-XL-body-XL-500-line-height whitespace-nowrap font-body-XL-body-XL-500-font-style">
//         Sale Products
//       </div>

//       {/* Product List */}
//       <div className=" inline-flex flex-col items-start gap-16 relative flex-0_0_auto ml-[-44] ">
//         {/* Product 1 */}
//         <Product1 className="!flex-0_0_auto" image={Image1} rating="rating-2.svg" text="Red Capsicum" />

//         {/* Product 2 */}
//         <Product1
//           className="!border-brandingsuccess !flex-0_0_auto !shadow-hover-shadow "
//           divClassName="!text-brandingsuccess-dark"
//           image={Image2}
//           priceText="$24.00"
//           rating="rating-3.svg"
//           text="Chanise Cabbage"
//         />

//         {/* Product 3 */}
//         <Product1 className="!flex-0_0_auto" image={Image3} priceText="$32.00" rating="rating-4.svg" text="Green Capsicum" />
//       </div>
//     </div>
//   );
// };

// // export default HotDeals;
// // import React from "react";
// // import { Product1 } from "./Product1";
// // import "../shop1.css"; // Assuming this is your CSS file

// // const HotDeals = () => {
// //   return (
// //     <div className="hot-deals">
// //       {/* Title */}
// //       <div className="title">Sale Products</div>

// //       {/* Product List */}
// //       <div className="frame">
// //         {/* Product 1 */}
// //         <Product1 className="product-instance" image="image-2.svg" rating="rating-2.svg" />

// //         {/* Product 2 */}
// //         <Product1
// //           className="product-2"
// //           divClassName="design-component-instance-node"
// //           image="image-3.svg"
// //           priceText="$24.00"
// //           rating="rating-3.svg"
// //           text="Chanise Cabbage"
// //         />

// //         {/* Product 3 */}
// //         <Product1 className="product-instance" image="image-4.svg" priceText="$32.00" rating="rating-4.svg" text="Green Capsicum" />
// //       </div>
// //     </div>
// //   );
// // };

// // export default HotDeals;
