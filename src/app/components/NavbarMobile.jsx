"use client"
import { FaStream } from "react-icons/fa";
import Logo from "@public/Logo.svg"
import Image from "next/image"

const NavbarMobile = ({handleMenu}) => {
  return ( 
    <header className="mx-5 my-6 flex justify-between items-center">
        <Image src={Logo} height={30} width={125} alt="company logo"/>
        <nav className="hidden"><a href="/">HOME</a></nav>
        <button onClick={handleMenu}> <FaStream className="h-[30px] w-[30px]"/> </button>
    </header>
  )
}

export default NavbarMobile