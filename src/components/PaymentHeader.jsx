import arroww from '../images/arroww.jpg'

const PaymentHeader = () => {
    return ( 
        <div className='flex items-center  w-full h-28 space-x-6'>
            <img className='rounded-lg w-[35px] h-[35px] ml-6' src={arroww}/>
            <p className='text-xl font-medium text-[#4B4B4B]'>Payment Method</p>
        </div>
     );
}
 
export default PaymentHeader;