import React from 'react'
import toast from 'react-hot-toast';
import {MdDelete} from "react-icons/md"
import { useDispatch } from 'react-redux'
import {remove} from "../redux/Slices/CartSlice"

export const CartItem = ({item,itemIndex}) => {
const dispatch = useDispatch();

  const removeFromCart = () =>{
      dispatch(remove(item.id));
      toast.success("Item removed from Cart");
  }

  return (
    <div className='w-full flex justify-center items-center flex-wrap m-4 mb-20 '>

      <div className='w-11/12 h-[1px] bg-slate-500 mb-6'></div>

        <div className='h-[200px] w-[160px]'>
          <img src={item.image}  alt='' className=' w-full h-full'></img>
        </div>

        <div className='m-16'>
            <div className='max-w-[400px] min-w-[200px'>
              <h1 className='text-xl font-semibold text-slate-600 mb-2'>{item.title}</h1>
              <p>{item.description.substring(1,70)+"...."}</p>
            </div>

            <div className='flex justify-between'>
                <p className='text-green-600 font-bold text-xl'>${item.price}</p>

                <div className='bg-red-300 h-10 w-10 rounded-full flex justify-center items-center hover:bg-red-600' onClick={removeFromCart}>
                  <MdDelete/>
                </div>
            </div>
        </div>
        
    </div>
  )
}
