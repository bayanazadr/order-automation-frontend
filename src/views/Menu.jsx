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


const foods= [
    {
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    name: 'CheeseBurger',
    price: '1200 tg'
    },
    {
    img: 'https://www.simplyrecipes.com/thmb/I4razizFmeF8ua2jwuD0Pq4XpP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg',
    name: 'Pepperoni Pizza',
    price: '3500 tg'
    },
    {
    img: 'https://thecozycook.com/wp-content/uploads/2022/08/Chicken-Alfredo-Pasta-1-1.jpg',
    name: 'Alfredo Pasta',
    price:'2600 tg'
    },
    {
    img: 'https://blog.urbanadventures.com/wp-content/uploads/2018/05/samarkand_plov.jpg',
    name: 'Uzbek Plov',
    price: '1800 tg'
    },
    {
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    name: 'Double Burger',
    price: '1200 tg'
    },
    {
    img: 'https://www.simplyrecipes.com/thmb/I4razizFmeF8ua2jwuD0Pq4XpP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg',
    name: 'Margarita Pizza',
    price: '3500 tg'
    },
    {
    img: 'https://thecozycook.com/wp-content/uploads/2022/08/Chicken-Alfredo-Pasta-1-1.jpg',
    name: 'Fetuccine Pasta',
    price:'2600 tg'
    },
    {
    img: 'https://blog.urbanadventures.com/wp-content/uploads/2018/05/samarkand_plov.jpg',
    name: 'kazakh Plov',
    price: '1800 tg'
    },
]
    const [dishes, setDishes] = useState()
    const [searchField, setSearchField] = useState("");
    // const fetchDishes = async() => {
    //     await axios.get("https://order-automation-debug-server.onrender.com/api/dishes")
    //     .then((res) => {
    //         console.log(res)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // }
    // useEffect(() => {
    //     fetchDishes()
    // }, [])

    const handleChange = e => {
        setSearchField(e.target.value);
    }

    const filteredDishes = foods.filter(
        person => {
          return (
            person
            .name
            .toLowerCase()
            .includes(searchField.toLowerCase())
          );
        }
      );


    return ( 
        <div className="w-full">
          <Search handleChange={handleChange}/>
            <div className="flex flex-nowrap justify-center space-x-3.5 mb-10">
                {categories.map((category) => (
                    <CategoryCard img={category.img} key={category.name} name={category.name} />
                ))}
            </div>
            <div className="bg-[#324A59] w-full">
            <p className='text-left ml-6 text-2xl font-medium text-[#D8D8D8] py-5'>Promotions</p>
                <PromotionCard/>
                <h1 className="text-left ml-6 text-2xl font-normal text-[#D8D8D8] py-5">Popular</h1>
            <div className="w-full flex flex-wrap justify-center">
                {filteredDishes.map((food) => (
                    <FoodCard img={food.img} key={food.name} name={food.name} price={food.price}/>
                ))}
            </div>
            </div>
            <Navbar/>
        </div>
     );
}
 
export default Menu;