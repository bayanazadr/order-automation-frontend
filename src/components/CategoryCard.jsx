const CategoryCard = (props) => {
    return (  
        <div className="w-[70px] shadow-md rounded-2xl " >
           <div>
            <img className="rounded-2xl" src={props.img}></img>
                </div> 
            <p className="text-[#001833] font-semibold">{props.name}</p>
        </div>
    );
}
 
export default CategoryCard;