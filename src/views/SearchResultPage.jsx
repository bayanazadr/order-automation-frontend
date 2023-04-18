import Navbar from "../components/Navbar";
import SearchItem from "../components/SearchItem";
import SearchPageHeader from "../components/SearchPageHeader";

const SearchResultPage = () => {
    return ( 
        <div className="w-full">
            <SearchPageHeader/>
            <div className="w-full h-[100vh] rounded-t-3xl bg-[#F7F7F7] px-6 flex flex-col space-y-10">
            <SearchItem/> 
            <SearchItem/> 
            <SearchItem/> 
            <SearchItem/> 
            <SearchItem/> 
            <SearchItem/> 
            </div>
            
            <Navbar/>
        </div>
     );
}
 
export default SearchResultPage;