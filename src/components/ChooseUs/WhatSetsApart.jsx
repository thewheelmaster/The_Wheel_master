import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { ButtonCommon } from "../Button/Button";

const chooseUsData = {
  bgText: "Built Different",
  title: "What Sets Us Apart",
  desp: "With over 22 years in the automotive industry and 10+ years of international expertise in alloy wheel repair, The Wheel Master delivers world-class quality, precision, and lasting results. We restore not just your wheels, but also your confidence on the road.",
  img: "/assets/img/service/IMG20250826131153.jpg",
  list: [
    { title: "Decades of Experience: A strong foundation in the automotive sector ensures we know your vehicle inside out." },
    { title: "Specialized Expertise: 10+ years dedicated exclusively to alloy wheel refurbishment and cosmetic repair." },
    { title: "Global Exposure: Knowledge and practices perfected abroad, now brought to India." },
    { title: "Quality First Approach : Only the best materials, tools, and techniques are used to restore your wheels." },
    { title: "Customer-Centric Service : Transparent, professional, and focused on your satisfaction." },
  ],
};

const WhatSetUsApart = () => {
  const { bgText, title, desp, list, img } = chooseUsData;

  return (
    <section className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="choose-us-container-extents">
        <div className="choose-us-contain">
          <div className="choose-us-info" data-aos="fade-up">
            <SectionHeading bgText={bgText} title={title} desp={desp} />
            <div className="ak-height-60 ak-height-lg-30"></div>
            <div className="stroke-heading-text">
              {list.map((item) => (
                <h3
                  key={item.title}
                  
                  className="ak-stroke-text hover-color-changes"
                >
                  {item.title}
                </h3>
              ))}
            </div>
            <div className="ak-height-60 ak-height-lg-30"></div>
            <ButtonCommon to="/about"> View More</ButtonCommon>
          </div>
        <div
          style={{borderRadius:'5px'}}
            className="choose-us-img m-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img style={{ border: '1px solid white', borderRadius: '10px' }} width={500} src={img} alt="..." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSetUsApart;
