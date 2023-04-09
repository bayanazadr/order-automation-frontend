const PaymentMethod = (props) => {
    return ( 
        <div className="w-[128px] h-[128px] flex items-center flex-col justify-center shadow-md rounded-2xl bg-[#E6E4EE]">
            <div className="w-[60px] h-[60px]  flex items-center justify-center rounded-2xl bg-[#D7D3E6]">
                <img className="w-[50px] h-[50px] rounded-2xl" src={props.img}></img>
            </div>
            <p className="text-[#503E9D] font-semibold pt-2">{props.name}</p>
        </div>
     );
}
 
export default PaymentMethod;