import { ImgComparisonSlider } from "@img-comparison-slider/react";
import React, { useState, useRef } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";

export default function BeforeAfterSlider() {
  const arrayForMap = [
    {
      url1: "/assets/img/beforeafter/1-1.jpg",
      url2: "/assets/img/beforeafter/1-2.jpg",
    },
    {
      url1: "/assets/img/beforeafter/2-1.jpg",
      url2: "/assets/img/beforeafter/2-2.jpg",
    },
    {
      url1: "/assets/img/beforeafter/3-1.jpg",
      url2: "/assets/img/beforeafter/3-2.jpg",
    },
    {
      url1: "/assets/img/beforeafter/4-1.jpg",
      url2: "/assets/img/beforeafter/4-2.jpg",
    },
  ];

  return (
    <div style={{ marginTop: "100px" }} className="container">
      <SectionHeading
        bgText={"before and after images"}
        title={"Move Slider to Experience Our Work"}
        desp={""}
      />
      <div style={{ marginTop: "100px" }} className="d-flex gap-5 container">
        {arrayForMap.map((v, i) => {
          return (
            <ImgComparisonSlider>
              <img slot="first" height={200} width={300} src={v.url1} />
              <img slot="second" height={200} width={300} src={v.url2} />
            </ImgComparisonSlider>
          );
        })}
      </div>
    </div>
  );
}
