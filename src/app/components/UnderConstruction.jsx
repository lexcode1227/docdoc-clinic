import React from 'react'
import { rubik } from "../font";
import Image from 'next/image';
import image from "@public/Maintenance.svg"
import Link from 'next/link';

const UnderConstruction = ({title}) => {
  return (
    <section className='flex flex-col gap-8 h-auto'>
      <h1 className={`${rubik.className} text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-[#2b2e35]`}>{title}</h1>
      <div className='flex flex-col md:flex-row gap-8'>
        <div className='w-full md:w-1/2 xl:w-2/5 flex flex-col items-start justify-center gap-5 text-[#2b2e35]'>
          <h1 className={`${rubik.className} text-4xl md:text-5xl`} >This site is <span className='text-[#032ff2]'>under construction</span></h1>
          <Link href={"/"} className='transition-colors bg-[#032FF2] py-4 px-8 text-white rounded-[9px] hover:bg-transparent hover:text-[#032ff2] hover:border hover:border-[#032FF2]'>Go Home</Link>
        </div>
        <div className='w-full md:w-1/2 xl:w-3/5 h-auto lg:h-[475px] flex justify-center items-center'>
          <Image className='h-full 2xl:max-w-[1200px] 2xl:max-h-[1200px]' src={image} width={1500} height={1500} alt='web in maintenance' />
        </div>
      </div>
    </section>
  )
}

export default UnderConstruction;