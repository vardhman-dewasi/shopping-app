import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {add,remove} from "../redux/Slices/CartSlice"

 const Product = ({item}) => {
  const {cart} = useSelector( (state) => state);
  const dispatch = useDispatch();

  const addToCart =() =>{
    dispatch(add(item));
    toast.success("Item added to Cart");
  }

  const removeItem=() =>{
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  }

  return (
    <div className=" max-w-72 h-full flex flex-col items-center justify-between  hover:scale-110 transition duration-300 ease-in border rounded-lg shadow-2xl hover:shadow-black hover:shadow-2xl p-2 gap-4 mt-10">
      <div>
         <p className='text-gray-700 font-semibold text-lg  truncate w-40 mt-1'>{item.title}</p>
      </div>
      <div>
         <p className='w-full p-2 text-gray-500 font-normal text-left'>{item.description.substring(1,75) + "..." }</p>
      </div>
      <div className='h-[180px]'>
        <img src={item.image} alt='' className=' h-full w-full'></img>
      </div>
      
      <div className='w-full flex justify-between'>
        <div className='text-green-600 font-bold ml-2'>
          <p>${item.price}</p>
        </div>
        <div>
        {
          cart.some( (p) => p.id === item.id) ?
          <button onClick={removeItem} className='border-2 border-slate-700 rounded-full h-10 w-32 hover:bg-slate-800 hover:font-bold hover:text-white'>Remove Item</button>
          : 
          <button className='border-2 border-slate-700 rounded-full h-10 w-32 hover:bg-slate-800 hover:font-bold hover:text-white' onClick={addToCart}>Add to Cart</button>
        }
        </div>
        
        </div>
    </div>
  )
}
export default Product;
