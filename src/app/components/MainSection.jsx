"use client"
import Image from 'next/image';
import image from "../../../public/mainPic.svg"
import { rubik } from '../font';

const MainSection = () => {
  return (
    <section className='h-full flex flex-col md:flex-row'>
      <div className='w-full md:w-1/2 xl:w-2/5 flex flex-col items-start justify-center gap-5 pl-5 lg:pl-[50px] xl:pl-[100px] 2xl:pl-[200px] '>
        <h1 className={`${rubik.className} text-[70px] leading-[85px]`} >Get Better <br /> Care For<span className='text-[#032ff2]'>-</span> <br /> Your Health<span className='text-[#032ff2]'>.</span></h1>
        <h4 className='text-[20px]'>Quisque leo augue, lobortis ac tellus nec, posuere ultricies nulla. Praesent massa odio. </h4>
        <button className='transition-colors bg-[#032FF2] py-4 px-8 text-white rounded-[9px] hover:bg-transparent hover:text-[#032ff2] hover:border hover:border-[#032FF2]'>Learn More</button>
      </div>
      <div className='w-full md:w-1/2 xl:w-3/5 pr-5 lg:pr-0 h-auto lg:h-[675px] flex items-center'>
        <Image className='h-full 2xl:max-w-[1200px] 2xl:max-h-[1800px]' src={image} width={1200} height={1800} alt='doctors picture' />
      </div>
    </section>
  )
}

export default MainSection;