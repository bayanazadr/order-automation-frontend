import burger_detail from '../images/burger_detail.png'
const DetailsSlider = () => {
    return ( 
        <div className='w-full flex items-center justify-center'>
            <div className='bg-[#F7F8FB] h-[146px] rounded-[12px] py-[100px] w-[90%] flex items-center justify-center'>
            <img src={burger_detail}/>
        </div>
        </div>
     );
}
 
export default DetailsSlider;