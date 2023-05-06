import SearchBar from "../components/SearchBar";
import history from '../images/history.png'
import base from '../images/base.png'
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios"
const SearchPage = () => {
    const [categories, setCategories] = useState([])
    const getCategories = async() => {
        await axios.get("https://order-automation-debug-server.onrender.com/api/categories")
        .then((res) => {
          setCategories(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        getCategories()
    }, [])
    return ( 
        <div className="w-full bg-[#FB6D3A] h-36" >
            <SearchBar/>
            <div className='w-full h-full absolute top-30 bg-white rounded-t-3xl'>
                <div className="w-full px-6 flex flex-col items-start pt-6 space-y-6">
                <p className="text-sm font-bold">Resent Requests</p>
                <div className="flex space-x-5 items-center">
                <img src={history} className="w-4 h-4"/>
                <p className="text-sm text-[#262628]/50 font-medium">Lentils</p>
                </div>
                <div className="flex space-x-5 items-center">
                <img src={history} className="w-4 h-4"/>
                <p className="text-sm text-[#262628]/50 font-medium">Pepperoni</p>
                </div>
                <div className="flex space-x-5 items-center">
                <img src={history} className="w-4 h-4"/>
                <p className="text-sm text-[#262628]/50 font-medium">Coke</p>
                </div>
                <p className="text-sm font-bold">Category</p>
                <div className="w-full flex flex-wrap justify-between">
                    {categories.map((category) => (
                        <div key={category.id} className=" w-40 h-24 mt-4 rounded-xl relative z-0 flex items-center">
                            <img src={base} className="w-full h-full absolute z-0" />
                            <div className="absolute z-10 flex  ml-3 items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-[#FACD5D]"></div>
                            <p className="text-white text-base font-bold">{category.name}</p>
                            </div>
                    </div>
                    ))}
                    
                </div>
                </div>
            </div>
            <Navbar/>
        </div>
     );
}
 
export default SearchPage;