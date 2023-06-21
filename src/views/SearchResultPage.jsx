import Navbar from "../components/Navbar";
import SearchItem from "../components/SearchItem";
import SearchPageHeader from "../components/SearchPageHeader";
import { useState, useEffect } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { getDishesByFilter, getCategories } from "../controllers/Controllers";

const SearchResultPage = () => {
  const navigate = useNavigate();
  const [categoryCount, setCategoryCount] = useState(0);
  const [searchValue, setSearchValue] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigateFoodDetails = (uuid) => {
    const params = [
      ["id", uuid],
    ];
    navigate({
      pathname: "/food-details",
      search: `?${createSearchParams(params)}`,
    });
  };

  const fetchDetails = async (searchText) => {
    const branchId = JSON.parse(localStorage.getItem("branch_id"));
    await getDishesByFilter(branchId, searchText).then((res) => {
      setSearchValue(res.data[1]);
    });
    setSearchQuery(searchText);
  };

  const fetchCategories = async () => {
    const branchId = JSON.parse(localStorage.getItem("branch_id"));
    if (branchId) {
      getCategories(branchId).then((res) => {
        setCategories(res.data);
      });
    }
  };

  const handleSearch = (value) => {
    fetchDetails(value);
  };

  const getImageUrl = (data) => {
    try {
      if (data.pictures !== undefined) {
        return JSON.parse(data.pictures)[0];
      }
    } catch (e) {
      console.error("Incorrect image URL: ", data.pictures, "\nError message: ", e);
    }
  };

  useEffect(() => {
    fetchCategories();
    const distinctCategories = new Set(searchValue.map((dish) => dish.categoryId));
    setCategoryCount(distinctCategories.size);
  }, [searchValue]);

  return (
    <div className="w-full">
      <SearchPageHeader
        count={searchValue.length}
        categoryCount={categoryCount}
        onSearch={handleSearch}
        onToggleCategories={() => setShowCategories(!showCategories)}
      />
      <div className="w-full h-[100vh] rounded-t-3xl bg-[#F7F7F7] px-6 flex flex-col space-y-10">
        {showCategories ? (
          Array.isArray(categories) &&
          categories
            .filter((category) =>
              category.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((category) => (
              <div>
                <p>{category.name}</p>
                {/* Add other category info */}
              </div>
            ))
        ) : (
          Array.isArray(searchValue) &&
          searchValue.map((dish) => (
            <div onClick={() => navigateFoodDetails(dish.uuid)}>
              <SearchItem price={dish.price} img={getImageUrl(dish)} key={dish.uuid} name={dish.title} />
            </div>
          ))
        )}
      </div>
      <Navbar />
    </div>
  );
};

export default SearchResultPage;
