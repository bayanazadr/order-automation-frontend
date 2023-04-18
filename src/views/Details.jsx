import DetailsHeader from '../components/DetailsHeader';
import Navbar from '../components/Navbar';
import cover_details from '../images/cover_details.png'

const Details = () => {
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
            <DetailsHeader/>
            <div className="h-96 bg-red-500 flex flex-col relative w-full max-w-lg mx-auto">
              <img
                src={cover_details}
                className="w-full h-64 object-cover"
              />
              </div>
            <div className='w-full absolute top-60 rounded-t-3xl h-4/5 bg-white'>
                <div className='py-8 w-full px-6 flex flex-col items-start justify-start space-y-5'>
                <p className='text-2xl text-[#262628] font-semibold'>5 Cheese Pie</p>
                <div className='w-full text-left '>
                    <p className='font-sm text-[#262628]/50'>Five Cheese Pizza. This is a special, splendid blend of 100% real mozzarella, parmesan, Romano, fontina and Asiago cheeses piled on top of a crispy, crunchy crust with a crazy, savory sauce. </p>
                </div>
                <p className='text-base font-bold text-[#FB6D3A]'>Let’s make it better? </p>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex w-full'>
                    <input id='checkbox' type='checkbox' className='border-2 border-[#503E9D] w-5 h-5 accent-[#503E9D]'/>
                    <label for="checkbox" className='text-sm font-bold pl-4'>Extra Tomatoes</label>
                    </div>
                    <p className='text-base text-[#503E9D] font-bold'>$2</p>
                </div>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex w-full'>
                    <input id='checkbox' type='checkbox' className='border-2 border-[#503E9D] w-5 h-5 accent-[#503E9D]'/>
                    <label for="checkbox" className='text-sm font-bold pl-4'>Extra Olive</label>
                    </div>
                    <p className='text-base text-[#503E9D] font-bold'>$2</p>
                </div>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex w-full'>
                    <input id='checkbox' type='checkbox' className='border-2 border-[#503E9D] w-5 h-5 accent-[#503E9D]'/>
                    <label for="checkbox" className='text-sm font-bold pl-4'>Extra Savory Sause</label>
                    </div>
                    <p className='text-base text-[#503E9D] font-bold'>$2</p>
                </div>
                <div className='w-full flex flex-col space-y-5 pt-10'>
                <div className='w-full h-14 bg-black/10 flex items-center rounded-xl'>
                    <p className='text-[#A3A3A4] text-3xl pl-5'>+</p>
                    <p className='text-[#A3A3A4] pl-3 pt-2'>Any special request?</p>
                </div>
                <div className='w-full h-14 bg-[#FB6D3A] flex items-center rounded-xl justify-between'>
                    <div className='flex'>
                    <p className='text-white text-3xl pl-5'>+</p>
                    <p className='text-white font-bold pl-3 pt-2'>Add to Order</p>
                    </div>
                    <p className='text-white pr-3 pt-2'>$25,00</p>
                </div>
                </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Details;