import {useEffect, useState} from 'react';
import PagesHeader from '../components/PagesHeader';
import {useLocation} from "react-router-dom";
import {getDishById} from "../controllers/Controllers";

const Details = () => {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get('id');
  const [details, setDetails] = useState([])
  const fetchDetails = async(uuid) => {
    await getDishById(uuid)
        .then(res => {
            setDetails(res.data)
        });
      }

  const getSrc = (data) => {
    if(data.pictures === undefined){
      return ""
    } else {
        try {
            return JSON.parse(data.pictures)[0]
        } catch (e) {
            console.error('1WN99a7i :: Incorrect image link ', e)
        }
    }
  }
    useEffect(() => {
      fetchDetails(id).then()
    }, [])

    return (
        <div className='w-full h-[100vh] flex flex-col'>
          <PagesHeader/>
            <div className="h-96 flex flex-col relative w-full max-w-lg mx-auto">
              <img
                src={getSrc(details)}
                className="w-full h-64 object-cover"
              />
              </div>
            <div className='w-full absolute top-60 rounded-t-3xl h-4/5 bg-white'>
                <div className='py-8 w-full px-6 flex flex-col items-start justify-start space-y-5'>
                <p className='text-2xl text-[#262628] font-semibold'>{details.title}</p>
                <div className='w-full text-left '>
                    <p className='font-sm text-[#262628]/50'>{details.description}</p>
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
                    <p className='text-white pr-3 pt-2'>{details.price} tg</p>
                </div>
                </div>
                </div>
            </div>

        </div>
     );
}

export default Details;