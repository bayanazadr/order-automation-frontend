import PromotionSlider from '../components/PromotionSlider';
import PagesHeader from '../components/PagesHeader';
import axios from "axios";
import { useEffect, useState } from 'react';
import {useLocation} from "react-router-dom";
const Promotion = () => {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get('id');
  const [data, setData] = useState([])
    const fetchEvent = async(uuid) => {
        const link = `https://order-automation-debug-server.onrender.com/api/get-event-by-id/${uuid}`;
        await axios.get(link)
            .then(res => {
                setData(res.data)
                console.log(res.data)
                if(res.data.image== undefined){
                    console.log("img undefined")
                }
                else{
                console.log(JSON.parse(res.data.image)[0])
                }
            });
    }

    
    useEffect(() => {
      fetchEvent(id)
    }, [])


    return ( 
        <div className='w-full h-[100vh] flex flex-col'>
            <PagesHeader/>
            {/* <PromotionSlider images={images}/> */}
            <img src={JSON.parse(data.image)[0]} className='w-full h-96 object-cover' />
            <div className='w-full absolute top-80 rounded-t-3xl h-1/2 bg-[#FACD5D]'>
                <div className='py-8 w-full px-6 flex flex-col items-start justify-start space-y-5'>
                <p className='text-2xl text-[#262628] font-semibold'>{data.title}</p>
                <p className='text-start text-base font-semibold'>{data.description}</p>
                </div>
                <div className='w-full h-full absolute bg-white rounded-t-3xl'>
                </div>
            </div>
        </div>
     );
}
 
export default Promotion;