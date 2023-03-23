const FoodCard = (props) => {
    return ( 
        <div className="w-44 m-2 h-56">
        <div className="w-full h-44 bg-[#F7F8FB] rounded-2xl flex flex-col shadow-md">
            <div className="w-full h-auto flex justify-center items-center">
                <img className="mt-2 w-11/12 h-40 rounded-2xl" src={props.img}></img>
            </div>
        </div>
        <div className="flex flex-col w-full h-20 items-center">
                <p className="text-[#D8D8D8] font-semibold">{props.name}</p>
                <p className="text-[#D8D8D8]">{props.price} tg</p>
            </div>
        </div>
     );
}
 
export default FoodCard;