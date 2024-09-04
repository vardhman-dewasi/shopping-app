import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
 const Navbar = () => {
    const {cart} = useSelector((state) => state);
  return (
    <div className='w-full bg-slate-900 flex justify-center h-20  fixed z-10'> 
        <nav className='w-[1080px]  flex items-center  justify-between'>

            <NavLink to="/">
            <div className='ml-5'>
                <img src='./logo.png' alt='' className='h-14'></img>
            </div>
            </NavLink>

            <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
                <NavLink to="/">
                <p>Home</p>
                </NavLink>
                
                <NavLink to="/cart">
                    <div className='relative'>
                    <FaShoppingCart className='text-2xl'/>
                    {
                        cart.length > 0 &&
                        <div className='absolute -top-1 -right-2 bg-green-600 w-5 h-5 rounded-full flex justify-center items-center text-white animate-bounce'>{cart.length}</div>
                    }
                    
                    </div>
                </NavLink>

            </div>
        
        </nav>
    </div>
  )
}
export default Navbar;
