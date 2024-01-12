import  {useState,useContext, useEffect} from "react"
import {ThemeContext} from "../GlobalComponents/ThemeProvider"
function Banner() {
  const { theme, setThemeMode } = useContext(ThemeContext); 
  const [darkMode, setDarkMode] = useState(theme);
        useEffect(()=>{
          setThemeMode(darkMode);
          console.log(darkMode)
      },[darkMode]);
	const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
          // Subtracting 10 seconds from the current time
          const newTime = new Date(currentTime.getTime() - 10000);
          setCurrentTime(newTime);
        }, 1000); 
        return () => clearInterval(intervalId);
  }, [currentTime]);
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  // Add leading zero if the value is less than 10
  const formatTime = (value) => (value < 10 ? `0${value}` : value);
  return (
    <div>
      <div style={{backgroundColor:darkMode?'black':'white'}}  className="gap-5 flex max-md:flex-col ml-9 mr-9 max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col justify-center items-stretch max-md:max-w-full max-md:mt-6">
            <div className="flex-col overflow-hidden relative flex min-h-[536px] w-full px-10 py-11 max-md:max-w-full max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/58e2249213360a66c333fd59371f3e52a916d45c526a61dd23c7c2a6f1977e5c?apiKey=f50fc97234d04439b8978904637e7b9c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/58e2249213360a66c333fd59371f3e52a916d45c526a61dd23c7c2a6f1977e5c?apiKey=f50fc97234d04439b8978904637e7b9c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/58e2249213360a66c333fd59371f3e52a916d45c526a61dd23c7c2a6f1977e5c?apiKey=f50fc97234d04439b8978904637e7b9c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/58e2249213360a66c333fd59371f3e52a916d45c526a61dd23c7c2a6f1977e5c?apiKey=f50fc97234d04439b8978904637e7b9c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/58e2249213360a66c333fd59371f3e52a916d45c526a61dd23c7c2a6f1977e5c?apiKey=f50fc97234d04439b8978904637e7b9c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/58e2249213360a66c333fd59371f3e52a916d45c526a61dd23c7c2a6f1977e5c?apiKey=f50fc97234d04439b8978904637e7b9c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/58e2249213360a66c333fd59371f3e52a916d45c526a61dd23c7c2a6f1977e5c?apiKey=f50fc97234d04439b8978904637e7b9c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/58e2249213360a66c333fd59371f3e52a916d45c526a61dd23c7c2a6f1977e5c?apiKey=f50fc97234d04439b8978904637e7b9c&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative text-white text-center text-sm font-medium leading-4 tracking-wide uppercase self-center">
                Best Deals
              </div>
              <div className="relative text-white text-center text-4xl font-semibold leading-10 self-stretch mt-6">
                Sale of the Month
              </div>
              <div className="relative self-center flex gap-2 mt-5 items-start">
                <div className="items-stretch self-stretch flex grow basis-[0%] flex-col rounded-md">
                  <div className="text-white text-center text-2xl leading-9 whitespace-nowrap">
                    00
                  </div>
                  <div className="text-white text-opacity-80 text-center text-xs leading-3 tracking-wide uppercase whitespace-nowrap mt-1">
                    Days
                  </div>
                </div>
                <div className="text-white text-opacity-60 text-center text-2xl leading-9">
                  :
                </div>
                <div className="items-stretch self-stretch flex grow basis-[0%] flex-col rounded-md">
                  <div className="text-white text-center text-2xl leading-9 whitespace-nowrap">
                    {formatTime(hours)}
                  </div>
                  <div className="text-white text-opacity-80 text-center text-xs leading-3 tracking-wide uppercase whitespace-nowrap mt-1">
                    Hours
                  </div>
                </div>
                <div className="text-white text-opacity-60 text-center text-2xl leading-9">
                  :
                </div>
                <div className="items-stretch self-stretch flex grow basis-[0%] flex-col rounded-md">
                  <div className="text-white text-center text-2xl leading-9 whitespace-nowrap">
                    {formatTime(minutes)}
                  </div>
                  <div className="text-white text-opacity-80 text-center text-xs leading-3 tracking-wide uppercase whitespace-nowrap mt-1">
                    Mins
                  </div>
                </div>
                <div className="text-white text-opacity-60 text-center text-2xl leading-9">
                  :
                </div>
                <div className="items-stretch self-stretch flex grow basis-[0%] flex-col rounded-md">
                  <div className="text-white text-center text-2xl leading-9 whitespace-nowrap">
                   {formatTime(seconds)}
                  </div>
                  <div className="text-white text-opacity-80 text-center text-xs leading-3 tracking-wide uppercase whitespace-nowrap mt-1">
                    Secs
                  </div>
                </div>
              </div>
              <div className="relative justify-center items-stretch bg-white self-center flex gap-3 mt-6 mb-48 px-8 py-3.5 rounded-[43px] max-md:mb-10 max-md:px-5">
                <div className="text-orange-500 text-justify text-sm font-semibold leading-4">
                  Shop Now
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/df48923a7001f9815c9ab568c84569beade5105e514452f6556790ad6c6d22d8?apiKey=f50fc97234d04439b8978904637e7b9c&"
                  className="aspect-[1.15] object-contain object-center w-[15px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col justify-center items-stretch max-md:max-w-full max-md:mt-6">
            <div className="flex-col overflow-hidden relative flex min-h-[536px] w-full px-20 py-11 max-md:max-w-full max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2ea0a7637f769b7cfd2a1c8a4bfc779aab5d2213f7d61780ac4e0c3784562d00?apiKey=f50fc97234d04439b8978904637e7b9c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ea0a7637f769b7cfd2a1c8a4bfc779aab5d2213f7d61780ac4e0c3784562d00?apiKey=f50fc97234d04439b8978904637e7b9c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ea0a7637f769b7cfd2a1c8a4bfc779aab5d2213f7d61780ac4e0c3784562d00?apiKey=f50fc97234d04439b8978904637e7b9c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ea0a7637f769b7cfd2a1c8a4bfc779aab5d2213f7d61780ac4e0c3784562d00?apiKey=f50fc97234d04439b8978904637e7b9c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ea0a7637f769b7cfd2a1c8a4bfc779aab5d2213f7d61780ac4e0c3784562d00?apiKey=f50fc97234d04439b8978904637e7b9c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ea0a7637f769b7cfd2a1c8a4bfc779aab5d2213f7d61780ac4e0c3784562d00?apiKey=f50fc97234d04439b8978904637e7b9c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ea0a7637f769b7cfd2a1c8a4bfc779aab5d2213f7d61780ac4e0c3784562d00?apiKey=f50fc97234d04439b8978904637e7b9c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ea0a7637f769b7cfd2a1c8a4bfc779aab5d2213f7d61780ac4e0c3784562d00?apiKey=f50fc97234d04439b8978904637e7b9c&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative text-white text-center text-sm font-medium leading-4 tracking-wide uppercase self-center">
                85% Fat Free
              </div>
              <div className="relative text-white text-center text-4xl font-semibold leading-10 self-stretch mt-7">
                Low-Fat Meat
              </div>
              <div className="relative self-center flex gap-2 mt-6 items-start">
                <div className="text-white text-center text-lg leading-7 grow whitespace-nowrap">
                  Started at
                </div>
                <div className="text-orange-500 text-center text-xl font-semibold leading-8 self-stretch grow whitespace-nowrap">
                  $79.99
                </div>
              </div>
              <div className="relative justify-center items-stretch bg-white self-center flex gap-3 mt-7 mb-48 px-8 py-3.5 rounded-[43px] max-md:mb-10 max-md:px-5">
                <div className="text-orange-500 text-justify text-sm font-semibold leading-4">
                  Shop Now
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/df48923a7001f9815c9ab568c84569beade5105e514452f6556790ad6c6d22d8?apiKey=f50fc97234d04439b8978904637e7b9c&"
                  className="aspect-[1.15] object-contain object-center w-[15px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col justify-center items-stretch max-md:max-w-full max-md:mt-6">
            <div className="flex-col overflow-hidden relative flex min-h-[536px] w-full px-14 py-11 max-md:max-w-full max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/216d87f31232560903eea37290c560778307015c021f90e0458fb68907171ba3?apiKey=f50fc97234d04439b8978904637e7b9c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/216d87f31232560903eea37290c560778307015c021f90e0458fb68907171ba3?apiKey=f50fc97234d04439b8978904637e7b9c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/216d87f31232560903eea37290c560778307015c021f90e0458fb68907171ba3?apiKey=f50fc97234d04439b8978904637e7b9c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/216d87f31232560903eea37290c560778307015c021f90e0458fb68907171ba3?apiKey=f50fc97234d04439b8978904637e7b9c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/216d87f31232560903eea37290c560778307015c021f90e0458fb68907171ba3?apiKey=f50fc97234d04439b8978904637e7b9c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/216d87f31232560903eea37290c560778307015c021f90e0458fb68907171ba3?apiKey=f50fc97234d04439b8978904637e7b9c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/216d87f31232560903eea37290c560778307015c021f90e0458fb68907171ba3?apiKey=f50fc97234d04439b8978904637e7b9c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/216d87f31232560903eea37290c560778307015c021f90e0458fb68907171ba3?apiKey=f50fc97234d04439b8978904637e7b9c&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative text-black text-center text-sm font-medium leading-4 tracking-wide uppercase self-center">
                Summer Sale
              </div>
              <div className="relative text-black text-center text-4xl font-semibold leading-10 self-stretch mt-6">
                100% Fresh Fruit
              </div>
              <div className="relative items-center self-center flex gap-3 mt-5">
                <div className="text-black text-center text-lg leading-7 grow whitespace-nowrap my-auto">
                  Up to
                </div>
                <div className="text-yellow-400 text-center text-lg font-semibold leading-7 whitespace-nowrap items-stretch bg-black self-stretch grow justify-center px-3 py-1.5 rounded-md">
                  64% OFF
                </div>
              </div>
              <div className="relative justify-center items-stretch bg-white self-center flex gap-3 mt-6 mb-48 px-8 py-3.5 rounded-[43px] max-md:mb-10 max-md:px-5">
                <div className="text-orange-500 text-justify text-sm font-semibold leading-4">
                  Shop Now
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b98f9aa17a7e79cc67db3c1f7a239ee6e53667fdfb42d77ecfd46bd82f7f2be?apiKey=f50fc97234d04439b8978904637e7b9c&"
                  className="aspect-[1.15] object-contain object-center w-[15px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Banner;