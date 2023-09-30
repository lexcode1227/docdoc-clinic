import Image from 'next/image'
import Link from 'next/link'
import { rubik } from '../font'
import Logo from "@public/Logo.svg";
import Img from "/Users/pc/Desktop/docdoc-app/src/app/images/VectorFooter.svg"


const Footer = () => {
    const bg_custom_image = {
        backgroundImage: 'url("/src/app/images/VectorFooter.svg")',
        // backgroundImage: `url(${Img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "545px",
      };
  return (
    <footer className='h-[350px] bg-[#EEEFFF] pt-10'>
        <div className='flex justify-between gap-4 lg:mx-[50px] xl:mx-[100px] 2xl:mx-[200px]'>
                <div className='flex flex-col gap-7 lg:w-[215px] xl:w-[270px]  '>
                    <Image src={Logo} width={119} height={30} alt='company logo'/>
                    <p className='text-[#5b5b5b]' >If you’re in need of medicines – we’re here by your side. <br/> Stay safe and buy online!</p>
                    <div>
                        
                    </div>
                </div>
                <div className='flex flex-col gap-8 justify-between'>
                    <h4 className={`${rubik.className} font-bold text-[#2b2e35] text-xl`} >Useful Pages</h4>
                    <ul className='flex lg:flex-col gap-3 text-[#5b5b5b]'>
                        <Link href="#" >Home</Link>
                        <Link href="#" >About</Link>
                        <Link href="#" >Services</Link>
                        <Link href="#" >Blog</Link>
                        <Link href="#" >Shop</Link>
                    </ul>
                </div>
                <div className='lg:w-[215px] xl:w-[276px] flex flex-col justify-between'>
                    <h4 className={`${rubik.className} font-bold text-[#2b2e35] text-xl`} >Contacts</h4>
                    <div className='flex flex-col gap-3'>
                        <p  className='text-base text-[#5b5b5b]'>176 W Street Name, New York, NY 10014</p>
                        <p className='text-base text-[#5b5b5b]'>(123) 456-78-90</p>
                        <p className='text-base text-[#5b5b5b]'>(123) 456-78-90</p>
                        <p className='text-base text-[#5b5b5b]'>sales@example.com</p>
                    </div>
                </div>
                <div className='lg:w-[245px] xl:w-[270px] flex flex-col gap-3'>
                    <h4 className={`${rubik.className} font-bold text-[#2b2e35] text-xl`} >Contacts</h4>
                    <p className='text-base text-[#5b5b5b]'>Join our newsletter and receive 10% off your first puchase</p>
                    <form action="" className='flex w-full'>
                        <input type="email" name="" id="" placeholder='Enter Your Mail' className='rounded-xl bg-[#032FF2] w-4/5 p-4 text-white' />
                        <button type="submit" className='bg-white w-[90px] relative right-6 p-6 rounded-xl'>OK</button>
                    </form>
                </div>
            </div>
    </footer>
  )
}

export default Footer