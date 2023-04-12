import basket from '../images/basket.png'
import home from '../images/home.png'
import list from '../images/list.png'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
    const navigateToHome = () => navigate('/')
    const navigateToBasket = () => navigate('/basket')
    return ( 
        <div className="fixed z-50 rounded-t-2xl top-[85vh] w-full h-32 bg-white">
            <div className="w-full h-full flex justify-evenly items-center">
                <img className='w-10 h-10 mt-1' onClick={navigateToHome} src={home}/>
                <img className='w-9 h-9 mb-1' onClick={navigateToBasket} src={basket}/>
                <img className='w-7 h-7' src={list}/>
            </div>
        </div>
     );
}
 
export default Navbar;