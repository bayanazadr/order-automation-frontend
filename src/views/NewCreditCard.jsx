// import React, { useState } from 'react';
// import Cards from 'react-credit-cards';
// import "react-credit-cards/es/styles-compiled.css";
// import CardsHeader from '../components/CardsHeader';
// import CardsFooter from '../components/CardsFooter';
// const NewCreditCard = () => {
//     const [data, setData] = useState({
//         cvc: "",
//         expiry: "",
//         name: "",
//         number: ""
//     });

//     const handleInputChange = (e) => {
//         setData({
//             ...data,
//             [e.target.name]: e.target.value
//         });
//     };
//     return ( 
//         <div className='flex flex-col  items-center justify-center space-y-16'>
//             <CardsHeader/>
//             <Cards
//             cvc={data.cvc}
//             expiry={data.expiry}
//             name={data.name}
//             number={data.number}
//             />
//             <form action='' className='flex flex-col w-[200px] space-y-4 '>
//                 <input className='border-2' 
//                 type="number"
//                 name="cvc"
//                 placeholder='CVC'
//                 onChange={handleInputChange}
//                 />

//                 <input className='border-2'
//                 type="date"
//                 name="expiry"
//                 placeholder='Expire Date'
//                 onChange={handleInputChange}
//                 />

//                 <input className='border-2'
//                 type="text"
//                 name="name"
//                 placeholder='Your Name'
//                 onChange={handleInputChange}
//                 />

//                 <input className='border-2'
//                 type="number"
//                 name="number"
//                 placeholder='Card Number'
//                 onChange={handleInputChange}
//                 />
//             </form>
        
//             <CardsFooter/>
            
//         </div>
        
//      );
// }
 
// export default NewCreditCard;