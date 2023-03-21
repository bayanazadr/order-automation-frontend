import basket from "../images/basket.png"
import { useNavigate } from "react-router-dom";
const Search = (props) => {
  const navigate = useNavigate()
  const navigateToBasket = () => navigate('/basket')
    return ( 
<div className="flex justify-center items-center my-8">
<label>
  <span className="sr-only">Search</span>
  <input onChange={props.handleChange} className="placeholder-white text-white w-64 bg-[#324A59] border border-slate-300 rounded-2xl py-2 pl-9 pr-3 shadow-md outline-none sm:text-sm " placeholder="Search" type="text" name="search"/>
</label>
<img className="ml-[30px]" onClick={navigateToBasket} src={basket}/>
</div>
     );
}
 
export default Search;