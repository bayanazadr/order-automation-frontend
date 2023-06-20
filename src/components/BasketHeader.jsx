import back from '../images/back.png'
import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react";
const Basket = () => {
    const navigate = useNavigate();
    const [tableId, setTableId]  = useState('');
    const navigateToHome = () => navigate(`/${tableId}`)

    useEffect(() => {
        const id = JSON.parse(localStorage.getItem('table_temp_key'));
        setTableId(id);
    }, [tableId])

    return ( 
        <div className='w-full h-20 flex items-center' >
            <img className='h-9 w-9' onClick={navigateToHome} src={back}/>
        </div>
     );
}
 
export default Basket;