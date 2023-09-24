import Image from 'next/image'
import DoctorImg from "../../../public/doctorsWorking.svg"

const AboutHospital = () => {
  return (
    <section className='bg-[#EEEFFF] mt-20'>
        <div className='flex gap-3 justify-center mx-[100px] my-9'>
            <div className='w-1/2 h-[500px] flex justify-center'>
                <Image src={DoctorImg} width={500} height={500} alt='doctors working picture' />
            </div>
            <div className='w-1/2 flex flex-col justify-center items-start gap-6'>
                <h2 className='text-[42px] text-[#2B2E35] font-bold'>About Our <span className='text-[42px] font-bold text-[#032FF2]'>Hospital</span></h2>
                <p className='text-base max-w-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <div className='text-base'>
                    <h5>Browse Our Website</h5>
                    <h5>Choose Service</h5>
                    <h5>Send Messege</h5>
                </div>
                <button className='bg-[#032FF2] text-white text-base w-[270px] h-[60px] rounded-[10px]'>Know More</button>
            </div>
        </div>
    </section>
  )
}

export default AboutHospital