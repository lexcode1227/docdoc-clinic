"use client"
import Image from "next/image"
import Link from "next/link"
import Image1 from "../../../public/article1Img.png"
import Image2 from "../../../public/article2Img.png"
import Image3 from "../../../public/article3Img.png"
import Image4 from "../../../public/article4Img.png"
import { rubik } from "../font"
import { FaArrowRightLong } from "react-icons/fa6";

const LatestNews = () => {
    const data = [
        {
            id: 1,
            image: Image1,
            title: "Praesent justo mauris, tincidunt vitae nisi ultricies.",
            text: "Aenean sed velit nulla. Etiam viverra scelerisque porta. Quisque ut dolor aliquam, gravida lacus.",
        },
        {
            id: 2,
            image: Image2,
            title: "Praesent justo mauris, tincidunt vitae nisi ultricies.",
            text: "Aenean sed velit nulla. Etiam viverra scelerisque porta. Quisque ut dolor aliquam, gravida lacus.",
        },
        {
            id: 3,
            image: Image3,
            title: "Praesent justo mauris, tincidunt vitae nisi ultricies.",
            text: "Aenean sed velit nulla. Etiam viverra scelerisque porta. Quisque ut dolor aliquam, gravida lacus.",
        },
        {
            id: 4,
            image: Image4,
            title: "Praesent justo mauris, tincidunt vitae nisi ultricies.",
            text: "Aenean sed velit nulla. Etiam viverra scelerisque porta. Quisque ut dolor aliquam, gravida lacus.",
        },
    ]
  return (
    <section className="flex flex-col justify-center lg:justify-around items-center mx-5 my-8 lg:mx-[50px] xl:mx-[100px] 2xl:mx-[200px] gap-3 h-auto lg:h-[600px]">
        <h2 className={`${rubik.className} text-[42px] text-[#2b2e35] font-bold`}>LATEST NEWS</h2>
        <div className="flex flex-col flex-wrap lg:flex-nowrap sm:flex-row justify-between w-full ">
            {data.map((item)=> {
                return (
                    <article key={item.id} className="w-full sm:w-[270px] h-[441px] p-2 flex flex-col justify-around items-center">
                        <Image src={item.image} height="auto" width="auto" alt={item.title} />
                        <h3 className="text-lg text-[#262433]">{item.title}</h3>
                        <p className="text-base text-[#5B5B5B]">{item.text}</p>
                        <Link href={"#"} className="flex gap-5 items-center w-1/2 hover:text-[#032ff2] lg:w-2/3 ">Read More  <FaArrowRightLong className="fill-[#032FF2]"/></Link>
                    </article>
                )
            })}
        </div>
    </section>
  )
}

export default LatestNews