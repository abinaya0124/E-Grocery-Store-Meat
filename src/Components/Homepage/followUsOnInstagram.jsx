import Instagram from "../images/instagram/Instagram Post.png";
import Instagram1 from "../images/instagram/Instagram Post (1).png";
import Instagram2 from "../images/instagram/Instagram Post (2).png";
import Instagram3 from "../images/instagram/Instagram Post (3).png";
import Instagram4 from "../images/instagram/Instagram Post (4).png";
import Instagram5 from "../images/instagram/Instagram Post (5).png";

const FollowUsOnInstagram = () => {
  const images = [Instagram, Instagram1, Instagram2, Instagram3, Instagram4, Instagram5];

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-4 md:mb-6">Follow Us On Instagram</h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 py-4 md:py-6 px-4 md:px-11 lg:px-20 xl:px-32 overflow-x-auto">
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 mb-3 md:mb-0">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full md:w-36 h-auto rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowUsOnInstagram;
