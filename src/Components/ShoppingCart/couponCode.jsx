function Coupon() {
  return (
    <div className="items-center border bg-gray-800 flex justify-between gap-0 p-5 rounded-lg border-solid border-neutral-600 max-md:flex-wrap max-w-[920px] md:ml-28">
      <div className="text-white text-xl font-medium leading-8 whitespace-nowrap my-auto">
        Coupon Code
      </div>
      <div className="text-red-600 text-base leading-6 items-stretch border bg-gray-800 self-stretch grow justify-center px-6 py-3.5 rounded-[46px] border-solid border-neutral-600 max-md:max-w-full max-md:px-5">
        Enter code
      </div>
      <div className="text-white text-base font-semibold leading-5 whitespace-nowrap mt-4 self-start">
        Apply Coupon
      </div>
    </div>
  );
}
export default Coupon;
