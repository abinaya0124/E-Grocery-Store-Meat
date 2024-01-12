import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { Button } from '@material-tailwind/react';
import image1 from "../images/image 1 (1).png";
import image2 from "../images/image 1 (2).png";
import image3 from "../images/image 1 (3).png";
import image4 from "../images/image 1 (4).png";
import image5 from "../images/image 1 (5).png";
import image6 from "../images/image 1 (6).png";
import image7 from "../images/image 1 (7).png";
import image8 from "../images/image 1 (8).png";
import Group from "../images/Group.svg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];

function ListOfItems() {
  const [theme ] = useThemeHook();

  return (
    <div style={{ backgroundColor: theme?'black':'white' }}>
      <div className="flex flex-col items-stretch ml-9 mr-9" style={{ backgroundColor: 'white' }}>
        <div className="justify-between items-stretch flex w-4/5 px-5 max-md:max-w-full max-md:flex-wrap">
          <div className="text-black text-3xl font-semibold ml-20 leading-10 grow shrink basis-auto">
            Popular Products
          </div>
          <div className="justify-center items-stretch flex gap-3 rounded-[43px] self-start">
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
        <div className="flex items-stretch justify-between flex-wrap mt-8 px-5 mt-10 max-md:max-w-full">
          {images.map((image, index) => (
            <div key={index} className="w-[calc(20% - 1rem)] mb-4">
              <div className="justify-center items-center border mr-4 ml-4 border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex grow basis-[0%] flex-col py-5 rounded-md border-solid">
                <img
                  loading="lazy"
                  src={image}
                  className="aspect-[1.54] object-contain object-center w-full h-48 overflow-hidden"
                />
                <div className="text-black text-center text-lg font-medium leading-7 self-stretch whitespace-nowrap mt-4">
                  Product {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListOfItems;
