import PaymentHeader from '../components/PaymentHeader';
import PaymentMethod from '../components/PaymentMethod';
import creditcard from '../images/creditcard.png';
import cash from '../images/cash.png';
import QR from '../images/QR.png';
import wallet from '../images/wallet.png'
import {useEffect, useRef, useState} from 'react';
import CreditCardForm from '../components/CreditCardForm';
import {addBasket, addOrder, getTableUuidByTempKey} from "../controllers/Controllers";

const Payments = () => {
    const creditCardFormRef = useRef();
    const [baskets, setBaskets] = useState([])
    const [price, setPrice] = useState(0)
    const [tableUuid, setTableUuid] = useState('')
    const tgSymbol = '₸';


    useEffect(() => {
        fetchTableUuid();
    }, [])

    const fetchTableUuid = () => {
        const tempKey = JSON.parse(localStorage.getItem('table_temp_key'));
        getTableUuidByTempKey(tempKey)
            .then(x => setTableUuid(x?.data))
    }

    const handlePaymentSubmit = (event) => {

        let basket = {
            uuid: '',
            amount: 0,
            dishUuid: '',
            orderUuid: '',
            price: 0
        };

        let order = {
            uuid: '',
            tableUuid: tableUuid,
            price: price,
        }

        addOrder(order).then((x) => {
            let obj = {
                orderId: x?.data,
                price: price
            }

            baskets?.forEach(b => {

                const amount = JSON.parse(localStorage
                    .getItem(`amount-${b.uuid}`));

                basket = {
                    amount: amount,
                    dishUuid: b.uuid,
                    orderUuid: x?.data,
                    price: price
                }

                addBasket(basket);
            });

        }).catch((error) => {
            console.error('Ошибка при создании заказа:', error);
        });

        console.log('YAFIoPeF :: creditCardFormRef: ', creditCardFormRef);

        creditCardFormRef.current.submitForm();
    };

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
        const price = JSON.parse(localStorage.getItem('price'));
        setPrice(price)
    }

    const methods = [
        {
            img: creditcard,
            name: 'Credit Card'
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
                        <PaymentMethod img={method.img} key={method.name} name={method.name}/>
                    ))}
                </div>
                <h1 className="text-lg font-semibold text-[#2D2D2D]">Credit Card Validation</h1>
                <CreditCardForm ref={creditCardFormRef}/>
            </div>
            <div className='flex w-full justify-center items-center space-x-2 px-6 pt-5'>
                <div className='bg-white w-20 h-14 flex items-center justify-center rounded-xl'>
                    <img src={wallet}/>
                </div>
                <button onClick={handlePaymentSubmit}
                        className='bg-[#2D2D2D] w-56 h-14 flex items-center justify-center rounded-xl space-x-10 px-5'>
                    <p className='text-base text-white font-semibold'>Pay now</p>
                    <p className='text-base text-white'>{price} {tgSymbol}</p>
                </button>

            </div>
        </div>
    );
}

export default Payments;