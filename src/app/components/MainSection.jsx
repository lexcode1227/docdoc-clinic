import Image from 'next/image';
import image from "../../../public/mainPic.svg"

const MainSection = () => {
  return (
    <section className='h-full flex '>
      <div className='w-2/5 flex flex-col items-start justify-center gap-5 pl-[100px]'>
        <h1 className='text-[70px] leading-[85px]'>Get Better <br /> Care For- <br /> Your Health.</h1>
        <h4 className='text-[20px]'>Quisque leo augue, lobortis ac tellus nec, posuere ultricies nulla. Praesent massa odio. </h4>
        <button className='bg-[#032FF2] py-4 px-8 text-white rounded-[9px]'>Learn More</button>
      </div>
      <div className='w-3/5 h-[675px] flex items-center'>
        <Image className='h-full' src={image} width={1200} height={1800} alt='doctors picture' />
      </div>
    </section>
  )
}

export default MainSection;