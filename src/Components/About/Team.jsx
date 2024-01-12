// import React from "react";
// import { TeamCard } from "./TeamCard";
import ceo from "./Images/people/ceo.png";
// import Manager from "./Images/people/Manager.png";
// import Security from "./Images/people/Security.png";
// import Worker from "./Images/people/worker.png";
// import { useThemeHook } from "../GlobalComponents/ThemeProvider";

// TeamMember.js

const TeamMember = ({ name, role, imageUrl }) => (
  
  
    <div className="self-stretch flex grow basis-[0%] flex-col justify-center items-stretch">
      <div className="border  border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex flex-col items-stretch pb-5 rounded-lg border-solid">
        <img
          loading="lazy"
          src={imageUrl}
          className="aspect-[1.11] object-contain object-center  overflow-hidden"
          alt={`${name}'s profile`}
        />
        <div className="text-black text-lg font-medium leading-7 self-center whitespace-nowrap mt-4">
          {name}
        </div>
        <div className="text-zinc-500 text-sm leading-5 self-center whitespace-nowrap mt-1">
          {role}
        </div>
      </div>
    </div>
  );
  
  // Team.js
  
//   import TeamMember from './TeamMember';
  
  const teamData = [
    {
      name: 'Jenny Wilson',
      role: 'Ceo & Founder',
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/65366dad1b7f823976f5713a3b7ca06c49343a834f37d11c03da8e3c05fe182c?apiKey=c795402f61f84f4faf36834d5e8f01a8&',
    },
    {
      name: 'Jane Cooper',
      role: 'Worker',
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/4f364be03617fb9616682eb21a2360e9b672074a10dbcca7e3368639a8df5f83?apiKey=c795402f61f84f4faf36834d5e8f01a8&',
    },
    {
      name: 'Cody Fisher',
      role: 'Security Guard',
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/53071e20a4d753fa94777e43cff5bbcedfed59de1735518e583beb2e6ceedf91?apiKey=c795402f61f84f4faf36834d5e8f01a8&',
    },
    {
      name: 'Robert Fox',
      role: 'Senior Farmer Manager',
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/2235f13545a010c15e2e8ce32fc1102a8efb41ebff01bca2b5095d47da5039ae?apiKey=c795402f61f84f4faf36834d5e8f01a8&',
    },
  ];
  
 export const Team = () => (

    <div className="self-stretch flex w-full flex-col justify-center items-center px-16 py-12 pt-[-20%] max-md:max-w-full max-md:px-5 ">
      <div className="flex w-full max-w-[1474px] flex-col items-stretch pt-[-20%] my-8 max-md:max-w-full">
        {/* Other content remains the same */}
        <div className="flex items-start justify-between gap-5 mt-12 max-md:max-w-full  sm:flex-row flex-col">
          {teamData.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
          {/* Add other static content or members if needed */}
          <img
            loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d88bfaf730c23065ce2693235a8911e44fc0445e13a18845265c3239d863785?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
            className="aspect-square object-contain object-center w-[45px] overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
        </div>
      </div>
    </div>
  );
  
  

// export const Team = () => {
//     const [theme] = useThemeHook();

//     return (
//         <div  className=" h-[533px] mt-0 ml-[0%] "  >
//             <div style={{ background: theme ? "black" : "" }} className=" w-screen    left-0 [background:linear-gradient(180deg,rgb(242.25,242.25,242.25)_0%,rgb(255,255,255)_100%)]">
//                 <div  className="inline-flex flex-col ml-[7%] items-center gap-[12px] relative top-9 ">
//                     <div style={{ color: theme ? "#fff" : "" }} className="relative  w-fit mt-[-1.00px] font-heading-02-heading-02-600 font-[number:var(--heading-02-heading-02-600-font-weight)] text-gray-scalegray-900 text-[length:var(--heading-02-heading-02-600-font-size)] text-center tracking-[var(--heading-02-heading-02-600-letter-spacing)] leading-[var(--heading-02-heading-02-600-line-height)] whitespace-nowrap [font-style:var(--heading-02-heading-02-600-font-style)]">
//                         Our Awesome Team
//                     </div>
//                     <p style={{ color: theme ? "#fff" : "" }} className="relative  w-[640px] font-body-medium-body-medium-400 font-[number:var(--body-medium-body-medium-400-font-weight)] text-gray-scalegray-600 text-[length:var(--body-medium-body-medium-400-font-size)] text-center tracking-[var(--body-medium-body-medium-400-letter-spacing)] leading-[var(--body-medium-body-medium-400-line-height)] [font-style:var(--body-medium-body-medium-400-font-style)]">
//                         Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est
//                         luctus tincidunt a a mi.
//                     </p>

//                     <div className="flex gap-3" style={{ backgroundColor: theme ? "black" : "" }}>
//                         <TeamCard
//                             image={ceo}
//                             imageClassName="![object-fit:unset]"
//                             property1="default"
//                             text="Jenny Wilson"
//                             text1="Ceo & Founder"
//                         />
//                         <TeamCard
//                             image={Worker}
//                             imageClassName="![object-fit:unset]"
//                             property1="default"
//                             text="Jane Cooper"
//                             text1="Worker"
//                         />

//                         <TeamCard
//                             image={Security}
//                             imageClassName="![object-fit:unset]"
//                             property1="default"
//                             text="Cody Fisher"
//                             text1="Security Guard"
//                         />

//                         <TeamCard
//                             image={Manager}
//                             imageClassName="![object-fit:unset]"
//                             property1="default"
//                             text="Robert Fox"
//                             text1="Senior Farmer Manager"
//                         />

//                         {/* <TeamCard className="!rounded-[10px]" imageClassName="bg-[url(pininterest 1.svg)]" property1="hover" />; */}
//                     </div>

//                 </div>
//             </div>

//             {/* </div> */}
//         </div>
//     );
// };
  
{/* <div className="self-stretch flex w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="flex w-full max-w-[1474px] flex-col items-stretch my-8 max-md:max-w-full">
            <div className="text-black text-center text-5xl font-semibold leading-[57.6px] self-center max-md:max-w-full max-md:text-4xl">
              Our Awesome Team
            </div>
            <div className="text-stone-500 text-center text-base leading-6 self-center max-w-screen-sm mt-3 max-md:max-w-full">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
              Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
              mi.
            </div>
            <div className="flex items-start justify-between gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c32ea62d283479be3bd06a696109e0db746cba6da4da81b74e2d5a8ea6b5bb0f?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                className="aspect-square object-contain object-center w-[45px] overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
              <div className="self-stretch flex grow basis-[0%] flex-col justify-center items-stretch rounded-xl">
                <div className="shadow-2xl bg-white flex flex-col items-stretch pb-5 rounded-lg">
                  <div className="flex-col overflow-hidden relative flex aspect-[1.1142857142857143] w-full justify-center items-center px-16 py-12 max-md:px-5">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/65366dad1b7f823976f5713a3b7ca06c49343a834f37d11c03da8e3c05fe182c?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/65366dad1b7f823976f5713a3b7ca06c49343a834f37d11c03da8e3c05fe182c?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/65366dad1b7f823976f5713a3b7ca06c49343a834f37d11c03da8e3c05fe182c?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/65366dad1b7f823976f5713a3b7ca06c49343a834f37d11c03da8e3c05fe182c?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/65366dad1b7f823976f5713a3b7ca06c49343a834f37d11c03da8e3c05fe182c?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/65366dad1b7f823976f5713a3b7ca06c49343a834f37d11c03da8e3c05fe182c?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/65366dad1b7f823976f5713a3b7ca06c49343a834f37d11c03da8e3c05fe182c?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/65366dad1b7f823976f5713a3b7ca06c49343a834f37d11c03da8e3c05fe182c?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                      className="absolute h-full w-full object-cover object-center inset-0"
                    />
                    <div className="relative items-stretch flex gap-1 mt-16 mb-12 max-md:my-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c53685c9c429e5c16e51ca5d2fd140c4417560ffa12a0843746fd828fc7051db?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                        className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2881d96392c5f808f4fe18dd161b8e10faccb8095c50638fe8def6e14dc3cf6c?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                        className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c57c76e45a492df66aac08ae9144fe02fb2e09fe254a181d674b266d8dcbfc7?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                        className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/18fff038ed47d98a88bf80d8a9ffb1ef35a765dbfc364bcaa8c342a5a89c0f5d?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                        className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                      />
                    </div>
                  </div>
                  <div className="text-black text-lg font-medium leading-7 self-center whitespace-nowrap mt-4">
                    Jenny Wilson
                  </div>
                  <div className="text-zinc-500 text-sm leading-5 self-center whitespace-nowrap mt-1">
                    Ceo & Founder
                  </div>
                </div>
              </div>
              <div className="self-stretch flex grow basis-[0%] flex-col justify-center items-stretch">
                <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex flex-col items-stretch pb-5 rounded-lg border-solid">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4f364be03617fb9616682eb21a2360e9b672074a10dbcca7e3368639a8df5f83?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f364be03617fb9616682eb21a2360e9b672074a10dbcca7e3368639a8df5f83?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f364be03617fb9616682eb21a2360e9b672074a10dbcca7e3368639a8df5f83?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f364be03617fb9616682eb21a2360e9b672074a10dbcca7e3368639a8df5f83?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f364be03617fb9616682eb21a2360e9b672074a10dbcca7e3368639a8df5f83?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f364be03617fb9616682eb21a2360e9b672074a10dbcca7e3368639a8df5f83?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f364be03617fb9616682eb21a2360e9b672074a10dbcca7e3368639a8df5f83?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f364be03617fb9616682eb21a2360e9b672074a10dbcca7e3368639a8df5f83?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                    className="aspect-[1.11] object-contain object-center w-full overflow-hidden"
                  />
                  <div className="text-black text-lg font-medium leading-7 self-center whitespace-nowrap mt-4">
                    Jane Cooper
                  </div>
                  <div className="text-zinc-500 text-sm leading-5 self-center whitespace-nowrap mt-1">
                    Worker
                  </div>
                </div>
              </div>
              <div className="self-stretch flex grow basis-[0%] flex-col justify-center items-stretch">
                <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex flex-col items-stretch pb-5 rounded-lg border-solid">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/53071e20a4d753fa94777e43cff5bbcedfed59de1735518e583beb2e6ceedf91?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/53071e20a4d753fa94777e43cff5bbcedfed59de1735518e583beb2e6ceedf91?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53071e20a4d753fa94777e43cff5bbcedfed59de1735518e583beb2e6ceedf91?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/53071e20a4d753fa94777e43cff5bbcedfed59de1735518e583beb2e6ceedf91?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/53071e20a4d753fa94777e43cff5bbcedfed59de1735518e583beb2e6ceedf91?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53071e20a4d753fa94777e43cff5bbcedfed59de1735518e583beb2e6ceedf91?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/53071e20a4d753fa94777e43cff5bbcedfed59de1735518e583beb2e6ceedf91?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/53071e20a4d753fa94777e43cff5bbcedfed59de1735518e583beb2e6ceedf91?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                    className="aspect-[1.11] object-contain object-center w-full overflow-hidden"
                  />
                  <div className="text-black text-lg font-medium leading-7 self-center whitespace-nowrap mt-4">
                    Cody Fisher
                  </div>
                  <div className="text-zinc-500 text-sm leading-5 self-center whitespace-nowrap mt-1">
                    Security Guard
                  </div>
                </div>
              </div>
              <div className="self-stretch flex grow basis-[0%] flex-col justify-center items-stretch">
                <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex flex-col items-stretch pb-5 rounded-lg border-solid">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2235f13545a010c15e2e8ce32fc1102a8efb41ebff01bca2b5095d47da5039ae?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2235f13545a010c15e2e8ce32fc1102a8efb41ebff01bca2b5095d47da5039ae?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2235f13545a010c15e2e8ce32fc1102a8efb41ebff01bca2b5095d47da5039ae?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2235f13545a010c15e2e8ce32fc1102a8efb41ebff01bca2b5095d47da5039ae?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2235f13545a010c15e2e8ce32fc1102a8efb41ebff01bca2b5095d47da5039ae?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2235f13545a010c15e2e8ce32fc1102a8efb41ebff01bca2b5095d47da5039ae?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2235f13545a010c15e2e8ce32fc1102a8efb41ebff01bca2b5095d47da5039ae?apiKey=c795402f61f84f4faf36834d5e8f01a8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2235f13545a010c15e2e8ce32fc1102a8efb41ebff01bca2b5095d47da5039ae?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                    className="aspect-[1.11] object-contain object-center w-full overflow-hidden"
                  />
                  <div className="text-black text-lg font-medium leading-7 self-center whitespace-nowrap mt-4">
                    Robert Fox
                  </div>
                  <div className="text-zinc-500 text-sm leading-5 self-center whitespace-nowrap mt-1">
                    Senior Farmer Manager
                  </div>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d88bfaf730c23065ce2693235a8911e44fc0445e13a18845265c3239d863785?apiKey=c795402f61f84f4faf36834d5e8f01a8&"
                className="aspect-square object-contain object-center w-[45px] overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
        </div> */}