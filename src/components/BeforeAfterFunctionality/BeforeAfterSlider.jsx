import { ImgComparisonSlider } from "@img-comparison-slider/react";
import React from "react";
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
        bgText="before/after images"
        title="Move Slider to Experience Our Work"
        desp=""
      />

      <div className="before-after-wrapper">
        {arrayForMap.map((v, i) => (
          <ImgComparisonSlider key={i} className="slider-box">
            <img slot="first" src={v.url1} alt={`before-${i}`} />
            <img slot="second" src={v.url2} alt={`after-${i}`} />
          </ImgComparisonSlider>
        ))}
      </div>

      <style jsx>{`
        .before-after-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 60px;
        }

        .slider-box {
          width: 100%;
          height: auto;
          max-width: 500px;
          margin: 0 auto;
        }

        .slider-box img {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 12px;
          display: block;
        }
      `}</style>
    </div>
  );
}
