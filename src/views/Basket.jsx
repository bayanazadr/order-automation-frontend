import BasketItem from '../components/BasketItem';
import stroke from '../images/stroke.png'
const Basket = () => {
    return ( 
        <div className='w-full'>
            <div className='w-full flex flex-col items-center space-y-5'>
            <BasketItem/>
            <BasketItem/>
            <BasketItem/>
            </div>
           
        </div>
     );
}
 
export default Basket;