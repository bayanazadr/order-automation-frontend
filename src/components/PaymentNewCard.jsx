import mastercard from '../images/mastercard.png';
import plus from '../images/plus.png';

const PaymentNewCard = () => {
    return ( 
        <div className='space-y-4'>
            <div className='flex flex-row items-center text-left w-[350px] h-[94px] bg-[#FFFFFF]'>
                <img className='w-[38px] h-[48px]' src={plus}></img>
                <p className='text-gray-500'>Add New Card</p>
            </div>

            <div className='text-left  w-[350px] h-[94px] space-y-2 bg-[#FFFFFF]'>
                <p className='pt-4'>Mastercard</p>
                <div className='flex flex-row space-x-2'>
                    <img src={mastercard}/>
                    <input className='text-sm text-black-500'/>
                </div>
            </div>
        </div>
     );
}
 
export default PaymentNewCard;