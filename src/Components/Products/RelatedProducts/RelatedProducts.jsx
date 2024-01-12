import { useState } from "react";
import AddToCart from "../Images/AddToCart.png";
import AddTowishlist from "../Images/AddTowishlist.png";
import QuickView from "../Images/QuickView.png";
import { SlHandbag } from "react-icons/sl";
import Rating from "./Rating";
import { useThemeHook } from "../../GlobalComponents/ThemeProvider";

const RelatedProducts = () => {
  const [theme] = useThemeHook();
  const items = [
    {
      img: "https://img.freepik.com/free-photo/side-view-fresh-raw-fishes-brown-wooden-cutting-board-dark-mix-colors-table-with-free-space_179666-18208.jpg",
      title: "Fish",
      price: "$14.99",
      ratings: 5,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhO8BDH1DfedL84sZ7dnsCtbn1BUiKeLGsDQ&usqp=CAU",
      title: "Meat",
      price: "$14.99",
      ratings: 3,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7AjiPHcZ8jh880tznAvaLjjqpxrHO7oIBg&usqp=CAU",
      title: "Prawn",
      price: "$14.99",
      ratings: 2,
    },
    {
      img: "data:image/jpeg;base64,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",
      title: "Chicken",
      price: "$14.99",
      ratings: 1,
    },
  ];
  const [data, setData] = useState(items);

  return (
    <div className="pt-5 md:mt-16">
      <h3
        className="flex justify-center font-semibold text-3xl mb-10"
        style={{ color: theme ? "#fff" : "#000000" }}
      >
        Related Products
      </h3>
      <div className="flex justify-center  ">
        <div className="flex justify-between gap-3 flex-wrap ml-3 md:ml-0">
          {data.map((item, id) => (
            <div
              key={id}
              className="items-center border-2 rounded-lg group hover:border-orange-500 hover:rounded-lg relative"
            >
              <div className=" items-center flex justify-center">
                <img
                  src={item.img}
                  className="items-center flex justify-center"
                />
              </div>

              <div className="flex justify-between items-center pb-3">
                <div className="ml-[7%] mt-[6%]">
                  <p
                    className="text-sm group-hover:text-[#FF6316] pb-2"
                    style={{ color: theme ? "#fff" : "#808080" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="font-medium text-xl pb-2"
                    style={{ color: theme ? "#fff" : "#808080" }}
                  >
                    {item.price}
                  </p>
                  <Rating ratings={item.ratings} />
                </div>
                <div className="bg-[#F2F2F2] group-hover:bg-[#FF6316] group-hover:text-[#fff] flex justify-center items-center rounded-full p-3 mr-[5%]">
                  <SlHandbag className="text-lg" />
                </div>
              </div>

              <div className="absolute top-2 right-0 group-hover:visible invisible">
                <img src={AddTowishlist} className="pb-2" />
                <img src={QuickView} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
