import DetailsHeader from "../components/DetailsHeader";
import Options from "../components/Options";
import DetailsSlider from "../components/DetailsSlider";
import DetailsPrice from "../components/DetailsPrice";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Details = () => {
    const { state } = useLocation();
    let basket = []
    const addToBasket = () => {
        basket.push(state.food)
        console.log(basket)
    }
    return ( 
        <div className="flex flex-col items-center justify-between w-full h-[840px]">
            <div className="w-full">
            <DetailsHeader/>
            <DetailsSlider img={state.food.pictures}/>
            <Options title={state.food.title}/>
            </div>
            <DetailsPrice addToBasket={addToBasket} food={state.food}/>
        </div>
     );
}
 
export default Details;