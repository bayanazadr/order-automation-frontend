import filter from "../images/filter_list.png"
import search from "../images/search.png"
import { useNavigate } from "react-router-dom";
const Search = (props) => {
  const navigate = useNavigate()
  const handleClick = () => navigate('/searchpage')
    return ( 
<div className="w-full flex justify-center items-center py-8 px-6 space-x-4">
  <img src={search} className="absolute left-14" />
  <input onClick={handleClick} placeholder="Поиск блюд или категорию…" className="placeholder-[#FFFFFF] text-white w-4/5 h-12 pl-10 bg-[#000000] opacity-10 border border-slate-300 rounded-lg shadow-md outline-none sm:text-sm " type="text" name="search"/>
  <div className="w-9 h-12 bg-[#2D2D2D] flex items-center justify-center rounded-lg ">
  <img className="w-6 h-6" src={filter}/>
  </div>
</div>
     );
}
 
export default Search;