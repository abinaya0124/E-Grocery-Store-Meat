import React from 'react';


const ProductList = () => {
  return (
    <div className="border flex flex-col py-5 rounded-lg border-solid border-neutral-200">
    <div className="self-center flex w-full max-w-[977px] items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
      <div className="text-neutral-200 text-sm font-medium leading-4 tracking-wide uppercase">
        Product
      </div>
      <div className="flex items-stretch justify-between mr-24 gap-5 max-md:max-w-full max-md:flex-wrap">
        <div className="text-neutral-200 text-sm font-medium leading-4  mr-72 tracking-wide uppercase">
          price
        </div>
        <div className="text-neutral-200 text-sm font-medium leading-4 tracking-wide uppercase">
          Stock Status
        </div>
      </div>
    </div>
    <div className="bg-neutral-200 self-stretch min-h-[1px] w-full mt-4 max-md:max-w-full" />
    <div className="self-stretch flex items-stretch justify-between gap-5 mt-3 mx-6 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
      <div className="items-stretch flex justify-between gap-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/146f96b95501f66c7289d39dfc7d9c6fa11071168910ead2a63ceafd21252416?apiKey=f50fc97234d04439b8978904637e7b9c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/146f96b95501f66c7289d39dfc7d9c6fa11071168910ead2a63ceafd21252416?apiKey=f50fc97234d04439b8978904637e7b9c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/146f96b95501f66c7289d39dfc7d9c6fa11071168910ead2a63ceafd21252416?apiKey=f50fc97234d04439b8978904637e7b9c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/146f96b95501f66c7289d39dfc7d9c6fa11071168910ead2a63ceafd21252416?apiKey=f50fc97234d04439b8978904637e7b9c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/146f96b95501f66c7289d39dfc7d9c6fa11071168910ead2a63ceafd21252416?apiKey=f50fc97234d04439b8978904637e7b9c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/146f96b95501f66c7289d39dfc7d9c6fa11071168910ead2a63ceafd21252416?apiKey=f50fc97234d04439b8978904637e7b9c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/146f96b95501f66c7289d39dfc7d9c6fa11071168910ead2a63ceafd21252416?apiKey=f50fc97234d04439b8978904637e7b9c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/146f96b95501f66c7289d39dfc7d9c6fa11071168910ead2a63ceafd21252416?apiKey=f50fc97234d04439b8978904637e7b9c&"
          className="aspect-square object-contain object-center w-[100px] overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-neutral-200 text-base leading-6 self-center grow whitespace-nowrap my-auto">
          Green Capsicum
        </div>
      </div>
      <div className="self-center flex items-stretch justify-between mr-4 gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
        <div className="items-stretch self-center flex gap-0.5 my-auto">
          <div className="text-neutral-200 text-base font-medium leading-2 grow whitespace-nowrap">
            $14.99
          </div>
          <div className="text-red-600 text-base leading-6 grow whitespace-nowrap ml-96">
            $20.99
          </div>
        </div>
        <div className="text-orange-500 text-sm leading-5 whitespace-nowrap justify-center items-stretch rounded bg-neutral-200 self-center aspect-[2.4482758620689653] my-auto px-2 py-1">
          In Stock
        </div>
        <div className="items-stretch flex justify-between gap-5">
          <div className="text-white text-sm font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-orange-500 grow px-8 py-3.5 rounded-[43px] max-md:px-5">
            Add to Cart
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d1dc65d3eb7b10b6d2b9410cf5246350450a567a64b320f063d793624d27f1b?apiKey=f50fc97234d04439b8978904637e7b9c&"
            className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
        </div>
      </div>
    </div>
    <div className="bg-neutral-200 self-stretch w-full shrink-0 h-px mt-3 mx-6 max-md:mr-2.5" />
    <div className="self-stretch flex items-stretch justify-between gap-5 mt-3 mx-6 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
      <div className="items-stretch flex justify-between gap-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2af9c37c072f56b9d6487b0fb66d3fd27bf088e02613444a86f4125057537e03?apiKey=f50fc97234d04439b8978904637e7b9c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2af9c37c072f56b9d6487b0fb66d3fd27bf088e02613444a86f4125057537e03?apiKey=f50fc97234d04439b8978904637e7b9c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2af9c37c072f56b9d6487b0fb66d3fd27bf088e02613444a86f4125057537e03?apiKey=f50fc97234d04439b8978904637e7b9c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2af9c37c072f56b9d6487b0fb66d3fd27bf088e02613444a86f4125057537e03?apiKey=f50fc97234d04439b8978904637e7b9c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2af9c37c072f56b9d6487b0fb66d3fd27bf088e02613444a86f4125057537e03?apiKey=f50fc97234d04439b8978904637e7b9c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2af9c37c072f56b9d6487b0fb66d3fd27bf088e02613444a86f4125057537e03?apiKey=f50fc97234d04439b8978904637e7b9c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2af9c37c072f56b9d6487b0fb66d3fd27bf088e02613444a86f4125057537e03?apiKey=f50fc97234d04439b8978904637e7b9c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2af9c37c072f56b9d6487b0fb66d3fd27bf088e02613444a86f4125057537e03?apiKey=f50fc97234d04439b8978904637e7b9c&"
          className="aspect-square object-contain object-center w-[100px] overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-neutral-200 text-base leading-6 self-center grow whitespace-nowrap my-auto">
          Chinese Cabbage
        </div>
      </div>
      <div className="text-neutral-200 text-base font-medium leading-6 flex mr-3 my-auto">
        $45.00
      </div>
      <div className="self-center flex items-center justify-between gap-5 my-auto">
        <div className="text-orange-500 text-sm leading-5 whitespace-nowrap justify-center items-stretch rounded bg-neutral-200 aspect-[2.4482758620689653] my-auto px-2 py-1">
          In Stock
        </div>
        <div className="items-stretch self-stretch flex justify-between gap-5">
          <div className="text-white text-sm font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-orange-500 grow px-8 py-3.5 rounded-[43px] max-md:px-5">
            Add to Cart
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/82e3d088ea93e351bcbb17551986ed7ba5ed96e050beba2189efd9162cde3d99?apiKey=f50fc97234d04439b8978904637e7b9c&"
            className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
        </div>
      </div>
    </div>
    <div className="bg-neutral-200 self-stretch w-full shrink-0 h-px mt-3 mx-6 max-md:mr-2.5" />
    <div className="self-stretch flex items-stretch justify-between gap-5 mt-3 mx-6 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
      <div className="max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[89%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow justify-between gap-5 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/16bcb88a85e505c475df094ecd6f918dc95cd52bca7cf81ab9cf5ac034d24025?apiKey=f50fc97234d04439b8978904637e7b9c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/16bcb88a85e505c475df094ecd6f918dc95cd52bca7cf81ab9cf5ac034d24025?apiKey=f50fc97234d04439b8978904637e7b9c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/16bcb88a85e505c475df094ecd6f918dc95cd52bca7cf81ab9cf5ac034d24025?apiKey=f50fc97234d04439b8978904637e7b9c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/16bcb88a85e505c475df094ecd6f918dc95cd52bca7cf81ab9cf5ac034d24025?apiKey=f50fc97234d04439b8978904637e7b9c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/16bcb88a85e505c475df094ecd6f918dc95cd52bca7cf81ab9cf5ac034d24025?apiKey=f50fc97234d04439b8978904637e7b9c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/16bcb88a85e505c475df094ecd6f918dc95cd52bca7cf81ab9cf5ac034d24025?apiKey=f50fc97234d04439b8978904637e7b9c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/16bcb88a85e505c475df094ecd6f918dc95cd52bca7cf81ab9cf5ac034d24025?apiKey=f50fc97234d04439b8978904637e7b9c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/16bcb88a85e505c475df094ecd6f918dc95cd52bca7cf81ab9cf5ac034d24025?apiKey=f50fc97234d04439b8978904637e7b9c&"
                className="aspect-square object-contain object-center w-[100px] overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-neutral-200 text-base leading-6 self-center grow whitespace-nowrap my-auto">
                Fresh Sujapuri Mango
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[11%] ml-96 max-md:w-full max-md:ml-0">
            <div className="text-neutral-200 text-base font-medium leading-6 ml-[13px] whitespace-nowrap  my-auto max-md:mt-10">
              $09.00
            </div>
          </div>
        </div>
      </div>
      <div className="self-center flex items-center justify-between gap-5 my-auto">
        <div className="text-neutral-100 text-sm leading-5 whitespace-nowrap justify-center items-stretch rounded bg-orange-500 my-auto px-2 py-1">
          Out of Stock
        </div>
        <div className="items-stretch self-stretch flex justify-between gap-5">
          <div className="text-zinc-400 text-sm font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-zinc-100 grow px-8 py-3.5 rounded-[43px] max-md:px-5">
            Add to Cart
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c04e4fe0f054ff0228ec6348a6d616efda07939686e1768477bef804eb2ff4c1?apiKey=f50fc97234d04439b8978904637e7b9c&"
            className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
        </div>
      </div>
    </div>
    <div className="bg-neutral-200 self-stretch min-h-[1px] w-full mt-3 max-md:max-w-full" />
    <div className="flex gap-2.5 ml-6 mt-3 pt-3 self-start items-start max-md:ml-2.5">
      <div className="text-neutral-200 text-sm leading-5 grow whitespace-nowrap mt-2.5">
        Share:
      </div>
      <div className="items-stretch self-stretch flex gap-1.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a424aeef86792959a3ce64257bff30265b950d8d93eafdd56de38bb04183fb0?apiKey=f50fc97234d04439b8978904637e7b9c&"
          className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d69d4d2bf3a23488c1a67bd02b5a08a64f4abd42500f271d98e6a2d935951f3?apiKey=f50fc97234d04439b8978904637e7b9c&"
          className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d279c5a1a2a681196a05cca7dd911b656d4490d998b026bc17d4c53575b0e131?apiKey=f50fc97234d04439b8978904637e7b9c&"
          className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/12b4df2a66a3242fe48c18b919c01808b29483a386c34e1ea615ddead38a9f6b?apiKey=f50fc97234d04439b8978904637e7b9c&"
          className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
        />
      </div>
    </div>
  </div>
  );
};

export default ProductList;
