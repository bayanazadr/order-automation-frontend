import food from '../images/food.png'
const CategoryPageCard = () => {
    return ( 
        <div className="w-full h-60 bg-white rounded-xl mt-10">
            <img src={food} className='w-full' />
            <div className='flex flex-col text-start pl-3'>
                <p className='text-base text-[#262628] font-medium pt-2'>Na Thai Town</p>
                <p className='text-base text-[#262628] font-medium pt-2'>4,5</p>
            </div>
        </div>
     );
}
 
export default CategoryPageCard;