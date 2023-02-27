const FoodCard = (props) => {
    return ( 
        <div className="w-44 h-56 bg-[#F7F8FB] rounded-2xl flex flex-col shadow-md">
            <div className="w-full h-auto flex justify-center items-center">
                <img className="mt-4 w-10/12 h-36 rounded-2xl" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"></img>
            </div>
            <div className="flex flex-col w-full h-auto items-start ml-6 mt-2">
                <p className="text-[#001833] font-semibold">Burger</p>
                <p className="text-[#757575]">1200 tg</p>
            </div>
        </div>
     );
}
 
export default FoodCard;