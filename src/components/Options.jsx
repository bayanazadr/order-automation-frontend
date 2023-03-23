import burger_icon from '../images/burger_icon.png'
const Options = ({title}) => {
    return ( 
        <div className="w-full h-auto">
            <div className="w-full flex h-16 items-center justify-evenly border-b-2 border-[#F4F5F7]">
                <p className="text-[#001833] text-base font-medium">{title}</p>
                <div className="flex h-9 justify-around items-center text-white">
                    <button className="w-7 bg-[#324A59] rounded-tl-3xl rounded-bl-3xl">-</button>
                    <p className="w-7 bg-[#324A59]">1</p>
                    <button className="w-8 bg-[#324A59] rounded-tr-3xl rounded-br-3xl">+</button>
                </div>
            </div>
            <div className="w-full flex h-16 items-center justify-evenly border-b-2 border-[#F4F5F7]">
                <p className="text-[#001833] text-base font-medium">Onion</p>
                <div className="flex w-36 h-9 justify-around items-center text-white">
                    <button className="w-16 bg-[#324A59] rounded-3xl">+</button>
                    <button className="w-16 bg-[#324A59] rounded-3xl">-</button>
                </div>
            </div>
            <div className="w-full flex h-16 items-center justify-evenly border-b-2 border-[#F4F5F7]">
                <p className="text-[#001833] text-base font-medium">Size</p>
                <div className="flex w-32 h-9 justify-around items-end text-white">
                    <img src={burger_icon} className="w-6 h-6"/>
                    <img src={burger_icon} className="w-8 h-8 opacity-50" />
                </div>
            </div>
        </div>
     );
}
 
export default Options;