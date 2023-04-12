const CategoryCard = (props) => {
    return (  
        <div className="bg-white mx-2 inline-block w-28 h-40 shadow-md rounded-2xl " >
            <img className="rounded-2xl mx-3 mt-7 w-20 h-14" src={props.img}></img>
            <p className="text-[#262628] font-semibold">{props.name}</p>
        </div>
    );
}
 
export default CategoryCard;