import backButton from '../images/backButton.png'
import search_button from '../images/search_button.png'
import { useNavigate } from 'react-router-dom';

const CategoryHeader = () => {
    const navigate = useNavigate();
    const navigateToBack = () => navigate(-1)
    const navigateToSearchResult = () => navigate('/search')
    return ( 
        <div className="w-full flex items-center justify-between absolute z-20 px-6 h-28">
            <img src={backButton} onClick={navigateToBack} className='h-12 w-12' />
            <img src={search_button} onClick={navigateToSearchResult} className='h-12 w-12' />
        </div>
     );
}
 
export default CategoryHeader;