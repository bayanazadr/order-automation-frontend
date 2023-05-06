import Navbar from "../components/Navbar";
import SearchItem from "../components/SearchItem";
import SearchPageHeader from "../components/SearchPageHeader";
import {useEffect, useState} from "react";
import axios from 'axios';

const SearchResultPage = () => {
    const [searchValue, setsearchValue] = useState([])
    const fetchDetails = async(value) => {
      const link = `https://order-automation-debug-server.onrender.com/api/get-dish-by-filter`;
      await axios.post(link,
        {
            "limit": 10,
            "offset": 0,
            "searchText": value,
            "direction": "asc"
        })
          .then(res => {
            console.log(res.data[1])
            setsearchValue(res.data[1])
          });
        }
    
  const handleSearch = (value) => {
    fetchDetails(value)
  }

    return ( 
        <div className="w-full">
            <SearchPageHeader count={searchValue.length} onSearch={handleSearch}/>
            <div className="w-full h-[100vh] rounded-t-3xl bg-[#F7F7F7] px-6 flex flex-col space-y-10">
            {searchValue.map(dish => (
                <SearchItem price={dish.price} img={ JSON.parse(dish.pictures)[0]} key={dish.uuid} name={dish.title}  />
            ))}
            </div>
            <Navbar/>
        </div>
     );
}
 
export default SearchResultPage;