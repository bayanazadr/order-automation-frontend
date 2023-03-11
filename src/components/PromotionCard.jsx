import promotion from '../images/promotion.png'
const PromotionCard = () => {
    return ( 
        <div className="flex items-center justify-center w-full flex-col">
            <img className="w-[360px] rounded-2xl" src={promotion}></img>
        </div>
     );
}
 
export default PromotionCard;   