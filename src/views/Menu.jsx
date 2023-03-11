import FoodCard from "../components/FoodCard";
import Navbar from "../components/Navbar";

const Menu = () => {
const categories= [
    {
    img: 'https://png.pngtree.com/png-vector/20190129/ourlarge/pngtree-menu-vector-icon-png-image_355811.jpg',
    name: 'All'
    },
    {
    img: '',
    name: 'All'
    },
    {
    img: '',
    name: 'All'
    },
    {
    img: '',
    name: 'All'
    },
]


const foods= [
    {
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    name: 'CheeseBurger',
    price: '1200 tg'
    },
    {
    img: 'https://www.simplyrecipes.com/thmb/I4razizFmeF8ua2jwuD0Pq4XpP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg',
    name: 'Pepperoni Pizza',
    price: '3500 tg'
    },
    {
    img: 'https://thecozycook.com/wp-content/uploads/2022/08/Chicken-Alfredo-Pasta-1-1.jpg',
    name: 'Alfredo Pasta',
    price:'2600 tg'
    },
    {
    img: 'https://blog.urbanadventures.com/wp-content/uploads/2018/05/samarkand_plov.jpg',
    name: 'Uzbek Plov',
    price: '1800 tg'
    },
    {
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    name: 'Double Burger',
    price: '1200 tg'
    },
    {
    img: 'https://www.simplyrecipes.com/thmb/I4razizFmeF8ua2jwuD0Pq4XpP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg',
    name: 'Margarita Pizza',
    price: '3500 tg'
    },
    {
    img: 'https://thecozycook.com/wp-content/uploads/2022/08/Chicken-Alfredo-Pasta-1-1.jpg',
    name: 'Fetuccine Pasta',
    price:'2600 tg'
    },
    {
    img: 'https://blog.urbanadventures.com/wp-content/uploads/2018/05/samarkand_plov.jpg',
    name: 'kazakh Plov',
    price: '1800 tg'
    },
]
    return ( 
        <div className="w-full">
            <div className="bg-[#324A59] w-full">
            <div className="w-full flex flex-wrap justify-center">
                {foods.map((food) => (
                    <FoodCard img={food.img} key={food.name} name={food.name} price={food.price}/>
                ))}
            </div>
            </div>
            <Navbar/>
        </div>
     );
}
 
export default Menu;