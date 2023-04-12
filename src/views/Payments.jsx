import PaymentHeader from '../components/PaymentHeader';
import PaymentMethod from '../components/PaymentMethod';
import PaymentNewCard from '../components/PaymentNewCard';
import PaymentFooter from '../components/PaymentFooter';
import creditcard from '../images/creditcard.png';
import cash from '../images/cash.png';
import QR from '../images/QR.png';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Payments = () => {
    // const { state } = useLocation([]);
    // let card = []
    // const addNewCard = () => {
    //     card.push(state.cards)
    //     console.log(card)
    // }

    const methods=[
        {
            img: creditcard,
            name:'Credit Card'
        },
        {
            img: cash,
            name: 'Cash'
        },
        {
            img: QR,
            name: 'QR'
        }
    ]
    return ( 
        <div className="h-screen flex flex-col bg-[#FFCC00]">
            <div className='rounded-b-lg  w-full h-[700px] space-y-6 bg-[#F7F7F7]'>
                <PaymentHeader/>
            <div className="flex flex-nowrap space-x-3.5 mb-28">
                {methods.map((method) => (
                    <PaymentMethod img={method.img} key={method.name} name={method.name} />
                ))}
            </div>
            <div className='flex justify-center'>
                    <PaymentNewCard/>
            </div>
            </div>

            <div className='px-20 py-6'>
                <PaymentFooter/>
            </div>

            {/*<PaymentNewCard addNewCard={addNewCard} cards={state.cards}/>  */}
        </div>
     );
}
 
export default Payments;