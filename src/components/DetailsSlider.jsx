import burger_detail from '../images/burger_detail.png'
const DetailsSlider = () => {
    return ( 
        <div className='bg-[#F7F8FB] w-[325px] h-[146px] rounded-[12px] ml-[35px] py-[100px] w-full flex items-center justify-center'>
            <img className='w-[145px] h-[109px]' src={burger_detail}/>
        </div>
     );
}
 
export default DetailsSlider;