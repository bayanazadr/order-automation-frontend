import CategoryHeader from '../components/CategoryHeader';
import CategoryPageCard from '../components/CategoryPageCard';
import Navbar from '../components/Navbar';
import cover from '../images/cover.png'
const CategoryPage = () => {
    return ( 
        <div className='w-full h-[100vh] flex flex-col'>
            <CategoryHeader/>
            <img src={cover} />
            <div className='w-full absolute top-60 rounded-t-3xl h-full bg-[#F7F7F7] px-6'>
                <CategoryPageCard/>
                <CategoryPageCard/>
                <CategoryPageCard/>
                <CategoryPageCard/>
            </div>
            <Navbar/>
        </div>
     );
}
 
export default CategoryPage;