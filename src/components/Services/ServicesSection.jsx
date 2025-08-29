import React from "react";
import { MoreBtn } from "../Button/Button";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Link } from "react-router-dom";

import servicesData from "../../dataJson/servicesData.json";

const ServicesSection = ({ styleTypeTwo }) => {
  const data = styleTypeTwo ? servicesData : servicesData;
  const dataForRestoration = [
    {
      id: 1,
      img: "/assets/img/service/car-mechanic-changing-wheels-car.jpg",
      title: "Tyre Removal & Safety Inspection",
      desp: "We begin by safely removing the tyre and conducting an optional structural integrity check to ensure your wheel is fit for refurbishment.",
    },
    {
      id: 2,
      img: "/assets/img/service/closeup-shot-mechanic-trying-fix-car-with-special-tools.jpg",
      title: "High-Pressure Wet Blasting",
      desp: "Using high-wet blast systems, we strip away existing coatings, corrosion, and contaminants — preparing the surface for a flawless finish.",
    },
    {
      id: 3,
      img: "/assets/img/service/mechanic-working-car-shop.jpg",
      title: "OEM-Grade Powder Priming",
      desp: "The wheel is coated with a high-quality polyester primer — the same standard used by vehicle manufacturers — providing strong adhesion and corrosion resistance.",
    },
    {
      id: 4,
      img: "/assets/img/service/worker-repairing-car-side-view.jpg",
      title: "Custom Colour Application",
      desp: "Whether you want to match the original finish or go bold with a new look, we precisely colour-match and apply your desired tone.",
    },
    {
      id: 5,
      img: "/assets/img/service/service_5.jpg",
      title: "Precision CNC Machining",
      desp: "For diamond-cut finishes, the wheel is lathed with computer-guided precision to achieve sharp, reflective lines.",
    },
  ];

  return (
    <>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="d-flex justify-content-center">
        <div className="sticky-content container">
          <div className="content style_2">
            <div className="service">
              {data.map((item) => (
                <div
                  className="service-card"
                  data-aos="fade-left"
                  key={item.id}
                >
                  <Link to={`/service-single/${item.id}`} className="card-img">
                    <img src={`${item.img}`} className="ak-bg" alt="..." />
                  </Link>
                  <div className="card-info">
                    <Link
                      to={`/service-single/${item.id}`}
                      className="card-title"
                    >
                      {item.title}
                    </Link>
                    <p className="card-desp">{item.desp}</p>
                    <MoreBtn to={`/service-single/${item.id}`}>
                      VIEW MORE
                    </MoreBtn>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="sidebar width-none">
            <div className="services-content">
              <SectionHeading
                bgText={"Services"}
                title={"What We Offer"}
                desp={
                  "We provide professional brake caliper painting using high-temperature, durable coatings that not only protect against rust and wear but also add a sleek, customized look to your vehicle. Choose from a wide range of colors to match your style and give your wheels a premium finish."
                }
              />
              <div className="ak-height-50 ak-height-lg-10"></div>
              {/* <MoreBtn to="/service">VIEW All SERVICES</MoreBtn> */}
            </div>
          </div>
        </div>
      </div>
      {window.location.pathname === "/service" && (
        <div className="d-flex justify-content-center mt-5">
          <div className="sticky-content container">
            <div className="content style_2">
              <div className="row service">
                {dataForRestoration.map((item) => (
                  <div
                    className="col service-card"
                    data-aos="fade-left"
                    key={item.id}
                  >
                    <Link
                      to={`/service-single/${item.id}`}
                      className="card-img"
                    >
                      <img src={`${item.img}`} className="ak-bg" alt="..." />
                    </Link>
                    <div className="card-info">
                      <Link
                        to={`/service-single/${item.id}`}
                        className="card-title"
                      >
                        {item.title}
                      </Link>
                      <p className="card-desp">{item.desp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="sidebar width-none">
              <div className="services-content">
                <SectionHeading
                  bgText={"Services"}
                  title={"Our Expert Alloy Wheel Restoration Process"}
                  desp={
                    "At The Wheel Master, we follow a meticulous, multi-stage restoration process that ensures both cosmetic brilliance and structural reliability"
                  }
                />
                <div className="ak-height-50 ak-height-lg-10"></div>
                {/* <MoreBtn to="/service">VIEW All SERVICES</MoreBtn> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesSection;
