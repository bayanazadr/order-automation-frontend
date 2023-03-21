import arrow from '../images/arrow.png'
import { useNavigate } from 'react-router-dom';
const Basket = () => {
    const navigate = useNavigate();
    const navigateToHome = () => navigate('/')
    return ( 
        <div className='w-full h-16 flex items-center' >
            <img className='h-[18px] w-[24px] ml-4' onClick={navigateToHome} src={arrow}/>
        </div>
     );
}
 
export default Basket;