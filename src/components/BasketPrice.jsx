import add_price from '../images/add_price.png'
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";

const BasketPrice = (data) => {
    const navigate = useNavigate();
    const [price, setPrice] = useState(0)
    const tgSymbol = '₸';
    const navigateToPayment = () => navigate("/payment")

    useEffect(() => {
        setPrice(data.data);
    }, [data])

    const savePrice = () => {
        localStorage.setItem('price', JSON.stringify(price));
        navigateToPayment();
    };

    return (
        <div className='w-full h-20 flex items-center space-x-3 px-6 pb-10'>
            <div className='bg-[#979797]/10 w-20 h-14 flex items-center justify-center rounded-xl'>
                <img src={add_price}/>
            </div>
            <div onClick={savePrice}
                 className='bg-white w-56 h-14 flex items-center justify-center rounded-xl space-x-10 px-5'>
                <p className='text-base text-[#2D2D2D] font-semibold'>Continue</p>
                <p className='text-base text-[#2D2D2D]'>{price} {tgSymbol}</p>
            </div>
        </div>
    );
}

export default BasketPrice;