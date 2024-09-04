import React, { useEffect, useState } from 'react'
import Spinner from "../components/Spinner"
import toast from 'react-hot-toast';
import Product from '../components/Product';
import data from "../data"

export const Home = () => {
// const API_URL = "https://fakestoreapi.com/products";
const [loading, setLoading] = useState(false);
const [items,setItems] = useState([]);

async function fetchProductData() {
  setLoading(true);
  try{
    setItems(data);
  }
  catch(error){
      toast.error("Data not found");
      setItems([]);
  }
  
  setLoading(false);
}

 useEffect( () => {
  fetchProductData();
 },[]);

  return (
    <div className='mt-10'>
      {
        loading ? (<Spinner/>) :
        (items.length > 0 ? 
          (
            <div className='flex justify-center flex-wrap w-full p-2 mx-auto space-y-10 space-x-5 mt-10'>
              {
                items.map( (item) => (
                  <Product key={item.id} item={item} />
                ) )
              }
            </div>
          )
         : 
         (<div>
          <p>No Data Found</p>
         </div>)
        )
      }
    </div>
  )
}
