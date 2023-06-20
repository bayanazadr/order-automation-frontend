import back from '../images/back.png'
import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react";
const PaymentHeader = () => {
    const [tableId, setTableId]  = useState('');
    const navigate = useNavigate();
    const navigateToHome = () => navigate(`/basket`)

    useEffect(() => {
        const id = JSON.parse(localStorage.getItem('table_temp_key'));
        setTableId(id);
    }, [tableId])

    return ( 
        <div className='flex items-center w-full h-28 space-x-6'>
            <img src={back} onClick={navigateToHome}/>
            <p className='text-lg font-semibold text-[#2D2D2D]'>Payment Method</p>
        </div>
     );
}
 
export default PaymentHeader;