import filter from "../images/filter_list.png"
import orange_search from "../images/orange_search.png"
import cancel from "../images/cancel.png"
const SearchPageHeader = (props) => {
    const handleSearch = (e) => {
        props.onSearch(e.target.value)
    }
    return ( 
        <div>
            <div className="w-full py-8 px-6 flex flex-col space-y-4">
                <div className="w-full">
                <img src={orange_search} className="w-5 h-5 absolute top-12 left-10" />
                <input onChange={handleSearch} className=" text-black w-full h-12 pl-9 bg-[#000000] bg-opacity-10 rounded-lg outline-none" type="text" name="search"/>
                <img className="w-4 h-4 absolute top-12 right-10" src={cancel}/>
                </div>
                <div className="w-full flex items-center justify-between">
            <div className="bg-[#FB6D3A] rounded-lg text-xs px-9 py-3 text-white font-medium">Фастфуд {props.count}</div>
                <div className="text-[#FB6D3A] rounded-lg text-xs px-9 py-3 bg-[#FEE2D8] font-medium">Категория(1)</div>
                <div className="w-9 h-10 bg-[#503E9D] flex items-center justify-center rounded-lg ">
                <img className="w-6 h-6" src={filter}/>
                </div>
                </div>
                </div>
        </div>
     );
}
 
export default SearchPageHeader;