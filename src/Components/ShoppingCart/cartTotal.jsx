function CartTotal() {
  return (
    <div
      style={{
        position: "absolute",
        top: "36%",
        right: "100px",
        transform: "translateY(-50%)",
        zIndex: "9999",
      }}
    >
      <div className="border bg-gray-800 flex max-w-[424px] flex-col items-stretch  px-6 py-7 rounded-lg border-solid border-neutral-600">
        <div className="text-white text-xl font-medium leading-8">
          Cart Total
        </div>
        <div className="justify-between items-stretch shadow-sm bg-gray-800 flex gap-5 mt-4 py-3">
          <div className="text-zinc-400 text-sm leading-5">Subtotal:</div>
          <div className="text-white text-sm font-medium leading-5">$84.00</div>
        </div>
        <div className="justify-between items-stretch shadow-sm bg-gray-800 flex gap-5 py-3">
          <div className="text-zinc-400 text-sm leading-5">Shipping:</div>
          <div className="text-white text-sm font-medium leading-5">Free</div>
        </div>
        <div className="justify-between items-stretch bg-gray-800 flex gap-5 py-3">
          <div className="text-zinc-400 text-base leading-6">Total:</div>
          <div className="text-white text-base font-semibold leading-5 self-center my-auto">
            $84.00
          </div>
        </div>
        <div className="text-white text-base font-semibold leading-5 whitespace-nowrap justify-center items-center bg-orange-500 mt-5 px-16 py-4 rounded-[43px]">
          Proceed to checkout
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
