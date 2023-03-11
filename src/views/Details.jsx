import DetailsHeader from "../components/DetailsHeader";
import Options from "../components/Options";
import DetailsSlider from "../components/DetailsSlider";
import DetailsPrice from "../components/DetailsPrice";

const Details = () => {
    return ( 
        <div>
            <DetailsHeader/>
            <Options/>
            <DetailsSlider/>
            <DetailsPrice/>
        </div>
     );
}
 
export default Details;