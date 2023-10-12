import React from 'react'
import { rubik } from "../font";
import StillWorking from '../components/StillWorking';

const Shop = () => {
  return (
    <section className='flex flex-col my-10 lg:my-20 mx-5 lg:mx-[50px] xl:mx-[100px] 2xl:mx-[200px]'>
      <h1 className={`${rubik.className} text-6xl lg:text-7xl xl:text-[80px] font-bold text-[#2b2e35]`}>Shop</h1>
      <StillWorking/>
    </section>
  )
}

export default Shop;