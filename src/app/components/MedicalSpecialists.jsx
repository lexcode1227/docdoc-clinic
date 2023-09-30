import { rubik } from "../font"
import doc1 from "@public/Doc1.png"
import doc2 from "@public/Doc2.png"
import doc3 from "@public/Doc3.png"
import Image from "next/image"

const MedicalSpecialists = () => {
    const medicalStaff = [
        {
            title: "Dr.Alexandra Smith",
            description: "Pediatric Clinic, Primary Health Care",
            img: doc1,
        },
        {
            title: "Dr.Addison Alexander",
            description: "Cardiac Clinic, Primary Health Care",
            img: doc2,
        },
        {
            title: "Dr.John Doe",
            description: "Cardiac Clinic, Primary Health Care",
            img: doc3,
        },
    ]
  return (
    <section className="flex flex-col gap-4 justify-center items-stretch lg:mx-[50px] xl:mx-[100px] 2xl:mx-[200px] h-[700px]">
        <h2 className={`${rubik.className} text-center text-[32px] text-[#2b2e35]`} >Medical Specialists</h2>
        <div className="flex justify-between gap-6">
            {medicalStaff.map((item)=>{
                return (
                    <article className="flex flex-col justify-around lg:w-1/3 xl:w-[370px] lg:h-[460px] xl:h-[533px] " key={item.title}>
                        <Image src={item.img} height={449} width={370} alt={item.title} />
                        <h4 className="text-base font-semibold ">{item.title}</h4>
                        <h5 className="text-sm text-[#5b5b5b] ">{item.description}</h5>
                    </article>
                )
            })}
        </div>
    </section>
  )
}

export default MedicalSpecialists