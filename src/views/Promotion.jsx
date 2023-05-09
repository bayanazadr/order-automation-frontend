import PagesHeader from '../components/PagesHeader';
import {useEffect, useState} from 'react';
import {createSearchParams, useLocation, useNavigate} from "react-router-dom";
import {getDishesByEvent, getEventById} from "../controllers/Controllers";

const Promotion = () => {
    const navigate = useNavigate()
    const navigateFoodDetails = (uuid) => {
        const params = [
            ['id', uuid]
        ]
        navigate({
            pathname: '/food-details',
            search: `?${createSearchParams(params)}`
        })
    }
    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');
    const [data, setData] = useState([])
    const [active, setActive] = useState(false)
    const [selected, setSelected] = useState(0)
    const [dishes, setDishes] = useState([])
    const fetchEvent = async (uuid) => {
        await getEventById(uuid)
            .then(res => {
                setData(res.data)
            });

        getDishesByEvent(uuid)
            .then(res => {
                setDishes(res.data)
            })
    }

    const getSrc = (data) => {
        if (data.image === undefined) {
            return ""
        } else {
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
    return (
        <div className='w-full h-[100vh] flex flex-col'>
            <PagesHeader/>
            <img src={getSrc(data)} className='w-full h-96 object-cover'/>
            <div className='w-full absolute top-80 rounded-t-3xl h-1/2 bg-[#FACD5D]'>
                <div className='py-8 w-full px-6 flex flex-col items-start justify-start space-y-5'>
                    <p className='text-start text-xl text-[#262628] font-semibold'>{data.title}</p>
                    <p className='text-start text-base font-semibold'>{data.description}</p>
                </div>
                <div className='w-full h-full absolute bg-[#F7F7F7] rounded-t-3xl px-6'>
                    <div
                        className='w-full h-16 flex space-x-8 pl-32 justify-center items-center overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                        {items.map((item) => (
                            <div key={item.id} onClick={() => handleClick(item.id)}
                                 className="w-14 h-16 flex flex-col justify-center items-center">
                                <p className={`${selected === item.id ? "text-[#503E9D]" : "text-[#A3A3A4]"} text-base font-bold `}>{item.name}</p>
                                <div
                                    className={`${selected === item.id ? "" : "hidden"} bg-[#503E9D] rounded-full w-2 h-2`}></div>
                            </div>
                        ))}

                    </div>
                    <div className='flex flex-col w-full space-y-8'>
                        {dishes.map((dish) => (
                            <div onClick={() => navigateFoodDetails(dish.uuid)}
                                 className='w-full h-32 flex bg-white rounded-xl'>
                                <img src={JSON.parse(dish.pictures)[0]} className='w-2/5 rounded-bl-xl rounded-tl-xl'/>
                                <div className='flex flex-col justify-center text-start pl-3 space-y-2'>
                                    <p className='text-sm font-bold'>{dish.title}</p>
                                    <p className='text-sm font-medium text-[#262628] opacity-60'>Pizza features two
                                        savory flame-grilled beef patties</p>
                                    <p className='text-[#FB6D3A] text-sm font-medium'>{dish.price} tg</p>
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