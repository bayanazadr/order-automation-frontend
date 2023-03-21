import DetailsHeader from "../components/DetailsHeader";
import Options from "../components/Options";
import DetailsSlider from "../components/DetailsSlider";
import DetailsPrice from "../components/DetailsPrice";

const Details = () => {
    return ( 
        <div className="flex flex-col items-center justify-between w-full h-[840px]">
            <div className="w-full">
            <DetailsHeader/>
            <DetailsSlider/>
            <Options/>
            </div>
            <DetailsPrice/>
        </div>
     );
}
 
export default Details;