const CategoryCard = (props) => {
    return (  
        <div className="bg-white mx-2 inline-block w-28 h-40 shadow-md rounded-2xl " >
            <img className="rounded-2xl w-28 h-28 object-cover" src={props.img}></img>
            <p className="mt-2 truncate text-[#262628] text-xs text-center font-semibold">{props.name}</p>
        </div>
    );
}
 
export default CategoryCard;