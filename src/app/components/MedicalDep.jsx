import Image from "next/image"
import medicine from "../../../public/medicine_pic.svg"

const MedicalDep = () => {
    const Deptos = ["SURGERY", "MICROBIOLOGY", "PATHOLOGY"];
  return (
    <section className="flex items-center bg-[#EEEFFF] h-[600px] ">
        <div className="flex mx-[100px]">
            <div className="flex flex-col items-start justify-between gap-2 w-1/2">
                <header className="w-[457px]">
                    <h2 className="text-[32px] text-[#2b2e35] font-bold mb-3">MEDICAL DEPARTMENTS</h2>
                    <h3 className="text-xl text-[#5b5b5b] font-semibold">The Backbone of our Clinic</h3>
                </header>
                <div className="w-[570px]">
                    <h3 className="text-xl text-[#5b5b5b] font-semibold">MODERN EQUIPMENT</h3>
                    <p className="text-base text-[#5b5b5b] font-semibold">Personalized patient care is what sets Medicus Medical Center apart. When you visit one of our four San Francisco campus locations you can expect to receive world class care. Expert physician specialists and caring clinical staff provide you with an exceptional patient care is what sets Medicus Medical Center apart health care experience.</p>
                </div>
                <div className="flex justify-between w-[570px]">
                    {Deptos.map((item)=>{
                        return (
                            <h4 className="bg-white text-[#5B5B5B] text-base rounded-[9px] py-4 px-6">{item}</h4>
                        )
                    })}
                </div>
                <button className='bg-[#032FF2] text-white text-base w-[270px] h-[60px] rounded-[10px]'>CHECKOUT ALL DEPARTMENTS</button>
            </div>
            <div className="w-1/2">
                <Image src={medicine} height={475} width={675} alt="doctors working" />
            </div>
        </div>
    </section>
  )
}

export default MedicalDep