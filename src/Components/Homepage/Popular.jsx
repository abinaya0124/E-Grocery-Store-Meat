import Image from "../images/product1/Image.png";
import Image2 from "../images/product2/Image.png";
import Image6 from "../images/product6/Image (3).png";
import Image10 from "../images/product10/Image.png";
import Group from "../images/banner/Group (1).svg";
import Eye from "../images/product10/Eye 1.svg";
import Heart from "../images/product10/Heart.svg";

const products = [
  {
    id: 1,
    name: "Green Apple",
    price: 14.99,
    discountedPrice: 20.99,
    imageUrl: Image,
    sale: true,
    discountPercentage: 50,
  },
  {
    id: 2,
    name: "Fresh Indian Malta",
    price: 20.0,
    imageUrl: Image2,
  },
  {
    id: 3,
    name: "Chinese cabbage",
    price: 12.0,
    imageUrl: Image6,
    extraImages: [Eye, Heart],
  },
  {
    id: 4,
    name: "Green Lettuce",
    price: 9.0,
    imageUrl: Image10,
  },
  {
    id: 5,
    name: "Eggplant",
    price: 34.0,
    imageUrl: Image10,
  },
];



const HotDeals = () => {
	return (
	  <div className="flex flex-col items-stretch max-w-full mr-9 ml-9 overflow-x-hidden">
		<div className="justify-between items-stretch flex w-full gap-5 px-5 max-md:max-w-full max-md:flex-wrap">
		  <div className="text-black text-3xl font-semibold leading-10 grow shrink basis-auto">
			Featured Products
		  </div>
		  <div className="justify-center items-stretch self-center flex gap-3 my-auto rounded-[43px]">
			<div className="text-orange-500 text-base font-medium leading-6 cursor-pointer">
			  View All{" "}
			  <img
				loading="lazy"
				src={Group}
				alt="Arrow Icon"
				className="w-4 h-4 inline-block"
			  />
			</div>
		  </div>
		</div>
		<div className="flex items-stretch justify-between gap-4 mt-8 px-5 max-md:max-w-full max-md:flex-wrap">
		  {products.map((product) => (
			<div
			  key={product.id}
			  className="relative border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex grow basis-[0%] flex-col items-stretch py-1 border-solid max-w-[300px] transition-transform transform hover:scale-105"
			>
			  <div className="absolute top-0 right-0 p-2">
				{product.extraImages &&
				  product.extraImages.map((extraImage, index) => (
					<img
					  key={index}
					  loading="lazy"
					  src={extraImage}
					  className="w-6 h-6 mr-1"
					  alt={`Extra Icon ${index + 1}`}
					/>
				  ))}
			  </div>
  
			  <img
				loading="lazy"
				src={product.imageUrl}
				className="aspect-[1.15] object-contain object-center w-full overflow-hidden"
			  />
  
			  {product.sale && (
				<div
				  style={{ backgroundColor: "#FF6316" }}
				  className="absolute top-0 left-0 right-0 w-16 text-white text-xs leading-4 p-1 text-center"
				>
				  Sale {product.discountPercentage}%
				</div>
			  )}
  
			<div className="justify-center flex flex-col mt-1.5 p-3 items-start">
				<div className="text-neutral-600 text-sm leading-5 self-stretch whitespace-nowrap">
					{product.name}
				</div>
				<div className="items-stretch self-stretch flex justify-between gap-0.5">
					<div className="text-black text-base font-medium leading-6">
						${product.price.toFixed(2)}
					</div>
					{product.discountedPrice && (
						<div className="text-red-600 text-base leading-6">
							${product.discountedPrice.toFixed(2)}
						</div>
					)}
				</div>
			</div>
			</div>
		  ))}
		</div>
	</div>
	);
  };
  
  export default HotDeals;
  
