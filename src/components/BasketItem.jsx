import basket1 from '../images/basket1.png'
const BasketItem = () => {
    return ( 
        <div className='w-11/12 h-20 flex rounded-2xl bg-[#F7F8FB]'>
            <div className='mx-3'>
            <img src={basket1} />   
            </div>
            <div className='text-left w-[55%] flex flex-col space-y-1'>
                <p className='font-medium text-[#001833] text-base'>Americano</p>
                <p className='text-sm text-[#757575]'>single | iced | medium | full ice</p>
                <p className='font-medium text-[#001833] text-base'>x1</p>
            </div>
            <div className='w-[15%] flex items-center justify-center'>
                <p className='font-medium text-[#001833] text-xl'>3$</p>
            </div>
            
        </div>
     );
}
 
export default BasketItem;