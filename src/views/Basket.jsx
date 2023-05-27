import BasketItem from '../components/BasketItem';
import BasketHeader from '../components/BasketHeader'
import BasketPrice from '../components/BasketPrice';
import {useEffect, useState} from 'react';

const Basket = () => {

    const [baskets, setBaskets] = useState([])
    const [price, setPrice] = useState(0)

    const initBasket = () => {
        const basket = JSON.parse(localStorage.getItem('basket'));

        if (basket) {
            setBaskets(basket)
        }
    }

    useEffect(() => {
        initBasket()
    }, [])

    useEffect(() => {
        calculatePrice()
    }, [baskets])

    const calculatePrice = () => {
        let sum = 0;
        baskets.forEach(item => {
            sum += Number(item.price)
        })
        console.log('ar3C1 :: sum: ', sum)
        setPrice(sum)
    }

    return (
        <div className='w-full h-[100vh] bg-[#503E9D] flex flex-col justify-between'>
            <div className='bg-white px-6 rounded-b-3xl'>
                <div className='pb-20'>
                    <BasketHeader/>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-left text-xl font-bold text-[#FB6D3A] py-5'>Basket</p>
                        <div className='w-20 h-6 bg-[#FB6D3A] flex items-center justify-center rounded'>
                            <p className='text-white text-xs font-medium'>25-30 min</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-start space-y-5'>
                        {baskets.map((basket) => (
                                <BasketItem basket={basket}/>
                            )
                        )}

                        <div
                            className='space-x-3 flex items-center justify-center text-[#503E9D] text-base font-semibold h-16'>
                            <p className='text-3xl pb-2'>+</p>
                            <p className='text-lg'>Add more items</p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-20 flex justify-between items-center mb-10'>
                    <div className='flex flex-col items-start'>
                        <p className='text-base font-bold'>Promo code</p>
                        <p className='text-base'>HXFWO</p>
                    </div>
                    <div className='bg-[#979797]/10 h-12 flex items-center justify-center rounded-xl'>
                        <button className='px-2 text-3xl pb-2 font-semibold text-[#503E9D]'>+</button>
                    </div>
                </div>
            </div>
            <BasketPrice data={price}/>
        </div>
    );
}

export default Basket;