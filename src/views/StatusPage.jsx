import {useEffect, useState} from 'react';
import StatusHeader from '../components/StatusHeader';
import history from '../images/history.png'
import LoadingWithTimer from '../components/LoadingWithTimer';

const StatusPage = () => {
    const [baskets, setBaskets] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const tgSymbol = '₸';


    const initBasket = () => {
        const basket = JSON.parse(localStorage.getItem('basket'));
        if (basket) {
            setBaskets(basket)
        }
    }

    const getPrice = () => {
        const price = JSON.parse(localStorage.getItem('price'));
        setTotalPrice(price)
    }

    useEffect(() => {
        initBasket();
    }, [])

    useEffect(() => {
        getPrice();
    }, [baskets])


    const calculatePrice = (dishId) => {
        const amount = JSON.parse(localStorage
            .getItem(`amount-${dishId}`) ?? 1000);
        return baskets.filter(x => x.uuid === dishId).map(x => x.price * amount);
    }
    return (
        <div className="h-screen flex flex-col bg-[#FACD5D]">
            <div className='rounded-b-3xl w-full h-[700px] space-y-6 bg-[#F7F7F7] px-6'>
                <StatusHeader/>
                <div className="bg-white w-full h-40 rounded-lg">
                    <div className='flex justify-center items-center space-x-2'>
                        <img src={history} className='w-5 h-5'/>
                        <p className='text-4xl font-bold'>25min</p>
                    </div>
                    <LoadingWithTimer totalTimeInMinutes={25} />
                </div>
                <div className="bg-white w-full h-80 rounded-lg flex flex-col space-y-4">
                    <p className='text-start text-[#FB6D3A] text-base font-bold'>Order Details</p>
                    {baskets.map(basket => (
                        <div className='w-full flex justify-between'>
                            <p className='text-base font-bold'>{basket.title}</p>
                            <p>{calculatePrice(basket.uuid)}{tgSymbol}</p>
                        </div>
                    ))}

                    <div className='w-full flex justify-between'>
                        <p className='text-base font-bold'>Promo code</p>
                        <p>HXFWO</p>
                    </div>
                    <div className='w-full flex justify-between'>
                        <p className='text-base font-bold'>Total</p>
                        <p className='text-[#FB6D3A] text-lg font-bold'>{totalPrice}{tgSymbol}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatusPage;