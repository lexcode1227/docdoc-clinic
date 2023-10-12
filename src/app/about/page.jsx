import React from 'react'
import AboutHospital from '@/app/components/AboutHospital';
import service1 from "@public/service1.svg";
import { rubik } from "../font";
import Image from 'next/image';
import Accordion from '../components/Accordion';

const About = () => {
  return (
    <>
      <section className='flex flex-col gap-8 my-10 lg:my-20 mx-5 lg:mx-[50px] xl:mx-[100px] 2xl:mx-[200px]'>
        <h1 className={`${rubik.className} text-6xl lg:text-7xl xl:text-[80px] font-bold text-[#2b2e35] mb-8`}>About Us</h1>
        <div className='flex flex-col md:flex-row gap-5 mb-14'>
          <h3 className='text-4xl font-bold text-[#2b2e35]'>Providing the best care for every patient, every day.</h3>
          <p className='w-full md:max-w-[50%] text-[#5b5b5b] text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita praesentium sed repellendus minima assumenda molestias magni facilis architecto reiciendis voluptates incidunt, sapiente optio magnam deleniti nisi illo cum necessitatibus esse!</p>
        </div>
        <div className='flex flex-col lg:flex-row gap-5'>
          <div className='flex flex-col gap-8 w-full lg:w-3/5'>
            <h3 className='text-4xl font-bold text-[#2b2e35]' >Building a <span className=' font-bold text-[#032FF2]'>healthier</span> community, one patient at a time.</h3>
            <div className='flex flex-col md:flex-row gap-5'>
              <p className='w-full md:max-w-[50%] text-[#5b5b5b] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat adipisci excepturi sunt mollitia. Voluptatum deserunt praesentium iste sit distinctio atque ipsam corrupti temporibus veniam molestiae eaque, fugiat omnis reiciendis neque illo porro repellat inventore voluptates? Non voluptates saepe et impedit dicta est doloribus ea quae? Sit iure voluptatum impedit fugiat aut quidem dolores ea? Sed deleniti molestias accusamus, cupiditate, sit quis minima iusto iste nemo, vel nostrum quae. Libero, nobis?</p>
              <p className='w-full md:max-w-[50%] text-[#5b5b5b] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat adipisci excepturi sunt mollitia. Voluptatum deserunt praesentium iste sit distinctio atque ipsam corrupti temporibus veniam molestiae eaque, fugiat omnis reiciendis neque illo porro repellat inventore voluptates? Non voluptates saepe et impedit dicta est doloribus ea quae? Sit iure voluptatum impedit fugiat aut quidem dolores ea? Sed deleniti molestias accusamus, cupiditate, sit quis minima iusto iste nemo, vel nostrum quae. Libero, nobis?</p>
            </div>
          </div>
          <Image className='w-full lg:w-2/5' src={service1} width="auto" height="auto" alt='medical team picture'/>
        </div>
      </section>
      <AboutHospital/>
      <section className='flex flex-col gap-5 my-10 lg:my-20 mx-5 lg:mx-[50px] xl:mx-[100px] 2xl:mx-[200px]'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          <h3 className='text-4xl font-bold w-full md:max-w-[50%] text-center md:text-right text-[#032FF2]'>Board of Directors</h3>
          <p className='w-full md:max-w-[50%] text-[#5b5b5b] text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga assumenda sit dolor vero harum maxime, earum, commodi explicabo in tempora facilis quam vel iure perspiciatis cupiditate porro aliquid ipsam vitae tempore ea inventore officia cumque corporis cum? Corrupti numquam dolores voluptatem tempora perferendis ipsum, magnam ad dolor, vitae praesentium sequi.</p>
        </div>
        <Accordion/>
      </section>
    </>
  )
}

export default About;