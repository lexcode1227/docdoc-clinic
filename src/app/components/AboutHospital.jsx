"use client"
import Image from 'next/image'
import DoctorImg from "../../../public/doctorsWorking.svg"
import { rubik } from '../font';

const AboutHospital = () => {
  return (
    <section className='bg-[#EEEFFF] mt-20 pb-10'>
        <div className='flex flex-col lg:flex-row gap-3 justify-center mx-5 lg:mx-[50px] xl:mx-[100px] 2xl:mx-[200px] my-9'>
            <div className='w-full lg:w-1/2 h-auto lg:h-[500px] flex justify-center'>
                <Image src={DoctorImg} width="auto" height="auto" alt='doctors working picture' />
            </div>
            <div className='w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-6'>
                <h2 className={`${rubik.className} text-center text-[42px] text-[#2B2E35] font-bold`}>About Our <span className='text-[42px] font-bold text-[#032FF2]'>Hospital</span></h2>
                <p className='text-base max-w-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <div className='text-base'>
                    <h5>Browse Our Website</h5>
                    <h5>Choose Service</h5>
                    <h5>Send Messege</h5>
                </div>
                <button className='transition-colors bg-[#032FF2] text-white text-base w-[270px] h-[60px] rounded-[10px] hover:bg-transparent hover:text-[#032ff2] hover:border hover:border-[#032FF2]'>Know More</button>
            </div>
        </div>
    </section>
  )
}

export default AboutHospital