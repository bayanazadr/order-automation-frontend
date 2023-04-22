import backButton from '../images/backButton.png'
import { useNavigate } from 'react-router-dom';
const PagesHeader = () => {
    const navigate = useNavigate();
    const navigateToHome = () => navigate('/')
    return ( 
        <div className="w-full flex items-center justify-between absolute z-20 px-6 h-28">
            <img src={backButton} className='h-12 w-12' onClick={navigateToHome}/>
        </div>
     );
}
 
export default PagesHeader;