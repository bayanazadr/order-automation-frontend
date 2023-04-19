import mastercard from '../images/mastercard.png';
import plus from '../images/plus.png';

const PaymentNewCard = () => {
    return ( 
        <div className='flex flex-col space-y-4'>
            <div className='flex items-center text-left w-full rounded-xl h-[94px] bg-[#FFFFFF]'>
            <div className='bg-[#979797]/5 h-12 flex items-center justify-center rounded-xl mx-3'>
                <button className='px-2 text-3xl pb-2 font-semibold text-[#A3A3A4] '>+</button>
            </div>
                <p className='font-semibold text-[#A3A3A4]'>Add New Card</p>
            </div>

            <div className='text-left flex justify-between items-center rounded-xl w-full h-[94px] space-y-2 bg-[#FFFFFF] px-2'>
                <div>
                <p className='text-base text-[#2D2D2D] font-semibold'>Mastercard</p>
                <div className='flex space-x-2'>
                    <img src={mastercard} className='w-9 h-6 rounded'/>
                    <input type='password' maxLength="16" minLength="16" placeholder='•••• •••• •••• 1211' className='h-6 w-32 bg-[#ededed] text-sm text-black-500'/>
                </div>
                </div>
                <div className='bg-[#503E9D] h-10 flex items-center justify-center rounded-xl'>
                <button className='px-1 text-3xl pb-2 font-medium text-white'>✓</button>
            </div>
            </div>
        </div>
     );
}
 
export default PaymentNewCard;