import wallet from '../images/wallet.png'

const PaymentFooter = () => {
    return (  
        <div className='flex flex-row w-full space-x-2'>
            <img className='w-[68px] h-[58px] rounded-2xl' src={wallet}></img>
            <div className="bg-[#393939] w-[218px] h-[58px] flex justify-around items-center rounded-2xl">
                <button className="text-[#FFFFFF]">Pay Now</button>
                <h1 className='text-[#FFFFFF]'>$3.00</h1>
            </div>

        </div>
    );
}
 
export default PaymentFooter;