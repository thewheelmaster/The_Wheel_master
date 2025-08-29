import React from "react";

import HeroSlider from "../components/Sliders/HeroSlider";
import ServiceProgres from "../components/ServiceProgres/ServiceProgres";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import Services from "../components/Services/ServicesSection";
import Videos from "../components/VideoPopUp/Videos";
import TrustedClient from "../components/TrustedClient/TrustedClient";
import Testimonial from "../components/Testimonial/Testimonial";
import PricingTable from "../components/Pricing/PricingTable";
import Blogs from "../components/Blog/Blogs";
import Teams from "../components/Team/Teams";
import AutoCounter from "../components/AutoCounter/AutoCounter";
import BeforeAfterSlider from "../components/BeforeAfterFunctionality/BeforeAfterSlider";
import WhatSetUsApart from "../components/ChooseUs/WhatSetsApart";

export default function Home() {
  return (
    <>
      <HeroSlider />
      {/* <ServiceProgres /> */}
      <ChooseUs />
      <WhatSetUsApart />
      <BeforeAfterSlider />
      <Services styleTypeTwo={true} />
      {/* <Videos videoId={"VcaAVWtP48A"} /> */}
      {/* <AutoCounter /> */}
      <TrustedClient />
      <div className="container mt-5"><p>
        All product names, logos, and brands are property of their respective
        owners. All company, product and service names used in this website are
        for identification purposes only. Use of these names, logos, and brands
        does not imply endorsement. The Wheel Master logo and name are
        registered and unauthorized use of them may result in legal action as
        per the law.
      </p></div>
      {/* <Testimonial /> */}
      {/* <Teams /> */}
      {/* <PricingTable /> */}
      {/* <Blogs styleTypeTwo={true} /> */}
    </>
  );
}
