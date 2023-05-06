import search from "../images/search.png"
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
    const navigate = useNavigate()
    const navigateSearchResult = () => navigate('/search')
    return ( 
        <div className="w-full flex justify-center items-center py-8 px-6">
            <img src={search} className="absolute left-10" />
            <input onChange={navigateSearchResult}  placeholder="Поиск блюд или категорию…" className="placeholder-[#FFFFFF] text-white w-full h-12 pl-10 bg-[#000000] opacity-10 border border-slate-300 rounded-lg shadow-md outline-none sm:text-sm " type="text" name="search"/>
        </div>
     );
}
 
export default SearchBar;