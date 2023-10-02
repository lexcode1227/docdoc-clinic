"use client"
import Image from "next/image"
import Link from "next/link"
import Logo from "@public/Logo.svg"
import { FaStream } from "react-icons/fa";
import ModalNavbar from "./ModalNavbar"

const Navbar = ({openMenu, handleMenu}) => {
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
    <>
        {openMenu ? 
        <ModalNavbar handleMenu={handleMenu} /> : 
        <header className="mx-5 my-6 flex justify-between items-center lg:hidden">
            <Image src={Logo} height={30} width={125} alt="company logo"/>
            <button onClick={handleMenu}> <FaStream className="h-[30px] w-[30px]"/> </button>
        </header> }
        <header className="hidden lg:flex justify-between mt-2 md:mx-[50px] xl:mx-[100px] 2xl:mx-[200px]  ">
            <Image src={Logo} height={30} width={125} alt="company logo"/>
            <nav className="flex justify-between items-center gap-16">
                {navList.map((item)=> {
                    return (
                        <Link key={item.name} href={item.to} className="text-[#5b5b5b] font-medium hover:text-[#2b2e35] hover:font-bold">{item.name}</Link>
                    )
                })}
            </nav>
            <button className="bg-[#EEEFFF] text-[#032FF2] p-3 border border-transparent rounded-[10px] hover:border-[#032FF2] hover:border ">Get Appointment</button>
        </header>
    </>    
  )
}

export default Navbar