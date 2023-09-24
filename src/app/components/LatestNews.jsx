import Image from "next/image"
import Link from "next/link"
import Image1 from "../../../public/article1Img.png"
import Image2 from "../../../public/article2Img.png"
import Image3 from "../../../public/article3Img.png"
import Image4 from "../../../public/article4Img.png"


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
    <section className="flex flex-col justify-around items-center mx-[100px] gap-3 h-[600px]">
        <h2 className="text-[42px] font-bold">LATEST NEWS</h2>
        <div className="flex justify-between w-full ">
            {data.map((item)=> {
                return (
                    <article key={item.id} className="w-[270px] h-[441px] p-2 flex flex-col justify-around">
                        <Image src={item.image} height={170} width={239} />
                        <h3 className="text-lg text-[#262433]">{item.title}</h3>
                        <p className="text-base text-[#5B5B5B]">{item.text}</p>
                        <Link href={"#"}>Read More</Link>
                    </article>
                )
            })}
        </div>
    </section>
  )
}

export default LatestNews