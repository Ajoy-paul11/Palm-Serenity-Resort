import React from "react";
import overviewImg from "../assets/palm-overview-img.jpg";

function Overview() {
  return (
    <section id="overview" className="py-16 bg-[#F9F9F9]">
      <div className="container mx-auto px-4">
        <div className=" w-[180px] h-[40px] mx-auto my-12 cta-bg-color rounded-tl-full rounded-br-full flex justify-center items-center">
          <h2 className=" text-white text-xl lg:text-3xl font-bold">
            Overview
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 cta-bg-color rounded-tl-3xl z-0"></div>
            <img
              src={overviewImg}
              alt="Luxury Estate Overview"
              className="rounded-lg shadow-xl relative w-full h-auto z-10"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 cta-bg-color rounded-br-3xl z-0"></div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-wider uppercase text-[#2C3E50]">
                This is more than land,This is your legacy
              </h2>
            </div>

            <p className="text-lg text-[#505050]">
              An investment that appreciates in leaps and bounds, and we’re not
              just talking about money. It’s about investing in your mental and
              physical well- being, build future of your kids, fabulous
              connection with nature. At Palm Serenity, a stunning 8 Acre
              boutique sanctuary, the resort themed homes are an intelligent
              lifestyle choice. Imagine waking up every day in a home nestled in
              greenery, the chirping of birds, or spotting squirrels squirting
              by your doorway. As we learn to prioritize our mental health,
              here’s to choosing a life that’s so enriching all through the day.
            </p>

            <p className="text-lg text-[#505050]">
              Homes at Palm Serenity actually appreciate in value – both
              financially and personally. This community is built to focus on
              long term growth, with 6 Acres of exclusive farm plots and 2 Acre
              of well spread resort conveniences. Every plot is tastefully
              landscaped with high-end species of trees. Needless to say,
              sandalwood is one of the world’s most sought-after natural
              product, making it one of the best investment options ever.
              Experience never-before architecture in this self-sufficient
              community, which incorporates state-of-the-art technology with
              sustainable living. Meet a community of like- minded people who
              know the value of living off the land and revel in the joys of
              pursuing a deeper purpose
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
