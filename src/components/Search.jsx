import filter from "../images/filter_list.png"
import { useNavigate } from "react-router-dom";
const Search = (props) => {
  const navigate = useNavigate()
  const navigateToBasket = () => navigate('/basket')
    return ( 
<div className="w-full flex justify-center items-center py-8 px-5">
  <input onChange={props.handleChange} placeholder="Search" className="placeholder-[#FFFFFF] placeholder-opacity-100 text-white w-full h-12 pl-5 bg-[#000000] opacity-10 border border-slate-300 rounded-lg  shadow-md outline-none sm:text-sm " type="text" name="search"/>
<img className="" onClick={navigateToBasket} src={filter}/>
</div>
     );
}
 
export default Search;