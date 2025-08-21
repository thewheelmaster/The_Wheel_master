import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const imgList = [
  "/assets/img/cars/pngwing.com (1).png",
  "/assets/img/cars/pngwing.com (2).png",
  "/assets/img/cars/pngwing.com (4).png",
  "/assets/img/cars/pngwing.com (6).png",
  "/assets/img/cars/pngwing.com (7).png",
  "/assets/img/cars/pngwing.com (8).png",
  "/assets/img/cars/pngwing.com (9).png",
  "/assets/img/cars/pngwing.com (10).png",
  "/assets/img/cars/pngwing.com (11).png",
  "/assets/img/cars/pngwing.com (12).png",
  "/assets/img/cars/pngwing.com (13).png",
];

const TrustedClient = () => {
  const swiperRef = useRef(null);
  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="ak-slider ak-trusted-client-slider">
        <h4 className="title">Trusted Client</h4>
        <Swiper
          speed={1000}
          loop={true}
          slidesPerView={"auto"}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {imgList.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="trusted-client">
                <img src={item} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrustedClient;
