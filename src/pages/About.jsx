import React from "react";

import AboutPageHero from "../components/CommonPageHero/AboutPageHero";
import CompanyTab from "../components/CompanyTab/CompanyTab";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import AutoCounter from "../components/AutoCounter/AutoCounter";
import Testimonial from "../components/Testimonial/Testimonial";
import Teams from "../components/Team/Teams";
import PricingTable from "../components/Pricing/PricingTable";
import TrustedClient from "../components/TrustedClient/TrustedClient";
import Cta from "../components/Cta/Cta";
import SectionHeading from "../components/SectionHeading/SectionHeading";

const dataForWhyChooseUs = {
  bgText: "Why Choose Us",
  title: "why Choose The Wheel Master",
  list: [
    {
      title:
        "Expertise You Can Trust: Years of hands-on experience in alloy wheel care.",
    },
    {
      title:
        "Cutting-Edge Technology: Advanced equipment for precision repair and flawless finishes.",
    },
    {
      title:
        "Custom Solutions: From original factory shades to bold custom colors and diamond cuts.",
    },
    {
      title:
        "Customer First Approach: We take pride in providing clear communication, quick turnaround, and results that speak for themselves.",
    },
  ],
};

const About = () => {
  return (
    <>
      <AboutPageHero title={"About Us"} />
      <CompanyTab />
      <div style={{ marginTop: "6rem" }} className="container">
        <SectionHeading
          bgText={dataForWhyChooseUs.bgText}
          title={dataForWhyChooseUs.title}
          // desp={desp}
        />
        <div className="stroke-heading-text">
          {dataForWhyChooseUs.list.map((item) => (
            <h3 key={item.title} className="ak-stroke-text hover-color-changes">
              {item.title}
            </h3>
          ))}
        </div>
      </div>
      
      {/* <ChooseUs /> */}
      {/* <AutoCounter /> */}
      {/* <Testimonial /> */}
      {/* <Teams /> */}
      {/* <PricingTable /> */}
      <TrustedClient />
      <Cta />
    </>
  );
};

export default About;
