import basket from '../images/basket.png'
import arrow from '../images/arrow.png'
import { useNavigate } from 'react-router-dom';
const DetailsHeader = () => {
    const navigate = useNavigate()
    const navigateToHome = () => navigate('/')
    const navigateToBasket = () => navigate('/basket')
    return ( 
        <div className='h-16 w-full flex items-center space-x-32 px-4'>
            <img src={arrow} onClick={navigateToHome}/>
            <h1 className=''>Details</h1>
            <img src={basket} onClick={navigateToBasket} className='w-8 h-8'/>
        </div> 
     );
}
 
export default DetailsHeader;