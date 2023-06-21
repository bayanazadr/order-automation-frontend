import CategoryHeader from '../components/CategoryHeader';
import CategoryPageCard from '../components/CategoryPageCard';
import Navbar from '../components/Navbar';
import {useEffect, useState} from "react";
import {createSearchParams, useLocation, useNavigate} from "react-router-dom";
import {getCategoryById, getDishesByCategory} from "../controllers/Controllers";
import {Dish} from "../models/Dish";

const CategoryPage = () => {
    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');
    const [data, setData] = useState([])
    const [dishes, setDishes] = useState([])
    const navigate = useNavigate()

    const navigateFoodDetails = (id) => {
        const params = [
            ['id', id]
        ]
        navigate({
            pathname: '/food-details',
            search: `?${createSearchParams(params)}`
        })
    }

    const fetchCategoryById = async (id) => {
        await getCategoryById(id)
            .then(res => {
                console.log('bzgqFC :: res: ', res)
                setData(res.data)
            })
    }

    const fetchDishesByCategory = async (id) => {
        await getDishesByCategory(id)
            .then(res => {
                const dishes = [];

                res.data.forEach(res => {
                    let dish = new Dish(
                        res?.uuid,
                        res?.active,
                        res?.amount,
                        res?.categoryId,
                        res?.description,
                        res?.ingredients,
                        res?.notes,
                        res?.pictures,
                        res?.price,
                        res?.title,
                    )
                    dishes.push(dish);
                });

                setDishes(dishes)
            });
    }

    useEffect(() => {
        fetchCategoryById(id).then();
    }, [id])

    useEffect(() => {
        fetchDishesByCategory(id).then();
    }, [])

    const getImageUrl = (data) => {
        try {
            if (data.image !== undefined) {
                return JSON.parse(data.image)[0]
            }
            if(data.pictures !== undefined) {
                return JSON.parse(data?.pictures)[0];
            }
        } catch (e) {
            console.error('DP8cG :: incorrect image url: ', data.image, '\nError message: ', e)
        }
    }

    return (
        <div className='w-full h-[100vh] flex flex-col items-center'>
            <CategoryHeader/>
            <img className='object-cover w-full' src={getImageUrl(data)}/>
            <h1 className='text-3xl text-center text-white absolute font-bold pt-32'>{data.name}</h1>
            <h1 className='text-lg text-center text-white absolute pt-40'>{dishes.length} options</h1>
            <div className='w-full absolute top-60 rounded-t-3xl h-full bg-[#F7F7F7] px-6'>
                {dishes.map((dish) => (
                    <div onClick={() => navigateFoodDetails(dish.uuid)}>
                        <CategoryPageCard key={dish?.uuid} title={dish?.title} img={getImageUrl(dish)}/>
                    </div>
                ))}
            </div>
            <Navbar/>
        </div>
    );
}

export default CategoryPage;