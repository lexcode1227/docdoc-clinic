"use client"
import Link from "next/link"
import { rubik } from '../font';

const ContactBanner = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between h-auto md:h-[250px] mt-12 gap-6 mx-5 lg:mx-[50px] xl:mx-[100px] 2xl:mx-[200px]">
        <div className="flex flex-col justify-center gap-3 text-[#2b2e35] bg-[#EEEFFF] md:w-1/2 xl:w-2/5 h-[300px] md:h-[250px] px-6">
            <h4 className="w-full lg:w-[290px] text-[20px]"> <strong className="font-bold">Lorem ipsum dolor sit amet,</strong> <br /> consectetuer adipiscing elit, sed</h4>
            <Link href="/appointment" className="transition-colors w-full md:w-[290px] bg-[#032FF2] py-4 px-8 text-white text-center rounded-[9px] hover:bg-transparent hover:text-[#032ff2] hover:border hover:border-[#032FF2]">MAKE AN APPOINTMENT</Link>
        </div>
        <div className="flex flex-col justify-center gap-2 bg-[#EEEFFF] md:w-1/2 xl:w-2/5 h-[300px] md:h-[250px] px-6">
            <h4 className={`${rubik.className} text-[32px] text-[#5B5B5B] font-bold`}> Emergency Call</h4>
            <Link href={"#"}><h4 className={`${rubik.className} text-[48px] text-[#2B2E35] font-bold`}>+503 90897017</h4></Link>
        </div>
    </section>
  )
}

export default ContactBanner