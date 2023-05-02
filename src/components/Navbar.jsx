import cart from '../images/cart.png'
import spoon from '../images/spoon.png'
import home from '../images/home.png'
import list from '../images/list.png'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
    const navigateToHome = () => navigate('/')
    const navigateToBasket = () => navigate('/basket')
    const navigateToSearchPage = () => navigate('/searchpage')
    return ( 
        <div className="fixed z-50 rounded-t-2xl top-[85vh] w-full h-32 bg-white">
            <div className="w-full h-full flex justify-evenly items-center">
                <img className='w-5 h-5' onClick={navigateToHome} src={home}/>
                <img className='w-5 h-5' onClick={navigateToSearchPage} src={spoon}/>
                <img className='w-5 h-5' onClick={navigateToBasket} src={cart}/>
                <img className='w-5 h-5' src={list}/>
            </div>
        </div>
     );
}
 
export default Navbar;