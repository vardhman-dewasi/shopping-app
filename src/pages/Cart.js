import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { CartItem } from '../components/CartItem';

export const Cart = () => {
  const {cart} = useSelector( (state) => state);
 const [totalAmount,setTotalAmount] = useState(0);

 useEffect(()=>{
  setTotalAmount(cart.reduce( (acc,curr) => acc + curr.price ,0));
 },[cart]);

  return (
    <div className='mt-24'>
      {
        cart.length > 0 ? 
        (
          <div className='flex justify-center flex-wrap'>

          <div className='max-w-[700px] flex-wrap'>
            {
              cart.map( (item,index) => {
                return <CartItem key={item.id} item={item} itemIndex = {index} />
              })
            }
          </div>
          
          <div className='flex flex-col justify-between m-8'>
             <div>
                <div className='text-green-800 text-2xl font-semibold'>Your Cart</div>
                <div className='text-green-700 font-bold text-5xl uppercase'>Summary</div>
                <p className='text-gray-600 font-semibold text-xl'>
                  <span>Total Items: {cart.length}</span>
                </p>
             </div>
              
              <div className='flex flex-col'>
                
                <div className='flex m-5'>
                <p className='text-gray-700 font-bold text-xl'>Total Amount </p>
                <p className='text-black font-bold text-xl'>: ${totalAmount}</p>
                </div>

                <button className='bg-green-700 h-12 max-w-[450px] rounded-md font-bold text-xl text-white'>
                  Checkout Now
                </button>
              </div>
          </div>

          </div>) :

        (<div className='w-full h-full flex flex-col justify-center items-center ' >
            <h1>Your cart is Empty !</h1>
            <Link to="/">
            <button className='bg-green-700 h-10 w-32 rounded-md font-bold text-xl text-white'>
              Shop Now
            </button>
            </Link>
          </div>
        )
      }
    </div>
  )
}
