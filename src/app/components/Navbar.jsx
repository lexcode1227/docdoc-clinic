"use client"
import Image from "next/image"
import Link from "next/link"
import Logo from "../../../public/Logo.svg"

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
    <header className="flex justify-around mt-2">
        <Image src={Logo} height={30} width={125} alt="company logo"/>
        <nav className="flex justify-between items-center gap-16">
            {navList.map((item)=> {
                return (
                    <Link key={item.name} href={item.to}>{item.name}</Link>
                )
            })}
        </nav>
        <button className="bg-[#EEEFFF] text-[#032FF2] p-3 rounded">Get Appointment</button>
    </header>
  )
}

export default Navbar