import add_price from '../images/add_price.png'
import {useEffect, useState} from "react";
const BasketPrice = (data) => {
    const [price, setPrice] = useState(0)

    useEffect(() => {
        setPrice(data.data)
    }, [data])

    return ( 
        <div className='w-full h-20 flex items-center space-x-3 px-6 pb-10'>
            <div className='bg-[#979797]/10 w-20 h-14 flex items-center justify-center rounded-xl'>
                <img src={add_price} />
            </div>
            <div className='bg-white w-56 h-14 flex items-center justify-center rounded-xl space-x-10 px-5'>
                <p className='text-base text-[#2D2D2D] font-semibold'>Checkout</p>
                <p className='text-base text-[#2D2D2D]'>{price} tg</p>
            </div>
        </div>
     );
}
 
export default BasketPrice;