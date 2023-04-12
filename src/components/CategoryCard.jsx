const CategoryCard = (props) => {
    return (  
        <div className="py-2 px-2 inline-block w-32 h-40 shadow-md rounded-2xl " >
            <img className="rounded-2xl w-28 h-24" src={props.img}></img>
            <p className="text-[#858585] font-semibold">{props.name}</p>
        </div>
    );
}
 
export default CategoryCard;