"use client"
import Image from "next/image"
import Link from "next/link"
import Logo from "@public/Logo.svg"

const Navbar = () => {
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
    <header className="flex justify-between mt-2 lg:mx-[50px] xl:mx-[100px] 2xl:mx-[200px] ">
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
  )
}

export default Navbar