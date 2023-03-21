const BasketPrice = () => {
    return ( 
        <div className="w-full h-16 items-center flex">
        <div className="w-1/2 flex flex-col item-center justify-between">
            <h1 className="text-[#757575] font-medium text-xs">Total Price</h1>
            <h1 className=" text-[#001833] font-semibold text-[22px]">$3.00</h1>
        </div>    
            <div>
                <button className="bg-[#324A59] text-white font-bold  rounded-full w-40 h-14">Pay now</button>
            </div>
        </div>
     );
}
 
export default BasketPrice;