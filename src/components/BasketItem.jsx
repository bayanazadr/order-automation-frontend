import basket1 from '../images/basket1.png'
const BasketItem = () => {
    return ( 
        <div className='w-11/12 h-20 flex rounded-2xl bg-[#F7F8FB]'>
            <div className='mx-5'>
            <img src={basket1} />   
            </div>
            <div className='text-left'>
                <p>Americano</p>
                <p>single | iced | medium | full ice</p>
                <p>x1</p>
            </div>
            
        </div>
     );
}
 
export default BasketItem;