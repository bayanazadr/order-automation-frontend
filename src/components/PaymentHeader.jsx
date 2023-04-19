import back from '../images/back.png'
import { useNavigate } from 'react-router-dom';
const PaymentHeader = () => {
    const navigate = useNavigate();
    const navigateToHome = () => navigate('/')
    return ( 
        <div className='flex items-center w-full h-28 space-x-6'>
            <img src={back} onClick={navigateToHome}/>
            <p className='text-lg font-semibold text-[#2D2D2D]'>Payment Method</p>
        </div>
     );
}
 
export default PaymentHeader;