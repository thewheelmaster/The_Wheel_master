import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { ButtonCommon } from "../Button/Button";

const chooseUsData = {
  bgText: "Feature",
  title: "why Choose The Wheel Master",
  desp: "With years of hands-on experience, our technicians are trained in handling every type of alloy wheel damage – from light scuffs to major cracks. We don’t just fix wheels; we restore them to perfection.",
  img: "/assets/img/chooseus/choose-us.png",
  list: [
    { title: "Expert Technicians: Skilled in high-precision alloy repairs" },
    { title: "Free Pickup & Drop: For Ahmedabad customers" },
    { title: "Advanced Equipment: CNC Diamond Cutting, Balancing & Alignment" },
    { title: "Customer Satisfaction: Trusted by 1000+ car lovers & garages" },
  ],
};

const ChooseUs = () => {
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
            className="choose-us-img"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <img src={img} alt="..." />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
