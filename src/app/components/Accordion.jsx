import AccordionItem from "./AccordionItem";
import doc1 from "@public/Doc1.png"
import doc2 from "@public/Doc2.png"
import doc3 from "@public/Doc3.png"

const Accordion = () => {
    const datacol1 = [
        {
            id: 1,
            title: "Dr.Alexandra Smith | President",
            position: "Pediatric Clinic",
            date: "Director since 2013",
            image: doc1,
        },
        {
            id: 2,
            title: "Dr.Addison Alexander | Vice President",
            position: "Cardiac Clinic",
            date: "Since 2016",
            image: doc2,
        },
        {
          id: 3,
          title: "Dr.John Doe | MD",
          position: "Primary Health Care",
          date: "Since 2019",
          image: doc3,
      },
    ]
    const datacol2 = [
        {
          id: 4,
          title: "Dr.Alexandra Smith | MD",
          position: "Pediatric Doc",
          date: "Director since 2013",
          image: doc1,
      },
      {
          id: 5,
          title: "Dr.John Doe | MD",
          position: "Primary Health Care",
          date: "Since 2019",
          image: doc3,
      },
      {
          id: 6,
          title: "Dr.Addison Alexander | MD",
          position: "Cardiac Clinic",
          date: "Since 2016",
          image: doc2,
      },
  ]
    return (
      <section className="h-auto relative z-20 overflow-hidden bg-white">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:justify-between 2xl:justify-evenly flex-wrap w-full gap-5">
            <div className="flex flex-col flex-wrap justify-evenly items-center xl:items-start gap-5 w-full lg:w-[48%]">
                {datacol1.map((item)=>{
                    return (
                        <AccordionItem key={item.id} title={item.title} position={item.position} date={item.date} image={item.image} />
                    )
                })}
            </div>
            <div className="flex flex-col flex-wrap justify-evenly items-center xl:items-end gap-5 w-full lg:w-[48%]">
                {datacol2.map((item)=>{
                    return (
                        <AccordionItem key={item.id} title={item.title} position={item.position} date={item.date} image={item.image} />
                    )
                })}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Accordion;