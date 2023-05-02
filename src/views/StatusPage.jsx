import { useState } from 'react';
import StatusHeader from '../components/StatusHeader';
import history from '../images/history.png'
const StatusPage = () => {
    return ( 
        <div className="h-screen flex flex-col bg-[#FACD5D]">
            <div className='rounded-b-3xl w-full h-[700px] space-y-6 bg-[#F7F7F7] px-6'>
               <StatusHeader/>
            <div className="bg-white w-full h-40 rounded-lg">
                <div className='flex justify-center items-center space-x-2'>
                    <img src={history} className='w-5 h-5' />
                <p className='text-2xl font-bold'>25min</p>
                </div>
            </div>
            <div className="bg-white w-full h-80 rounded-lg flex flex-col space-y-4">
                <p className='text-start text-[#FB6D3A] text-base font-bold'>Order Details</p>
                <div className='w-full flex justify-between'>
                    <p className='text-base font-bold'>Crispy Burger</p>
                    <p>$7,90</p>
                </div>
                <div className='w-full flex justify-between'>
                    <p className='text-base font-bold'>Rodeo Burger</p>
                    <p>$5,90</p>
                </div>
                <div className='w-full flex justify-between'>
                    <p className='text-base font-bold'>Chef's Burger</p>
                    <p>$7,90</p>
                </div>
                <div className='w-full flex justify-between'>
                    <p className='text-base font-bold'>Subtotal</p>
                    <p>$25,60</p>
                </div>
                <div className='w-full flex justify-between'>
                    <p className='text-base font-bold'>Promo code</p>
                    <p>HXFWO</p>
                </div>
                <div className='w-full flex justify-between'>
                    <p className='text-base font-bold'>Total</p>
                    <p className='text-[#FB6D3A] text-lg font-bold'>$23</p>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default StatusPage;