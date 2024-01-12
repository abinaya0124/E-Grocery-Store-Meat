import Delivery from "../images/blog3/delivery-truck 1.svg";
import Head from "../images/blog3/headphones 1.svg";
import Bag from "../images/blog3/shopping-bag.svg";
import Pack from "../images/blog3/package.svg";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
function Feature() {
  const [theme] = useThemeHook();
  const features = [
    {
      id: 1,
      imageSrc:Delivery,
      title: "Free Shipping",
      description: "Free shipping on all your order",
    },
    {
      id: 2,
      imageSrc:Head,
      title: "Customer Support 24/7",
      description: "Instant access to Support",
    },
    {
      id: 3,
      imageSrc:Bag,
      title: "100% Secure Payment",
      description: "We ensure your money is safe",
    },
    {
      id: 4,
      imageSrc:Pack,
      title: "Money-Back Guarantee",
      description: "30 Days Money-Back Guarantee",
    },
  ];

  return (
    <div className="justify-between shadow-2xl bg-transparent-600 p-10 mr-10 ml-10 rounded-lg max-md:px-5">
      <div className=" flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0"
          >
            <div className="justify-between items-center flex grow gap-4 max-md:mt-10">
              <img
                loading="lazy"
                src={feature.imageSrc}
                className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-black text-base font-semibold leading-5 whitespace-nowrap" style={{color:theme?'white':'black'}}>
                  {feature.title}
                </div>
                <div className="text-black text-sm leading-5 whitespace-nowrap mt-2" style={{color:theme?'white':'black'}}>
                  {feature.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
