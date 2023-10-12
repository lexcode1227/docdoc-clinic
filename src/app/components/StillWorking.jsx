import React from 'react'
import { rubik } from "../font";
import Image from 'next/image';
import image from "../../../public/mainPic.svg"

const StillWorking = () => {
  return (
    <section className='flex'>
        <div className='w-full md:w-1/2 xl:w-2/5 flex flex-col items-start justify-center gap-5 pl-5 text-[#2b2e35]'>
            <h1 className={`${rubik.className} text-[70px] leading-[85px] `} >Still Working <span className='text-[#032ff2]'>on</span></h1>
        </div>
        <div className='w-full md:w-1/2 xl:w-3/5 h-auto lg:h-[675px] flex items-center'>
            <Image className='h-full 2xl:max-w-[1200px] 2xl:max-h-[1800px]' src={image} width={1200} height={1800} alt='doctors picture' />
        </div>
    </section>
  )
}

export default StillWorking