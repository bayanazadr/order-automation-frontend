import burger from '../images/burger.png'
const SearchItem = () => {
    return ( 
        <div className="w-full h-24 flex items-center space-x-5">
            <div>
                <img className='w-full' src={burger} />
            </div>
            <div className='flex flex-col items-start space-y-2'>
                <p className='text-sm text-[#262628] font-bold'>Beef burger</p>
                <div className='flex'>
                    <p className='text-sm text-[#262628] font-bold'>4,5&nbsp;</p>
                    <p className='text-sm text-[#262628] font-medium opacity-60'> • Burger • 10$</p>
                </div>
                <div className='bg-[#2D2D2D] text-white rounded font-medium text-xs p-1'>25-30 min</div>
            </div>
        </div>
     );
}
 
export default SearchItem;