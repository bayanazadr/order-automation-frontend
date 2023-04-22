import PromotionSlider from '../components/PromotionSlider';
import PagesHeader from '../components/PagesHeader';
const Promotion = () => {
    const images = [
        {
            id: 1,
            src: "https://www.halfbakedharvest.com/wp-content/uploads/2022/06/Summer-Chicken-Salad-with-Hot-Bacon-Dressing-1.jpg",
            alt: "Image 1",
          },
          {
            id: 2,
            src: "https://images.ctfassets.net/uexfe9h31g3m/75gEiKZtDSpzhVVIctlrkW/452931c0ec089356f43674da8efa09fb/daisys_one_pot_pasta_1024x768.jpg?w=2000&h=1500&fm=jpg&fit=thumb&q=90&fl=progressive",
            alt: "Image 2",
          },
          {
            id: 3,
            src: "https://www.halfbakedharvest.com/wp-content/uploads/2022/06/Summer-Chicken-Salad-with-Hot-Bacon-Dressing-1.jpg",
            alt: "Image 3",
          },
          {
            id: 4,
            src: "https://popmenucloud.com/hbjtmxrs/7a9ba92f-b5f6-4997-ae53-e3e21e117547",
            alt: "Image 4",
          },
    ];
    return ( 
        <div className='w-full h-[100vh] flex flex-col'>
            <PagesHeader/>
            <PromotionSlider images={images}/>
            <div className='w-full absolute top-80 rounded-t-3xl h-1/2 bg-[#FACD5D]'>
                <div className='py-8 w-full px-6 flex flex-col items-start justify-start space-y-5'>
                <p className='text-2xl text-[#262628] font-semibold'>Bravo Burger</p>
                <div className='flex w-full space-x-4'>
                    <div className='text-xs font-medium py-2 text-white bg-black px-3 rounded'>$$</div>
                    <div className='text-xs font-medium py-2 text-white bg-black bg-opacity-30 px-3 rounded'>Burger</div>
                    <div className='text-xs font-medium py-2 text-white bg-black bg-opacity-30 px-3 rounded'>Fast Food</div>
                    <div className='text-xs font-medium py-2 text-white bg-black bg-opacity-30 px-3 rounded'>American Food</div>   
                </div>
                <div className='flex space-x-3'>
                    <p className='text-base font-semibold'>4,5</p>
                    <p className='text-base font-semibold'>309 Reviews </p>
                </div>
                </div>
                <div className='w-full h-full absolute bg-white rounded-t-3xl'>
                </div>
            </div>
        </div>
     );
}
 
export default Promotion;