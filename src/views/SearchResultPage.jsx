import Navbar from "../components/Navbar";
import SearchItem from "../components/SearchItem";
import SearchPageHeader from "../components/SearchPageHeader";
import {useState} from "react";
import {createSearchParams, useNavigate} from "react-router-dom";
import {getDishesByFilter} from "../controllers/Controllers";

const SearchResultPage = () => {
  const navigate = useNavigate()
  const navigateFoodDetails = (uuid) => 
  {
    const params = [
      ['id', uuid]
    ]
    navigate({
      pathname: '/food-details',
      search: `?${createSearchParams(params)}`
    })
}
    const [searchValue, setSearchValue] = useState([])
    const fetchDetails = async(searchText) => {
      await getDishesByFilter(searchText)
          .then(res => {
            setSearchValue(res.data[1])
          });
        }
    
  const handleSearch = (value) => {
    fetchDetails(value).then()
  }

    return ( 
        <div className="w-full">
            <SearchPageHeader count={searchValue.length} onSearch={handleSearch}/>
            <div className="w-full h-[100vh] rounded-t-3xl bg-[#F7F7F7] px-6 flex flex-col space-y-10">
            {searchValue.map(dish => (
              <div onClick={() => navigateFoodDetails(dish.uuid)}>
                <SearchItem  price={dish.price} img={ JSON.parse(dish.pictures)[0]} key={dish.uuid} name={dish.title}  />
              </div>
            ))}
            </div>
            <Navbar/>
        </div>
     );
}
 
export default SearchResultPage;