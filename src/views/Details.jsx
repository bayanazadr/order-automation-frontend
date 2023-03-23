import DetailsHeader from "../components/DetailsHeader";
import Options from "../components/Options";
import DetailsSlider from "../components/DetailsSlider";
import DetailsPrice from "../components/DetailsPrice";
import { useLocation } from "react-router-dom";

const Details = () => {
    const { state } = useLocation();
    return ( 
        <div className="flex flex-col items-center justify-between w-full h-[840px]">
            <div className="w-full">
            <DetailsHeader/>
            <DetailsSlider img={state.food.pictures}/>
            <Options title={state.food.title}/>
            </div>
            <DetailsPrice price={state.food.amount}/>
        </div>
     );
}
 
export default Details;