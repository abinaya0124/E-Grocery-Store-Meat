// import * as React from "react";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
function MyComponent() {
  const[theme] = useThemeHook()
   return (
    <div style={{ position: 'absolute', top: '46%', right:'140px', transform: 'translateY(-50%)', zIndex: '9999',  }}>

    <div className="items-start border bg-gray-800 flex max-w-[424px] flex-col p-6 rounded-lg border-solid " style={{backgroundColor:theme?'transparent':'#ffffff',}}>
      <div className="text-white text-xl font-medium leading-8 self-stretch" style={{color:theme?'white':'black'}}>
        Order Summery
      </div>
      <div className="justify-between items-stretch self-stretch flex w-full gap-5 mt-3">
        <div className="items-stretch flex gap-1.5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ae5dcc7c4f64eb04e15a165844a17d11ad0a13bfea21ad5563b8b0c65618b218?apiKey=f50fc97234d04439b8978904637e7b9c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae5dcc7c4f64eb04e15a165844a17d11ad0a13bfea21ad5563b8b0c65618b218?apiKey=f50fc97234d04439b8978904637e7b9c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae5dcc7c4f64eb04e15a165844a17d11ad0a13bfea21ad5563b8b0c65618b218?apiKey=f50fc97234d04439b8978904637e7b9c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae5dcc7c4f64eb04e15a165844a17d11ad0a13bfea21ad5563b8b0c65618b218?apiKey=f50fc97234d04439b8978904637e7b9c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae5dcc7c4f64eb04e15a165844a17d11ad0a13bfea21ad5563b8b0c65618b218?apiKey=f50fc97234d04439b8978904637e7b9c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae5dcc7c4f64eb04e15a165844a17d11ad0a13bfea21ad5563b8b0c65618b218?apiKey=f50fc97234d04439b8978904637e7b9c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae5dcc7c4f64eb04e15a165844a17d11ad0a13bfea21ad5563b8b0c65618b218?apiKey=f50fc97234d04439b8978904637e7b9c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae5dcc7c4f64eb04e15a165844a17d11ad0a13bfea21ad5563b8b0c65618b218?apiKey=f50fc97234d04439b8978904637e7b9c&"
            className="aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-white text-sm leading-5 my-auto" style={{color:theme?'white':'black'}}>
            Green Capsicum
          </div>
          <div className="text-white text-sm leading-5 self-center whitespace-nowrap my-auto" style={{color:theme?'white':'black'}}>
            x5
          </div>
        </div>
        <div className="text-white text-sm font-medium leading-5 self-center my-auto" style={{color:theme?'white':'black'}}>
          $70.00
        </div>
      </div>
      <div className="justify-between items-stretch self-stretch flex w-full gap-5">
        <div className="items-stretch flex gap-1.5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cb460c0a18efbeb0ff1e04e0ec7b421376123fdf0170c63a686e1f124cfd78fd?apiKey=f50fc97234d04439b8978904637e7b9c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb460c0a18efbeb0ff1e04e0ec7b421376123fdf0170c63a686e1f124cfd78fd?apiKey=f50fc97234d04439b8978904637e7b9c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb460c0a18efbeb0ff1e04e0ec7b421376123fdf0170c63a686e1f124cfd78fd?apiKey=f50fc97234d04439b8978904637e7b9c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb460c0a18efbeb0ff1e04e0ec7b421376123fdf0170c63a686e1f124cfd78fd?apiKey=f50fc97234d04439b8978904637e7b9c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb460c0a18efbeb0ff1e04e0ec7b421376123fdf0170c63a686e1f124cfd78fd?apiKey=f50fc97234d04439b8978904637e7b9c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb460c0a18efbeb0ff1e04e0ec7b421376123fdf0170c63a686e1f124cfd78fd?apiKey=f50fc97234d04439b8978904637e7b9c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb460c0a18efbeb0ff1e04e0ec7b421376123fdf0170c63a686e1f124cfd78fd?apiKey=f50fc97234d04439b8978904637e7b9c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb460c0a18efbeb0ff1e04e0ec7b421376123fdf0170c63a686e1f124cfd78fd?apiKey=f50fc97234d04439b8978904637e7b9c&"
            className="aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-white text-sm leading-5 my-auto" style={{color:theme?'white':'black'}}>
            Red Capsicum
          </div>
          <div className="text-white text-sm leading-5 self-center whitespace-nowrap my-auto" style={{color:theme?'white':'black'}}>
            x1
          </div>
        </div>
        <div className="text-white text-sm font-medium leading-5 self-center my-auto" style={{color:theme?'white':'black'}}>
          $14.00
        </div>
      </div>
      <div className="justify-between items-stretch bg-gray-800 self-stretch flex gap-5 mt-3 py-3" style={{backgroundColor:theme?'transparent':'#ffffff'}}>
        <div className="text-zinc-400 text-sm leading-5" style={{color:theme?'white':'black'}}>Subtotal:</div>
        <div className="text-white text-sm font-medium leading-5" style={{color:theme?'white':'black'}}>$84.00</div>
      </div>
      <div className="bg-neutral-600 self-stretch shrink-0 h-px" />
      <div className="justify-between items-stretch bg-gray-800 self-stretch flex gap-5 py-3" style={{backgroundColor:theme?'transparent':'#ffffff'}}>
        <div className="text-zinc-400 text-sm leading-5" style={{color:theme?'white':'black'}}>Shipping:</div>
        <div className="text-white text-sm font-medium leading-5" style={{color:theme?'white':'black'}}>Free</div>
      </div>
      <div className="bg-neutral-600 self-stretch shrink-0 h-px" />
      <div className="justify-between items-stretch bg-gray-800 self-stretch flex gap-5 pt-3" style={{backgroundColor:theme?'transparent':'#ffffff'}}>
        <div className="text-zinc-400 text-base leading-6" style={{color:theme?'white':'black'}}>Total:</div>
        <div className="text-white text-lg font-semibold leading-5 self-start">
          $84.00
        </div>
      </div>
      <div className="text-white text-xl font-medium leading-8 self-stretch mt-8" style={{color:theme?'white':'black'}}>
        Payment Method
      </div>
      <div className="flex gap-1.5 mt-5 self-start items-start">
        <div className="flex aspect-square flex-col justify-center items-stretch">
          <div className="bg-gray-800 flex aspect-square flex-col justify-center items-center w-5 h-5 px-1 rounded-[32px] border-[1.5px] border-solid border-orange-500">
            <div className="bg-orange-500 flex shrink-0 h-3 flex-col rounded-[32px]" />
          </div>
        </div>
        <div className="text-zinc-400 text-sm leading-5 self-stretch grow whitespace-nowrap" style={{color:theme?'white':'black'}}>
          Cash on Delivery
        </div>
      </div>
      <div className="flex gap-1.5 mt-2.5 self-start items-start">
        <div className="border bg-gray-800 flex w-5 shrink-0 h-5 flex-col rounded-[32px] border-solid border-zinc-500" />
        <div className="text-zinc-400 text-sm leading-5" style={{color:theme?'white':'black'}}>Google Pay</div>
      </div>
      <div className="flex gap-1.5 mt-2.5 self-start items-start">
        <div className="border bg-gray-800 flex w-5 shrink-0 h-5 flex-col rounded-[32px] border-solid border-zinc-500" />
        <div className="text-white text-sm leading-5" style={{color:theme?'white':'black'}}>Amazon Pay</div>
      </div>
      <div className="text-white text-base font-semibold leading-5 whitespace-nowrap justify-center items-center bg-orange-500 self-stretch mt-6 px-16 py-4 rounded-[43px]">
        Place Order
      </div>
    </div>
    </div>
  );
}

export default MyComponent;
