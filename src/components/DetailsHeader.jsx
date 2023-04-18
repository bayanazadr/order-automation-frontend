import backButton from '../images/backButton.png'
import favoritesButton from '../images/favoritesButton.png'
const DetailsHeader = () => {
    return ( 
        <div className="w-full flex items-center justify-between absolute z-20 px-6 h-28">
            <img src={backButton} className='h-12 w-12' />
        </div>
     );
}
 
export default DetailsHeader;