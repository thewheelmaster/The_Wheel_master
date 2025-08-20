import { ImgComparisonSlider } from "@img-comparison-slider/react";
import React, { useState, useRef } from "react";

export default function BeforeAfterSlider() {
  return (
    <div className="container">
      <ImgComparisonSlider>
        <img
          slot="first"
          src="https://img-comparison-slider.sneas.io/demo/images/before.webp"
        />
        <img
          slot="second"
          src="https://img-comparison-slider.sneas.io/demo/images/after.webp"
        />
      </ImgComparisonSlider>
    </div>
  );
}
