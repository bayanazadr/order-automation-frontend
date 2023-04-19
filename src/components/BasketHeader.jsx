import back from '../images/back.png'
import { useNavigate } from 'react-router-dom';
const Basket = () => {
    const navigate = useNavigate();
    const navigateToHome = () => navigate('/')
    return ( 
        <div className='w-full h-20 flex items-center' >
            <img className='h-9 w-9' onClick={navigateToHome} src={back}/>
        </div>
     );
}
 
export default Basket;