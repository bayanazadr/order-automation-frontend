import basket from '../images/basket.png'
import stroke from '../images/stroke.png'
const DetailsHeader = () => {
    return ( 
        <div className='h-16 w-full flex items-center justify-around'>
            <img src={stroke}/>
            <h1 className=''>Details</h1>
            <img src={basket} className='w-8 h-8'/>
        </div> 
     );
}
 
export default DetailsHeader;