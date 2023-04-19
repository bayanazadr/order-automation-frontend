import trash from '../images/trash.png'
const BasketItem = () => {
    return ( 
        <div className='w-full h-20 flex justify-between items-center'>
            <div className='flex flex-col items-start'>
                <p className='text-base font-bold'>Crispy Burger</p>
                <p className='text-base'>$7,90</p>   
            </div>
            <div className='bg-[#979797]/10 w-32 h-12 flex items-center justify-center rounded-lg'>
                <button className='w-12 h-12 flex items-center justify-center'>
                    <img src={trash} />
                </button>
                <p className='flex items-center justify-center w-10 h-12 text-base font-semibold'>1</p>
                <button className='w-12 h-12 text-2xl font-semibold text-[#FB6D3A]'>+</button>
            </div>
            
        </div>
     );
}
 
export default BasketItem;