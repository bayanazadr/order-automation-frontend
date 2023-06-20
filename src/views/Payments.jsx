import PaymentHeader from '../components/PaymentHeader';
import PaymentMethod from '../components/PaymentMethod';
import creditcard from '../images/creditcard.png';
import cash from '../images/cash.png';
import QR from '../images/QR.png';
import wallet from '../images/wallet.png'
import CreditCardForm from '../components/CreditCardForm';
import {useEffect, useState} from "react";

const Payments = () => {
    const [baskets, setBaskets] = useState([])
    const [order, setOrder] = useState([])
    const [price, setPrice] = useState(0)
    const tgSymbol = '₸';

    const initBasket = () => {
        const basket = JSON.parse(localStorage.getItem('basket'));
        if (basket) {
            setBaskets(basket)
        }
    }

    useEffect(() => {
        initBasket();
    }, [])

    useEffect(() => {
        getPrice();
    }, [baskets])


    const getPrice = () => {
        const order = JSON.parse(localStorage.getItem('order'));
        setPrice(order.price)
    }

    const methods=[
        {
            img: creditcard,
            name:'Credit Card'
        },
        {
            img: cash,
            name: 'Cash'
        },
        {
            img: QR,
            name: 'QR'
        }
    ]
    return ( 
        <div className="h-screen flex flex-col bg-[#FACD5D]">
            <div className='rounded-b-3xl w-full h-[720px] space-y-6 bg-[#F7F7F7] px-6'>
                <PaymentHeader/>
            <div className="flex flex-nowrap space-x-3.5 mb-28">
                {methods.map((method) => (
                    <PaymentMethod img={method.img} key={method.name} name={method.name} />
                ))}
            </div>
            <h1 className="text-lg font-semibold text-[#2D2D2D]">Credit Card Validation</h1>
            <CreditCardForm />
            </div>
            <div className='flex w-full justify-center items-center space-x-2 px-6 pt-5'>
           <div className='bg-white w-20 h-14 flex items-center justify-center rounded-xl'>
                <img src={wallet} />
            </div>
            <button className='bg-[#2D2D2D] w-56 h-14 flex items-center justify-center rounded-xl space-x-10 px-5'>
                <p className='text-base text-white font-semibold'>Pay now</p>
                <p className='text-base text-white'>{price} {tgSymbol}</p>
            </button>

        </div>
        </div>
     );
}
 
export default Payments;