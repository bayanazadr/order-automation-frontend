import wallet from '../images/wallet.png'

const PaymentFooter = () => {
    return (  
        <div className='flex w-full justify-center items-center space-x-2 px-6 pt-5'>
           <div className='bg-white w-20 h-14 flex items-center justify-center rounded-xl'>
                <img src={wallet} />
            </div>
            <div className='bg-[#2D2D2D] w-56 h-14 flex items-center justify-center rounded-xl space-x-10 px-5'>
                <p className='text-base text-white font-semibold'>Pay now</p>
                <p className='text-base text-white'>$25,60</p>
            </div>

        </div>
    );
}
 
export default PaymentFooter;