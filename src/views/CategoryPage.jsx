import CategoryHeader from '../components/CategoryHeader';
import CategoryPageCard from '../components/CategoryPageCard';
import Navbar from '../components/Navbar';
import cover from '../images/cover.png'
import {useEffect, useState} from "react";
import {createSearchParams, useLocation, useNavigate} from "react-router-dom";
import {getDishesByCategory, getCategories} from "../controllers/Controllers";
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

    const fetchDishesByCategory = async (id) => {
        await getDishesByCategory(id)
            .then(res => {
                setDishes(res.data)
            });
    }
    useEffect(() => {
        fetchDishesByCategory(id)
    }, [])

    return ( 
        <div className='w-full h-[100vh] flex flex-col'>
            <CategoryHeader/>
            <img src={cover} />
            <div className='w-full absolute top-60 rounded-t-3xl h-full bg-[#F7F7F7] px-6'>
                {dishes.map((dish) => (
                    <div onClick={() => navigateFoodDetails(dish.uuid)} >
                    <CategoryPageCard key={dish.uuid} title={dish.title} img={JSON.parse(dish.pictures)[0]} />
                    </div> 
                ))}
            </div>
            <Navbar/>
        </div>
     );
}
 
export default CategoryPage;