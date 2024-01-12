import { IoMdCheckmark } from "react-icons/io";
import Video from "../../Images/Video.png";
import leaf from "../../Images/leaf.png";
import discount from "../../Images/discount.png";
import { useThemeHook } from "../../../GlobalComponents/ThemeProvider";

const Descriptions = () => {
  const [theme] = useThemeHook();
  return (
    <div className="items-center md:flex justify-center mt-2">
      <div className="items-center justify-center ">
        <p
          className="ml-[5%] text-sm mt-10 text-justify items-center md:ml-[35%] md:w-[75%] w-[90%] "
          style={{ color: theme ? "#fff" : "#808080" }}
        >
          Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
          posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
          vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi
          porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin.
          Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed
          et condimentum arcu, id molestie tellus. Nulla facilisi. Nam
          scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis
          commodo quis, egestas elementum leo. Donec convallis mollis enim.
          Aliquam id mi quam. Phasellus nec fringilla elit.
          <br />
          <br />
          Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed
          iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit,
          pellentesque tristique neque mi eget nulla. Proin luctus elementum
          neque et pharetra.
        </p>
        <ul
          className="ml-[5%] md:ml-[35%] mt-5 text-sm "
          style={{ color: theme ? "#fff" : "#808080" }}
        >
          <li className="flex pb-3">
            <span>
              <IoMdCheckmark className="bg-[#FF6316] rounded-full px-1 py-1 text-[#fff] text-2xl mr-3" />
            </span>
            <p>100 g of fresh meat provides.</p>
          </li>
          <li className="flex pb-2">
            <span>
              <IoMdCheckmark className="bg-[#FF6316] rounded-full px-1 py-1 text-[#fff] text-2xl mr-3 mt-1" />
            </span>
            <p>Aliquam ac est at augue volutpat elementum.</p>
          </li>
          <li className="flex pb-2">
            <span>
              <IoMdCheckmark className="bg-[#FF6316] rounded-full px-1 py-1 text-[#fff] text-2xl mr-3" />
            </span>
            <p>Quisque nec enim eget sapien molestie.</p>
          </li>
          <li className="flex pb-2">
            <span>
              <IoMdCheckmark className="bg-[#FF6316] rounded-full px-1 py-1 text-[#fff] text-2xl mr-3  mt-1" />
            </span>
            <p>Proin convallis odio volutpat finibus posuere.</p>
          </li>
        </ul>
        <p
          className="ml-[5%] md:ml-[35%] text-sm mt-3 "
          style={{ color: theme ? "#fff" : "#808080" }}
        >
          Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla
          blandit eros non turpis lobortis iaculis at ut massa.
        </p>
      </div>
      <div className="md:ml-[10%] ml-[9%] mt-5 md:mr-[15%] md:w-[90%] md:-mt-10">
        <img src={Video} className="w-[90%] md:w-[100%]" />
        <div className="md:flex md:mt-12 mt-5 gap-5 border-2 p-3  w-[90%] md:w-[100%]">
          <div
            className="flex  items-center gap-5 pr-8 "
            style={{ color: theme ? "#fff" : "#000000" }}
          >
            <img src={discount} />
            <div>
              <p className="text-sm font-semibold">64% Discount</p>
              <p className="text-xs whitespace-nowrap">
                Save your 64% money with us
              </p>
            </div>
          </div>
          <div
            className="flex  items-center gap-5 pr-8 "
            style={{ color: theme ? "#fff" : "#000000" }}
          >
            <img src={leaf} />
            <div>
              <p className="text-sm font-semibold">100% Organic</p>
              <p className="text-xs whitespace-nowrap">100% Organic meat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descriptions;
