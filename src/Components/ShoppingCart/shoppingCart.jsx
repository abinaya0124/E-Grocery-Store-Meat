function ShoopingCart() {
  return (
    <div className="border bg-gray-800 flex max-w-[920px] flex-col py-4 rounded-lg border-solid border-neutral-600 md:ml-28">
      <div className="self-center flex w-full max-w-[755px] items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
        <div className="text-white text-sm font-medium leading-4 tracking-wide uppercase self-start">
          Product
        </div>
        <div className="flex justify-between gap-5 items-start">
          <div className="text-white text-sm font-medium leading-4 tracking-wide uppercase">
            price
          </div>
          <div className="text-white text-sm font-medium leading-4 tracking-wide uppercase">
            Quantity
          </div>
        </div>
        <div className="text-white text-sm font-medium leading-4 tracking-wide uppercase self-start">
          Subtotal
        </div>
      </div>
      <div className="bg-neutral-600 self-stretch min-h-[1px] w-full mt-4 max-md:max-w-full" />
      <div className="self-stretch mt-3 mx-5 rounded-xl max-md:max-w-full max-md:mr-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-2/5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow justify-between gap-3 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/146f96b95501f66c7289d39dfc7d9c6fa11071168910ead2a63ceafd21252416?apiKey=f50fc97234d04439b8978904637e7b9c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/146f96b95501f66c7289d39dfc7d9c6fa11071168910ead2a63ceafd21252416?apiKey=f50fc97234d04439b8978904637e7b9c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/146f96b95501f66c7289d39dfc7d9c6fa11071168910ead2a63ceafd21252416?apiKey=f50fc97234d04439b8978904637e7b9c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/146f96b95501f66c7289d39dfc7d9c6fa11071168910ead2a63ceafd21252416?apiKey=f50fc97234d04439b8978904637e7b9c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/146f96b95501f66c7289d39dfc7d9c6fa11071168910ead2a63ceafd21252416?apiKey=f50fc97234d04439b8978904637e7b9c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/146f96b95501f66c7289d39dfc7d9c6fa11071168910ead2a63ceafd21252416?apiKey=f50fc97234d04439b8978904637e7b9c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/146f96b95501f66c7289d39dfc7d9c6fa11071168910ead2a63ceafd21252416?apiKey=f50fc97234d04439b8978904637e7b9c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/146f96b95501f66c7289d39dfc7d9c6fa11071168910ead2a63ceafd21252416?apiKey=f50fc97234d04439b8978904637e7b9c&"
                className="aspect-square object-contain object-center w-[100px] overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-base leading-6 self-center grow whitespace-nowrap my-auto">
                Green Capsicum
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/5 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex w-full items-start justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap max-md:mt-10">
              <div className="text-white text-base leading-6 self-center my-auto">
                $14.00
              </div>
              <div className="justify-center items-center border bg-gray-800 self-stretch flex gap-0 p-2 rounded-[170px] border-solid border-neutral-600">
                <div className="bg-zinc-800 self-stretch flex w-[34px] shrink-0 h-[34px] flex-col rounded-[170px]" />
                <div className="text-white text-center text-base leading-6 my-auto">
                  5
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa4480a2ff73316db2c7aac0327ac625bb01f261f638e206f51418fb3f40bede?apiKey=f50fc97234d04439b8978904637e7b9c&"
                  className="aspect-square object-contain object-center w-[34px] overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </div>
              <div className="text-white text-base font-medium leading-6 self-center my-auto">
                $70.00
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e41b662fe095e0c1ed037d17ef7419ed2276a574db6009f83d4510571a101c4?apiKey=f50fc97234d04439b8978904637e7b9c&"
                className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-600 self-stretch w-full shrink-0 h-px mt-3 mx-5 max-md:mr-2.5" />
      <div className="self-stretch mt-3 mx-5 rounded-xl max-md:max-w-full max-md:mr-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-2/5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow justify-between gap-3 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b3eff13907bffde34a532fd0ad92a6d71a500302a86be2138a9e7da420434c7f?apiKey=f50fc97234d04439b8978904637e7b9c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3eff13907bffde34a532fd0ad92a6d71a500302a86be2138a9e7da420434c7f?apiKey=f50fc97234d04439b8978904637e7b9c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3eff13907bffde34a532fd0ad92a6d71a500302a86be2138a9e7da420434c7f?apiKey=f50fc97234d04439b8978904637e7b9c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3eff13907bffde34a532fd0ad92a6d71a500302a86be2138a9e7da420434c7f?apiKey=f50fc97234d04439b8978904637e7b9c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3eff13907bffde34a532fd0ad92a6d71a500302a86be2138a9e7da420434c7f?apiKey=f50fc97234d04439b8978904637e7b9c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3eff13907bffde34a532fd0ad92a6d71a500302a86be2138a9e7da420434c7f?apiKey=f50fc97234d04439b8978904637e7b9c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3eff13907bffde34a532fd0ad92a6d71a500302a86be2138a9e7da420434c7f?apiKey=f50fc97234d04439b8978904637e7b9c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3eff13907bffde34a532fd0ad92a6d71a500302a86be2138a9e7da420434c7f?apiKey=f50fc97234d04439b8978904637e7b9c&"
                className="aspect-square object-contain object-center w-[100px] overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-base leading-6 self-center grow whitespace-nowrap my-auto">
                Red Capsicum
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/5 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex w-full items-start justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap max-md:mt-10">
              <div className="text-white text-base leading-6 self-center my-auto">
                $14.00
              </div>
              <div className="justify-center items-center border bg-gray-800 self-stretch flex gap-0 p-2 rounded-[170px] border-solid border-neutral-600">
                <div className="bg-zinc-800 self-stretch flex w-[34px] shrink-0 h-[34px] flex-col rounded-[170px]" />
                <div className="text-white text-center text-base leading-6 my-auto">
                  5
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa4480a2ff73316db2c7aac0327ac625bb01f261f638e206f51418fb3f40bede?apiKey=f50fc97234d04439b8978904637e7b9c&"
                  className="aspect-square object-contain object-center w-[34px] overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </div>
              <div className="text-white text-base font-medium leading-6 self-center my-auto">
                $14.00
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e41b662fe095e0c1ed037d17ef7419ed2276a574db6009f83d4510571a101c4?apiKey=f50fc97234d04439b8978904637e7b9c&"
                className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-600 self-stretch min-h-[1px] w-full mt-3 max-md:max-w-full" />
      <div className="justify-between items-stretch self-stretch flex gap-5 mt-4 mx-5 rounded-xl max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
        <div className="text-zinc-400 text-sm font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-zinc-800 px-8 py-3.5 rounded-[43px] max-md:px-5">
          Return to shop
        </div>
        <div className="text-zinc-400 text-sm font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-zinc-800 px-8 py-3.5 rounded-[43px] max-md:px-5">
          Update Cart
        </div>
      </div>
    </div>
  );
}

export default ShoopingCart;
