"use client"
import Image from 'next/image'
import Link from 'next/link'
import { rubik } from '../font'
import Logo from "@public/Logo.svg";
import { FaTiktok } from "react-icons/fa";
import { RiInstagramFill, RiWhatsappFill,RiLinkedinFill  } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className='h-auto lg:h-[350px] bg-[#EEEFFF] pt-10'>
        <div className='flex flex-col justify-between items-center md:items-start  gap-8 mx-5 mb-11 md:flex-wrap md:flex-row lg:mx-[50px] xl:mx-[100px] 2xl:mx-[200px]'>
                <div className='flex flex-col gap-8 w-full md:w-[215px] xl:w-[270px]  '>
                    <Image src={Logo} width={119} height={30} alt='company logo'/>
                    <p className='text-[#5b5b5b]' >If you’re in need of medicines – we’re here by your side. <br/> Stay safe and buy online!</p>
                    <div className="flex justify-evenly px-12 md:px-0">
                        <Link href={"#"} ><RiInstagramFill fill="#032ff2" className="h-[23px] w-[23px]" /> </Link>
                        <Link href={"#"} ><RiLinkedinFill fill="#032ff2" className="h-[23px] w-[23px]" /></Link>
                        <Link href={"#"} ><FaTiktok fill="#032ff2" className="h-[23px] w-[23px]" /></Link>
                        <Link href={"#"} ><RiWhatsappFill fill="#032ff2" className="h-[23px] w-[23px]" /></Link>
                    </div>
                </div>
                <div className='flex flex-col gap-8 justify-between w-full md:w-auto'>
                    <h4 className={`${rubik.className} font-bold text-[#2b2e35] text-xl`} >Useful Pages</h4>
                    <ul className='flex md:flex-col justify-between gap-3 text-[#5b5b5b]'>
                        <Link href="#" >Home</Link>
                        <Link href="#" >About</Link>
                        <Link href="#" >Services</Link>
                        <Link href="#" >Blog</Link>
                        <Link href="#" >Shop</Link>
                    </ul>
                </div>
                <div className='w-full gap-8 md:w-[215px] xl:w-[276px] flex flex-col justify-between'>
                    <h4 className={`${rubik.className} font-bold text-[#2b2e35] text-xl`} >Contacts</h4>
                    <div className='flex flex-col gap-3'>
                        <p  className='text-base text-[#5b5b5b]'>176 W Street Name, New York, NY 10014</p>
                        <p className='text-base text-[#5b5b5b]'>(123) 456-78-90</p>
                        <p className='text-base text-[#5b5b5b]'>(123) 456-78-90</p>
                        <p className='text-base text-[#5b5b5b]'>sales@example.com</p>
                    </div>
                </div>
                <div className='w-full md:w-[245px] xl:w-[285px] flex flex-col gap-5'>
                    <h4 className={`${rubik.className} font-bold text-[#2b2e35] text-xl`} >Contacts</h4>
                    <p className='text-base text-[#5b5b5b]'>Join our newsletter and receive 10% off your first puchase</p>
                    <form action="" className='flex w-[300px] md:w-full'>
                        <input type="email" name="" id="" placeholder='Enter Your Mail' className='rounded-xl bg-[#032FF2] w-4/5 p-4 text-white' />
                        <button type="submit" className='bg-white w-[90px] relative right-6 p-6 rounded-xl'>OK</button>
                    </form>
                </div>
            </div>
    </footer>
  )
}

export default Footer