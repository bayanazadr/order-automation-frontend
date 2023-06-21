import Navbar from "../components/Navbar";
import SearchItem from "../components/SearchItem";
import SearchPageHeader from "../components/SearchPageHeader";
import {useState, useEffect} from "react";
import {createSearchParams, useNavigate} from "react-router-dom";
import {getDishesByFilter} from "../controllers/Controllers";

const SearchResultPage = () => {
    const navigate = useNavigate()
    const [categoryCount, setCategoryCount] = useState(0);
    const navigateFoodDetails = (uuid) => {
        const params = [
            ['id', uuid]
        ]
        navigate({
            pathname: '/food-details',
            search: `?${createSearchParams(params)}`
        })
    }
    const [searchValue, setSearchValue] = useState([])
    const fetchDetails = async (searchText) => {
        const branchId = JSON.parse(localStorage.getItem('branch_id'));
        await getDishesByFilter(branchId, searchText)
            .then(res => {
                setSearchValue(res.data[1])
            });
    }

    const handleSearch = (value) => {
        fetchDetails(value).then()
    }
    const getImageUrl = (data) => {
        try {
            if (data.pictures !== undefined) {
                return JSON.parse(data.pictures)[0]
            }
        } catch (e) {
            console.error('unALQ0Cl :: incorrect image url: ', data.pictures, '\nError message: ', e)

        }
    }
    useEffect(() => {
        // Count distinct categories in search results
        const distinctCategories = new Set(searchValue.map(dish => dish.categoryId));
        setCategoryCount(distinctCategories.size);
    }, [searchValue]);
    return (
        <div className="w-full">
            <SearchPageHeader count={searchValue.length} categoryCount={categoryCount} onSearch={handleSearch}/>
            <div className="w-full h-[100vh] rounded-t-3xl bg-[#F7F7F7] px-6 flex flex-col space-y-10">
                {searchValue.map(dish => (
                    <div onClick={() => navigateFoodDetails(dish.uuid)}>
                        <SearchItem price={dish.price} img={getImageUrl(dish)} key={dish.uuid} name={dish.title}/>
                    </div>
                ))}
            </div>
            <Navbar/>
        </div>
    );
}

export default SearchResultPage;