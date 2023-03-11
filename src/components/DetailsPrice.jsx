const DetailsPrice = () => {
    return ( 
        <div className="space-y-8">
        <div className="w-full flex item-center justify-between">
            <h1 className="text-[#001833] font-[500] text-[16px] text-left ml-9 ">Total Amount</h1>
            <h1 className=" text-[#001833] font-[600] text-[16px] text-right mr-8 ">$3.00</h1>
        </div>    
            <div>
                <button className="bg-[#324A59] text-white font-bold  rounded-full w-[330px] h-[46px]">Checkout</button>
            </div>
        </div>
     );
}
 
export default DetailsPrice;