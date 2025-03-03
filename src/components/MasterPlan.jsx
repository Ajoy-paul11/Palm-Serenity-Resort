import React from "react";
import masterPlan from "../assets/palm-plan.jpg";

function MasterPlan() {
  return (
    <section id="masterplan" className="py-8 bg-[#F9F9F9]">
      <div className=" w-[140px] h-[40px] mx-auto my-4 cta-bg-color rounded-tl-full rounded-br-full flex justify-center items-center">
        <h2 className=" text-white text-xl lg:text-3xl font-bold">Gallery</h2>
      </div>
      <div className=" py-12">
        <img
          src={masterPlan}
          alt="master-plan-image"
          className=" rounded-xl mx-auto"
        />
      </div>
    </section>
  );
}

export default MasterPlan;
