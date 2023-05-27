import trash from '../images/trash.png'
import {useEffect, useState} from "react";

const BasketItem = (data) => {
    const [basket, setBasket] = useState({});
    const [dishAmount, setDishAmount] = useState(1)
    useEffect(() => {
        setBasket(data.basket)
    }, [])

    const deleteBasketItem = () => {
        let baskets = JSON.parse(localStorage.getItem('basket'))
        if (basket) {
            baskets = baskets.filter(x => x.uuid !== basket.uuid)
            localStorage.setItem('basket', JSON.stringify(baskets))
        }
    }

    const incrementDishCount = () => {
        let count = Number(dishAmount)
        setDishAmount(++count)
    }

    const reduceDishCount = () => {
        let count = Number(dishAmount)
        if (count > 1) {
            setDishAmount(--count)
        } else {
            deleteBasketItem();
        }
    }

    return (
        <div className='w-full h-20 flex justify-between items-center'>
            <div className='flex flex-col items-start'>
                <p className='text-base font-bold'>{basket.title}</p>
                <p className='text-base'>{basket.price} tg</p>
            </div>
            <div className='bg-[#979797]/10 w-32 h-12 flex items-center justify-center rounded-lg'>
                <button className='w-12 h-12 flex items-center justify-center'>
                    <img src={trash} onClick={deleteBasketItem}/>
                </button>
                <button onClick={reduceDishCount} className='w-12 h-12 text-2xl font-semibold text-[#FB6D3A]'>-</button>

                <p className='flex items-center justify-center w-10 h-12 text-base font-semibold'>{dishAmount}</p>
                <button onClick={incrementDishCount} className='w-12 h-12 text-2xl font-semibold text-[#FB6D3A]'>+
                </button>
            </div>

        </div>
    );
}

export default BasketItem;