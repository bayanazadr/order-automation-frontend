import FoodCard from "../components/FoodCard";
import Navbar from "../components/Navbar";
import CategoryCard from "../components/CategoryCard";
import PromotionCard from "../components/PromotionCard";
import Search from "../components/Search";
import category1 from '../images/category1.png'
import category2 from '../images/category2.png'
import category3 from '../images/category3.png'
import category4 from '../images/category4.png'
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
        <div className="w-full">
          <Search handleChange={handleChange}/>
            <div className="flex flex-nowrap justify-center space-x-3.5 mb-10">
                {categories.map((category) => (
                    <CategoryCard img={category.img} key={category.name} name={category.name} />
                ))}
            </div>
            <div className="bg-[#324A59] w-full pb-16 rounded-t-3xl">
            <p className='text-left ml-6 text-2xl font-medium text-[#D8D8D8] py-5'>Promotions</p>
                <PromotionCard/>
                <h1 className="text-left ml-6 text-2xl font-normal text-[#D8D8D8] py-5">Popular</h1>
            <div className="w-full flex flex-wrap justify-center">
                {filteredDishes.map((food) => (
                    <Link to={`/food-details/${food.uuid}`}
                        state={{food}}
                      >
                    <FoodCard img={food.pictures} key={food.uuid} name={food.title} price={food.amount}/>
                    </Link>
                ))}
            </div>
            </div>
            <Navbar/>
        </div>
     );
}
 
export default Menu;