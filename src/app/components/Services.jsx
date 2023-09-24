import onlineIcon from "../../../public/OnlineEmergencyIcon.svg";
import medicationIcon from "../../../public/MedicationService.svg";
import hrIcon from "../../../public/24HrProgram.svg";
import Image from "next/image";

const Services = () => {
    const data = [
        {
            title: "Online Emergency",
            text: "Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis vestibulum eget orci maximus pretium.",
            icon: onlineIcon,
        },
        {
            title: "Medication Service",
            text: "Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis vestibulum eget orci maximus pretium.",
            icon: medicationIcon,
        },
        {
            title: "24hr Health Program",
            text: "Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis vestibulum eget orci maximus pretium.",
            icon: hrIcon,
        },
    ]
  return (
    <section className="flex justify-between mx-[100px] mt-6">
        {data.map((item)=> {
            return (
                <div className="w-[370px] h-[395px] flex flex-col justify-center items-center gap-2 shadow-[0px 0px 15px 0px rgba(0, 0, 0, 0.25)] border border-solid">
                    <h3 className="font-bold text-[32px] text-[#5B5B5B]">{item.title}</h3>
                    <h3 className="font-bold text-[32px] text-[#032FF2]">{item.title}</h3>
                    <h5 className="text-base text-[#5B5B5B] text-center py-1 px-[42px]">{item.text}</h5>
                    <Image className="object-contain" src={item.icon} height={75} width={75} />
                </div>
            )
        })}
    </section>
  )
}

export default Services