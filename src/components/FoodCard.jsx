const FoodCard = (props) => {
    return ( 
        <div className="m-2 h-56">
        <div className="w-44 h-44 bg-[#F7F8FB] rounded-2xl flex flex-col shadow-md">
            <div className="w-full h-auto flex justify-center items-center">
                <img className="mt-4 w-10/12 h-36 rounded-2xl" src={props.img}></img>
            </div>
        </div>
        <div className="flex flex-col w-full h-auto items-start ml-3">
                <p className="text-[#D8D8D8] font-semibold">{props.name}</p>
                <p className="text-[#D8D8D8]">{props.price}</p>
            </div>
        </div>
     );
}
 
export default FoodCard;