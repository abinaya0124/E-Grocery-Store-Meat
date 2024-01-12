import { BsHandbag } from "react-icons/bs";
import { CgEye } from "react-icons/cg";
import { Button } from "react-bootstrap";
import Image from "../images/product1/Image.png";
import Image2 from "../images/product2/Image.png";
import Image3 from "../images/product3/Image.png";
import Image4 from "../images/product4/Image (1).png";
import Image5 from "../images/product5/Image (2).png";
import Image6 from "../images/product6/Image (3).png";
import Group from "../images/Group.svg"

function HotDeals() {
  // Example data structure for each product
  const products = [
    {
      id: 1,
      name: "Green Apple",
      imageUrl: Image,
      price: "$14.99",
      discountedPrice: "$20.99",
    },
    {
      id: 2,
      name: "Green Apple",
      imageUrl: Image2,
      price: "$14.99",
      discountedPrice: "$20.99",
    },
    {
      id: 3,
      name: "Green Apple",
      imageUrl: Image3,
      price: "$14.99",
      discountedPrice: "$20.99",
    },
    {
      id: 4,
      name: "Green Apple",
      imageUrl: Image4,
      price: "$14.99",
      discountedPrice: "$20.99",
    },
    {
      id: 5,
      name: "Green Apple",
      imageUrl: Image5,
      price: "$14.99",
      discountedPrice: "$20.99",
    },
    {
      id: 6,
      name: "Green Apple",
      imageUrl: Image6,
      price: "$14.99",
      discountedPrice: "$20.99",
    },
    {
      id: 7,
      name: "Green Apple",
      imageUrl: Image6,
      price: "$14.99",
      discountedPrice: "$20.99",
    },
    {
      id: 8,
      name: "Green Apple",
      imageUrl: Image6,
      price: "$14.99",
      discountedPrice: "$20.99",
    },
    // Add more products here
  ];

  return (
    <div className="container mx-auto " style={{backgroundColor:'white'}}>
     
     <div className="justify-between items-stretch flex w-4/5   max-md:max-w-full max-md:flex-wrap">
          <div className="text-black text-3xl font-semibold leading-10 grow shrink basis-auto">
            Popular Products
          </div>
          <div className="justify-center items-stretch  flex gap-3 rounded-[43px] self-start">
            <div className="text-orange-500 text-base font-medium leading-6">
              <Button className="text-orange-500 text-base font-medium leading-6" variant="text">View All</Button>
            </div>
            <img
              loading="lazy"
              src={Group}
              className="aspect-[1.25] object-contain object-center w-[15px] overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
          </div>
        </div>
      <div className="flex flex-wrap items-center justify-around">
        {products.map((product) => (
          <div key={product.id}  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"   >
            <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] mr-10 ml-10 bg-white flex-grow flex flex-col items-stretch py-1 border-solid relative">
              <div>
                <img
                  loading="lazy"
                  src={product.imageUrl}
                  alt={product.name}
                  className="object-cover border-none object-center w-full h-48 md:h-64 lg:h-48 xl:h-56 overflow-hidden transition-transform transform hover:scale-105"
                />
              </div>
              <div className="justify-center flex flex-col mt-1.5 p-3 items-start">
                <div className="text-neutral-600 text-sm leading-5 self-stretch whitespace-nowrap">
                  {product.name}
                </div>
                <div className="absolute top-2 right-2">
                  <button className="text-gray-600 hover:text-black focus:outline-none">
                    <BsHandbag className="size-6" />
                  </button>
                </div>
                <div className="absolute top-8 right-2">
                  <button className="text-gray-600 hover:text-black focus:outline-none">
                    <CgEye className="size-6" />
                  </button>
                </div>
                <div className="items-stretch self-stretch flex justify-between gap-0.5">
                  <div className="text-black text-base font-medium leading-6">
                    {product.price}
                  </div>
                  <div className="text-red-600 text-base leading-6">{product.discountedPrice}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotDeals;
