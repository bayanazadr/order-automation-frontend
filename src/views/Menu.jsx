import Navbar from "../components/Navbar";
import CategoryCard from "../components/CategoryCard";
import Search from "../components/Search";
import {useEffect, useState} from "react";
import axios from 'axios';
import Slider from "../components/Slider";

const Menu = () => {

    const [promotions, setPromotions] = useState([])
    const [smallSlider, setSmallSlider] = useState([])
    const [searchField, setSearchField] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchPromotions = async() => {
        await axios.get("https://order-automation-debug-server.onrender.com/api/get-slider-data")
        .then((res) => {
          Object.values(res.data.data).map(el => {
            if(el.size == 'wide'){
              setPromotions(el.list)
            }
            if(el.size =="small"){
              setSmallSlider(el.list)
            }
          })
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
    }, [])

    const handleChange = e => {
        setSearchField(e.target.value);
    }

    if (loading) {
        return <p>Data is loading...</p>;
      } else
    return ( 
        <div className="w-full bg-[#FACD5D] h-[100vh]">
            <div className="w-full h-16 text-left pt-10 pl-5">
                <p className="text-white text-xs font-bold">ЗАКАЗ НА СТОЛ #27</p>
            </div>
            <Search handleChange={handleChange}/>
            <div className="bg-[#F7F7F7] w-full rounded-t-3xl">
              <div className="w-full px-6">
                <p className='text-left text-2xl font-bold text-[#2D2D2D] py-5'>Акции</p>
                <Slider promotions={promotions} />
                <div className="flex items-center justify-between ">
                    <h1 className="text-left text-2xl font-bold text-[#2D2D2D] pb-5">Ланч</h1>
                </div>
              </div>
              <div className="relative flex items-center px-3">
                <div className="w-full h-56 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                  {smallSlider.map((category) => (
                  <CategoryCard img={ JSON.parse(category.image)[0]} key={category.uuid} name={category.title} />
                  ))}
                </div>
              </div>
            </div>
            <Navbar/>
        </div>
     );
}
 
export default Menu;