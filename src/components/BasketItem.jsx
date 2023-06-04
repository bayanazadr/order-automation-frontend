import trash from '../images/trash.png'
import {useEffect, useState} from "react";

const BasketItem = ({ basket, onDeleteItem, onIncrementDishCount, onReduceDishCount }) => {
  const [dishAmount, setDishAmount] = useState(basket.dishAmount || 1);

  useEffect(() => {
    setDishAmount(basket.dishAmount || 1);
  }, [basket]);

  const deleteBasketItem = () => {
    onDeleteItem(basket.uuid);
  };

  const incrementDishCount = () => {
    let count = Number(dishAmount)
    setDishAmount(++count)
    onIncrementDishCount(basket.price);
  };

  const reduceDishCount = () => {
    let count = Number(dishAmount)
    if (count > 1) {
      setDishAmount(--count)
      onReduceDishCount(basket.price);
    } else {
      deleteBasketItem();
    }
  }

  return (
    <div className='w-full h-20 flex justify-between items-center'>
      <div className='flex flex-col items-start'>
        <p className='text-base font-bold'>{basket.title}</p>
        <p className='text-base'>{basket.price} tg</p>
      </div>
      <div className='bg-[#979797]/10 w-32 h-12 flex items-center justify-center rounded-lg'>
        <button className='w-12 h-12 flex items-center justify-center'>
          <img src={trash} onClick={deleteBasketItem} alt='Delete' />
        </button>
        <button onClick={reduceDishCount} className='w-12 h-12 text-2xl font-semibold text-[#FB6D3A]'>-</button>
        <p className='flex items-center justify-center w-10 h-12 text-base font-semibold'>{dishAmount}</p>
        <button onClick={incrementDishCount} className='w-12 h-12 text-2xl font-semibold text-[#FB6D3A]'>+</button>
      </div>
      
    </div>
  );
}

export default BasketItem;