"use client"
import service1 from "@public/service1.svg";
import service2 from "@public/service2.svg";
import service3 from "@public/service3.svg";
import Image from "next/image";
import { rubik } from "../font";

const RealiableServices = () => {
  const data = [
    {
      id: 1,
      img: service1,
      title: "Dental Implants",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh…"
    },
    {
      id: 2,
      img: service2,
      title: "Dental Implants",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh…"
    },
    {
      id: 3,
      img: service3,
      title: "Dental Implants",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh…"
    },
  ]
  return (
    <section className='h-auto flex flex-col gap-10 justify-center items-stretch mx-5 lg:mx-[50px] xl:mx-[100px] 2xl:mx-[200px] xl:h-[500px] mb-12'>
        <h2 className={`${rubik.className} font-bold text-[32px] text-[#2b2e35] text-center`}>Reliable Services</h2>
        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-8 lg:gap-4">
            {data.map((item)=>{
              return (
                <article className="flex flex-col justify-between items-center gap-3 xl:gap-6 xl:h-[325px] max-w-[400px]" key={item.id}>
                  <Image src={item.img} height="auto" width="auto" alt={item.title} />
                  <div className="flex flex-col justify-between h-[100px]">
                    <h4 className="text-xl text-[#2b2e35] font-semibold">{item.title}</h4>
                    <p className="text-base text-[#5b5b5b]">{item.description}</p>
                  </div>
                </article>
              )
            })}
        </div>
    </section>
  )
}

export default RealiableServices