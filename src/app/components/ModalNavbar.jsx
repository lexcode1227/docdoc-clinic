"use client"
import { FaTiktok, FaTimes } from "react-icons/fa";
import { RiInstagramFill, RiWhatsappFill,RiLinkedinFill  } from "react-icons/ri";
import Logo from "@public/Logo.svg"
import Image from "next/image"
import Link from "next/link"

const ModalNavbar = ({handleMenu}) => {
  const navList = [
    {
        name: "HOME",
        to: "/",
    },
    {
        name: "ABOUT US",
        to: "/about",
    },
    {
        name: "SERVICES",
        to: "/services",
    },
    {
        name: "BLOG",
        to: "/blog",
    },
    {
        name: "SHOP",
        to: "/shop",
    },
]
  return (
    <section className='h-[95vh] z-10 flex flex-col gap-40 justify-between mx-5 py-12 md:w-3/4'>
      <div className="flex justify-between">
        <Image src={Logo} height={30} width={125} alt="company logo"/>
        <button onClick={handleMenu}><FaTimes className="h-[30px] w-[30px]" /></button>
      </div>
      <div className="h-1/3 flex flex-col items-center gap-8 ">
        <nav className="flex flex-col items-center gap-3">
          {navList.map((item)=> {
            return (
                <Link key={item.name} href={item.to} className="text-[#5b5b5b] text-center font-medium hover:text-[#2b2e35] hover:font-bold">{item.name}</Link>
            )
          })}
        </nav>
        <Link href="/appointment" className="w-[250px] text-center bg-[#EEEFFF] text-[#032FF2] p-3 border border-transparent rounded-[10px] hover:border-[#032FF2] hover:border ">Get Appointment</Link> 
      </div>
      <div className="flex justify-around px-12">
          <Link href={"#"}><RiInstagramFill fill="#032ff2" className="h-[25px] w-[25px]" /> </Link>
          <Link href={"#"}><RiLinkedinFill fill="#032ff2" className="h-[25px] w-[25px]" /></Link>
          <Link href={"#"}><FaTiktok fill="#032ff2" className="h-[25px] w-[25px]" /></Link>
          <Link href={"#"}><RiWhatsappFill fill="#032ff2" className="h-[25px] w-[25px]" /></Link>
      </div>
    </section>
  )
}

export default ModalNavbar;