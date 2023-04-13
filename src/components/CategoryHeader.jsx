import backButton from '../images/backButton.png'
import search_button from '../images/search_button.png'
const CategoryHeader = () => {
    return ( 
        <div className="w-full flex items-center justify-between absolute z-20 px-6 h-28">
            <img src={backButton} className='h-12 w-12' />
            <img src={search_button} className='h-12 w-12' />
        </div>
     );
}
 
export default CategoryHeader;