import { IoIosStar } from "react-icons/io";

const Rating = ({ ratings }) => {
  return (
    <div>
      <div className="flex">
        {/* {Array(ratings)
          .fill()
          .map((_, index) => (
            <IoIosStar
              key={index}
              className={
                ratings ? "text-[#FF6316] text-lg" : "text-[#808080] text-lg"
              }
            />
          ))} */}
        {Array.from({ length: 5 }).map((_, index) => (
          <IoIosStar
            key={index}
            className={
              index < ratings
                ? "text-[#FF6316] text-sm"
                : "text-[#CCCCCC] text-sm"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Rating;
