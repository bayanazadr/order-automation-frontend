const CategoryPageCard = (props) => {
    return ( 
        <div className="w-full h-60 bg-white rounded-xl mt-10">
            <img src={props.img} className='w-full h-44 object-cover rounded-xl' />
            <div className='flex flex-col text-start pl-3'>
                <p className='text-base text-[#262628] font-medium pt-2'>{props.title}</p>
                <p className='text-base text-[#262628] font-medium pt-2'>4,5</p>
            </div>
        </div>
     );
}
 
export default CategoryPageCard;