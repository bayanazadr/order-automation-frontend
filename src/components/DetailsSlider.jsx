import burger_detail from '../images/burger_detail.png'
const DetailsSlider = ({img}) => {
    return ( 
        <div className='w-full flex items-center justify-center'>
            <div className='bg-[#F7F8FB] rounded-[12px] h-80 w-[90%]'>
            <img className=' rounded-2xl h-full w-full' src={img}/>
        </div>
        </div>
     );
}
 
export default DetailsSlider;