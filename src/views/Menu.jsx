import FoodCard from "../components/FoodCard";
import Navbar from "../components/Navbar";
import CategoryCard from "../components/CategoryCard";
import PromotionCard from "../components/PromotionCard";
import Search from "../components/Search";
import category1 from '../images/category1.png'
import category2 from '../images/category2.png'
import category3 from '../images/category3.png'
import category4 from '../images/category4.png'
import promotion from '../images/promotion.png'
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Menu = () => {
    const categories= [
    {
    img: category1,
    name: 'All'
    },
    {
    img: category2,
    name: 'Burger'
    },
    {
    img: category3,
    name: 'Pizza'
    },
    {
    img: category4,
    name: 'Bar'
    },
]

    const [dishes, setDishes] = useState([])
    const [searchField, setSearchField] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchDishes = async() => {
        await axios.get("https://order-automation-debug-server.onrender.com/api/dishes")
        .then((res) => {
            setDishes(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            setLoading(false);
          });
    }
    useEffect(() => {
        setLoading(true);
        fetchDishes()
    }, [])

    const handleChange = e => {
        setSearchField(e.target.value);
    }

    const filteredDishes = dishes.filter(
        dish => {
          return (
            dish
            .title
            .toLowerCase()
            .includes(searchField.toLowerCase())
          );
        }
      );

    if (loading) {
        return <p>Data is loading...</p>;
      } else
    return ( 
        <div className="w-full bg-[#FACD5D]">
            <div className="w-full h-16 text-left pt-10 pl-5">
                <p className="text-white text-xs font-bold">ЗАКАЗ НА СТОЛ #27</p>
            </div>
          <Search handleChange={handleChange}/>
            <div className="bg-[#F7F7F7] w-full pb-16 rounded-t-3xl">
            <p className='text-left ml-6 text-2xl font-bold text-[#2D2D2D] py-5'>Promotions</p>
            <div className="relative flex items-center">
                <div className="w-full h-52 flex bg-red-300 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                <img className="w-[360px] p-2 rounded-2xl inline-block" src={promotion}></img>
                <img className="w-[360px] p-2 rounded-2xl inline-block" src={promotion}/>
                <img className="w-[360px] p-2 rounded-2xl inline-block" src={promotion}></img>
                <img className="w-[360px] p-2 rounded-2xl inline-block" src={promotion}></img>
                <img className="w-[360px] p-2 rounded-2xl inline-block" src={promotion}></img>
                <img className="w-[360px] p-2 rounded-2xl inline-block" src={promotion}></img>
                </div>
            </div>
                
                <h1 className="text-left ml-6 text-2xl font-bold text-[#2D2D2D] py-5">Popular</h1>
                <div className="relative flex items-center">
                <div className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide space-x-5">
                {categories.map((category) => (
                    <CategoryCard img={category.img} key={category.name} name={category.name} />
                ))}
            </div>
            </div>
            {/* <div className="w-full flex flex-wrap justify-center">
                {filteredDishes.map((food) => (
                    <Link to={`/food-details/${food.uuid}`}
                        state={{food}}
                      >
                    <FoodCard img={food.pictures} key={food.uuid} name={food.title} price={food.amount}/>
                    </Link>
                ))}
            </div> */}
            </div>
            <Navbar/>
        </div>
     );
}
 
export default Menu;