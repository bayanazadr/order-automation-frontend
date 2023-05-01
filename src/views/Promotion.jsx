import PromotionSlider from '../components/PromotionSlider';
import PagesHeader from '../components/PagesHeader';
import axios from "axios";
import { useEffect, useState } from 'react';
import {useLocation} from "react-router-dom";
const Promotion = () => {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get('id');
  const [data, setData] = useState([])
  const [active, setActive] = useState(false)
  const [selected, setSelected] = useState(0)
    const fetchEvent = async(uuid) => {
        const link = `https://order-automation-debug-server.onrender.com/api/get-event-by-id/${uuid}`;
        await axios.get(link)
            .then(res => {
                setData(res.data)
            });
    }
    
    const getSrc = (data) => {
        if(data.image == undefined){
            return ""
        }
        else{
            return JSON.parse(data.image)[0]
        }
    }

    const handleClick = (id) => {
        setActive(current => !current)
        setSelected(id)
    } 

    useEffect(() => {
      fetchEvent(id)
    }, [])

    const items = [
        {
            id: 0,
            name: "Promo"
        },
        {
            id: 1,
            name: "Burgers"
        },
        {
            id: 2,
            name: "Meals"
        },
        {
            id: 3,
            name: "Chicken"
        },
        {
            id: 4,
            name: "Salads"
        },
        {
            id: 5,
            name: "Drinks"
        },
    ]
    const images = [
        {
            id: 1,
            src: "https://images.ctfassets.net/uexfe9h31g3m/75gEiKZtDSpzhVVIctlrkW/452931c0ec089356f43674da8efa09fb/daisys_one_pot_pasta_1024x768.jpg?w=2000&h=1500&fm=jpg&fit=thumb&q=90&fl=progressive",
            alt: "Image 1",
          },
          {
            id: 2,
            src: "https://images.ctfassets.net/uexfe9h31g3m/75gEiKZtDSpzhVVIctlrkW/452931c0ec089356f43674da8efa09fb/daisys_one_pot_pasta_1024x768.jpg?w=2000&h=1500&fm=jpg&fit=thumb&q=90&fl=progressive",
            alt: "Image 2",
          },
          {
            id: 3,
            src: "https://www.halfbakedharvest.com/wp-content/uploads/2022/06/Summer-Chicken-Salad-with-Hot-Bacon-Dressing-1.jpg",
            alt: "Image 3",
          },
          {
            id: 4,
            src: "https://popmenucloud.com/hbjtmxrs/7a9ba92f-b5f6-4997-ae53-e3e21e117547",
            alt: "Image 4",
          },
    ];
    return ( 
        <div className='w-full h-[100vh] flex flex-col'>
            <PagesHeader/>
            <img src={getSrc(data)} className='w-full h-96 object-cover' />
            <div className='w-full absolute top-80 rounded-t-3xl h-1/2 bg-[#FACD5D]'>
                <div className='py-8 w-full px-6 flex flex-col items-start justify-start space-y-5'>
                <p className='text-start text-xl text-[#262628] font-semibold'>{data.title}</p>
                <p className='text-start text-base font-semibold'>{data.description}</p>
                </div>
                <div className='w-full h-full absolute bg-[#F7F7F7] rounded-t-3xl px-6'>
                    <div className='w-full h-16 flex space-x-8 pl-32 justify-center items-center overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                        {items.map((item) => (
                            <div key={item.id} onClick={() => handleClick(item.id)} className="w-14 h-16 flex flex-col justify-center items-center">
                            <p className={`${selected===item.id ? "text-[#503E9D]": "text-[#A3A3A4]" } text-base font-bold `}>{item.name}</p>
                            <div className={`${selected===item.id ? "" : "hidden" } bg-[#503E9D] rounded-full w-2 h-2`}></div>
                        </div>
                       ))}
                        
                    </div>
                    <div className='flex flex-col w-full space-y-8'>
                        {images.map((image) => (
                            <div className='w-full h-32 flex bg-white rounded-xl'>
                                <img src={image.src} className='w-2/5 rounded-bl-xl rounded-tl-xl'/>
                                <div className='flex flex-col justify-center text-start pl-3 space-y-2'>
                                    <p className='text-sm font-bold'>Pizza</p>
                                    <p className='text-sm font-medium text-[#262628] opacity-60'>Pizza features two savory flame-grilled beef patties</p>
                                    <p className='text-[#FB6D3A] text-sm font-medium'>$5.90</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>  
        </div>
     );
}
 
export default Promotion;