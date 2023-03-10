import basket from "../images/basket.png"
const Search = (input) => {
    return ( 
<div className="flex justify-center items-center my-8">
<label>
  <span class="sr-only">Search</span>
  <input class="placeholder-white w-64 bg-[#324A59] border border-slate-300 rounded-2xl py-2 pl-9 pr-3 shadow-md outline-none sm:text-sm " placeholder="Search" type="text" name="search"/>
</label>
<img className="ml-[30px]" src={basket}/>
</div>
     );
}
 
export default Search;