import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


function SubscribeOurNewsletter() {
  const [email, setEmail] = useState(""); // State to hold the email input value

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    // Handle the submission of the email (you can add your logic here)
    console.log("Email submitted:", email);
  };

  return (
    <div style={{ backgroundColor: '#FF6316' }} className="flex flex-col justify-center items-center px-8 py-6 max-md:px-5 ">
      <div className="flex w-full max-w-[1320px] items-stretch justify-between  max-md:max-w-full max-md:flex-wrap">
        <div className="items-stretch flex-grow flex flex-col px-20 max-md:max-w-full">
          <div className="text-black text-xl font-semibold  leading-7 max-md:max-w-full">
            Subscribe to our Newsletter
          </div>
          <div className="text-black text-sm leading-5 mt-1 max-md:max-w-full">
            Pellentesque eu nibh eget mauris congue <br></br>mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </div>
        </div>
        <div className="flex-grow flex items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={handleInputChange}
            className="w-50 h-10 border-none outline-none bg-black text-white rounded-md px-4"
          />
          <button
            onClick={handleSubmit}
            className="bg-white text-black px-4 py-2 rounded-md"
          >
            Subscribe
          </button>
        </div>
        <div className="items-stretch self-center flex gap-2 my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a51b568bff6eebffbd447500b844b097ae66b41ee0ecd723bb8f818ff52221a?apiKey=f50fc97234d04439b8978904637e7b9c&"
            className="aspect-square object-contain object-center w-8 h-8 overflow-hidden"
          />
          <FaInstagram className="aspect-square object-contain object-center w-8 h-8 overflow-hidden"/>
          <CiLinkedin className="aspect-square object-contain object-center w-8 h-8 overflow-hidden"/>
          <FaGithub className="aspect-square object-contain object-center w-8 h-8 overflow-hidden"/>
          {/* Add more social icons as needed */}
        </div>
      </div>
    </div>
  );
}

export default SubscribeOurNewsletter;
