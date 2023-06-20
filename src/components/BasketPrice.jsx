import add_price from '../images/add_price.png'
import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react";
import {addOrder, getTableUuidByTempKey} from "../controllers/Controllers";
const BasketPrice = (data) => {
    const navigate = useNavigate();
    const [price, setPrice] = useState(0)
    const [tableUuid, setTableUuid] = useState('')
    const [orderId, setOrderId] = useState('');
    const tgSymbol = '₸';

    const navigateToPayment = () => navigate("/payment")
    useEffect(() => {
        setPrice(data.data);
        fetchTableUuid();
    }, [data])

    const fetchTableUuid = () => {
        const tempKey = JSON.parse(localStorage.getItem('table_temp_key'));
        getTableUuidByTempKey(tempKey)
            .then(x => setTableUuid(x?.data))
    }

    const createOrder = () => {
        let order = {
            uuid: '',
            tableUuid: tableUuid,
            price: price,
        }

        addOrder(order).then((x) =>{
            setOrderId(x?.data);
        });
        let obj = {
            orderId: orderId,
            price: price
        }
        localStorage.setItem('order', JSON.stringify(obj));
        navigateToPayment();
    };

    return ( 
        <div className='w-full h-20 flex items-center space-x-3 px-6 pb-10'>
            <div className='bg-[#979797]/10 w-20 h-14 flex items-center justify-center rounded-xl'>
                <img src={add_price} />
            </div>
            <div onClick={createOrder} className='bg-white w-56 h-14 flex items-center justify-center rounded-xl space-x-10 px-5'>
                <p className='text-base text-[#2D2D2D] font-semibold'>Continue</p>
                <p className='text-base text-[#2D2D2D]'>{price} {tgSymbol}</p>
            </div>
        </div>
     );
}
 
export default BasketPrice;