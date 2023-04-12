import promotion from '../images/promotion.png'
const PromotionCard = () => {
    return ( 
        <div className="flex items-center justify-center bg-red-400 flex-col">
            <img className="w-[360px] rounded-2xl inline-block" src={promotion}></img>
        </div>
     );
}
 
export default PromotionCard;   