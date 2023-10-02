"use client"
import onlineIcon from "../../../public/OnlineEmergencyIcon.svg";
import medicationIcon from "../../../public/MedicationService.svg";
import hrIcon from "../../../public/24HrProgram.svg";
import Image from "next/image";

const Services = () => {
    const data = [
        {
            id: 1,
            title: "Online Emergency",
            text: "Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis vestibulum eget orci maximus pretium.",
            icon: onlineIcon,
        },
        {
            id: 2,
            title: "Medication Service",
            text: "Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis vestibulum eget orci maximus pretium.",
            icon: medicationIcon,
        },
        {
            id: 3,
            title: "24hr Health Program",
            text: "Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis vestibulum eget orci maximus pretium.",
            icon: hrIcon,
        },
    ]
  return (
    <section className="flex flex-col md:flex-row justify-between gap-6 mx-5 lg:mx-[50px] xl:mx-[100px] 2xl:mx-[200px] mt-6">
        {data.map((item)=> {
            return (
                <div key={item.id} className="md:w-[290px] xl:w-[370px] xl:h-[395px] flex flex-col justify-center items-center gap-2 shadow-[0px 0px 15px 0px rgba(0, 0, 0, 0.25)] border border-solid">
                    <h3 className="font-bold text-[32px] text-[#5B5B5B] text-center">{item.title}</h3>
                    <h3 className="font-bold text-[32px] text-[#032FF2] text-center">{item.title}</h3>
                    <h5 className="text-base text-[#5B5B5B] text-center py-1 px-2 lg:px-[42px]">{item.text}</h5>
                    <Image className="object-contain" src={item.icon} height={75} width={75} alt={item.title} />
                </div>
            )
        })}
    </section>
  )
}

export default Services