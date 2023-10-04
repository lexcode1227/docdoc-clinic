"use client"
import Image from "next/image"
import medicine from "@public/medicine_pic.svg"
import Link from "next/link";

const MedicalDep = () => {
    const Deptos = ["SURGERY", "MICROBIOLOGY", "PATHOLOGY"];
  return (
    <section className="flex justify-center items-center bg-[#EEEFFF] h-auto lg:h-[600px] ">
        <div className="flex flex-col lg:flex-row gap-5 lg:h-5/6 xl:h-3/4 mx-5 lg:mx-[50px] xl:mx-[100px]">
            <div className="flex flex-col items-start justify-between gap-6 py-5 lg:gap-2 mt-12 lg:mt-0 w-full lg:w-1/2">
                <header className="w-full lg:w-[457px]">
                    <h2 className="text-[32px] text-[#2b2e35] font-bold mb-3">MEDICAL DEPARTMENTS</h2>
                    <h3 className="text-xl text-[#5b5b5b] font-semibold">The Backbone of our Clinic</h3>
                </header>
                <div className="lg: xl:w-[570px]">
                    <h3 className="text-xl text-[#5b5b5b] font-semibold">MODERN EQUIPMENT</h3>
                    <p className="text-base text-[#5b5b5b] font-semibold">Personalized patient care is what sets Medicus Medical Center apart. When you visit one of our four San Francisco campus locations you can expect to receive world class care. Expert physician specialists and caring clinical staff provide you with an exceptional patient care is what sets Medicus Medical Center apart health care experience.</p>
                </div>
                <div className="flex justify-start lg:justify-between flex-wrap lg:flex-nowrap gap-4 lg:gap-3 w-full xl:w-[570px]">
                    {Deptos.map((item)=>{
                        return (
                            <h4 key={item} className="transition-all bg-white w-auto xl:w-[170px] text-center text-[#5B5B5B] text-base rounded-[9px] py-2 lg:py-4 px-4 lg:px-6 hover:border hover:border-[#5b5b5b]">{item}</h4>
                        )
                    })}
                </div>
                <Link href="/services" className='transition-colors flex justify-center items-center bg-[#032FF2] text-white text-base w-[270px] h-[60px] rounded-[10px] border hover:bg-transparent hover:text-[#032ff2] hover:border hover:border-[#032FF2]'>CHECKOUT ALL DEPARTMENTS</Link>
            </div>
            <div className="w-full mb-12 lg:w-1/2">
                <Image src={medicine} height="auto" width="auto" alt="doctors working" />
            </div>
        </div>
    </section>
  )
}

export default MedicalDep