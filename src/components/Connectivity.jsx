import React from "react";
import connectivity from "../assets/palm-connectivity.jpg";
function Connectivity() {
    const cardContent = [
        {
            title: "SCHOOLS AND EDUCATIONAL INSTITUTIONS",
            place: [
                "St. Francis School",
                "Delhi Public School",
                "St. Joseph's College for Women"
            ]
        },
        {
            title: "HOSPITALS",
            place: [
                "Manipal Hospital",
                "Narayana Hospital",
                "DR. Karunakara and Nagarajegowda multi speciality hospital"
            ]
        },
        {
            title: "RETAIL AND SUPER HYPERMARKETS",
            place: [
                "Zaka World Super Market",
                "HR Super Market",
                "Pooja Bangle Store"
            ]
        },
        {
            title: "RESORTS AND ADVENTURE",
            place: [
                "White Orchid Resorts",
                "Green Finch Resort",
                "VA The Country House"
            ]
        }
    ]
  return (
    <section id="connectivity" className="">
      <div className=" w-[220px] h-[40px] mx-auto my-6 cta-bg-color rounded-tl-full rounded-br-full flex justify-center items-center">
        <h2 className=" text-white text-xl lg:text-3xl font-bold">
          Connectivity
        </h2>
      </div>
      <div className=" py-12 cta-bg-color">
        <img
          src={connectivity}
          alt="master-plan-image"
          className=" rounded-xl mx-auto"
        />
        <div className=" px-6 py-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:gap-2">
            {cardContent.map((card, index) => (
                <div key={index} className=" my-6 mx-auto">
                    <h2 className=" text-white text-xl font-semibold w-[250px] mb-3">{card.title}</h2>
                    <ul className=" list-disc list-inside w-[220px]">
                        {card.place.map((place, index) => (
                            <li key={index} className=" text-white text-base">{place}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Connectivity;
