import BasketItem from '../components/BasketItem';
import BasketHeader from '../components/BasketHeader'
import BasketPrice from '../components/BasketPrice';
import { useState } from 'react';
const Basket = () => {
    const [basket, setBasket] = useState([])
    return ( 
        <div className='w-full h-[100vh] flex flex-col justify-between'>
            <div>
            <BasketHeader />
            <p className='text-left ml-6 text-2xl font-medium text-[#001833] py-5'>My Basket</p>
            <div className='w-full flex flex-col items-center space-y-5'>
            {basket.map((item) => (
                <BasketItem title={item.title} price={item.amount}/>
            ))}
            </div>
            </div>
           <BasketPrice/>
        </div>
     );
}
 
export default Basket;