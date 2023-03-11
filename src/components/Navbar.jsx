import basket from '../images/basket.png'
import home from '../images/home.png'
import list from '../images/list.png'
const Navbar = () => {
    return ( 
        <div className="fixed rounded-t-2xl top-[94vh] w-full h-14 bg-[#F7F8FB]">
            <div className="w-full h-full flex justify-evenly items-center">
                <img className='w-10 h-10 mt-1' src={home}/>
                <img className='w-9 h-9 mb-1' src={basket}/>
                <img className='w-7 h-7' src={list}/>
            </div>
        </div>
     );
}
 
export default Navbar;