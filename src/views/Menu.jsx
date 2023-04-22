import FoodCard from "../components/FoodCard";
import Navbar from "../components/Navbar";
import CategoryCard from "../components/CategoryCard";
import PromotionCard from "../components/PromotionCard";
import Search from "../components/Search";
import category from '../images/category.png'
import promotion from '../images/promotion.png'
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Slider from "../components/Slider";

const Menu = () => {
    const categories= [
    {
    img: category,
    name: 'Burger King'
    },
    {
    img: category,
    name: "Mc Donald's"
    },
    {
    img: category,
    name: 'Chipotle'
    },
    {
    img: category,
    name: 'KFC'
    },
]

const images = [
    {
        id: 1,
        src: promotion,
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

    const [promotions, setPromotions] = useState([])
    const [searchField, setSearchField] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchPromotions = async() => {
        await axios.get("https://order-automation-debug-server.onrender.com/api/get-slider-data")
        .then((res) => {
          Object.values(res.data.data).map(el => {
            if(el.size == 'wide'){
              console.log(el.size)
              setPromotions(el.list)
            }
          })
            // setPromotions(res.data.data)
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
        fetchPromotions()
        console.log(promotions)
    }, [])

    const handleChange = e => {
        setSearchField(e.target.value);
    }

    // const filteredDishes = promotions.filter(
    //     dish => {
    //       return (
    //         dish
    //         .title
    //         .toLowerCase()
    //         .includes(searchField.toLowerCase())
    //       );
    //     }
    //   );

    // if (loading) {
    //     return <p>Data is loading...</p>;
    //   } else
    return ( 
        <div className="w-full bg-[#FACD5D] h-[100vh]">
            <div className="w-full h-16 text-left pt-10 pl-5">
                <p className="text-white text-xs font-bold">ЗАКАЗ НА СТОЛ #27</p>
            </div>
            <Search handleChange={handleChange}/>
            <div className="bg-[#F7F7F7] w-full rounded-t-3xl px-6">
                <p className='text-left text-2xl font-bold text-[#2D2D2D] py-5'>Акции</p>
                <Slider promotions={promotions} />
                <div className="flex items-center justify-between ">
                    <h1 className="text-left text-2xl font-bold text-[#2D2D2D] pb-5">Ланч</h1>
                </div>
                <div className="relative flex items-center">
                    <div className="w-full h-56 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
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