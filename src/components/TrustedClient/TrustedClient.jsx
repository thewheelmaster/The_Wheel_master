import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const imgList = [
  "/assets/img/cars/pngwing.com (1).png",
  "/assets/img/cars/5d4342a21834d377404bec873d753263.png",
  "/assets/img/cars/mahindra-auto-seeklogo.svg",
  "/assets/img/cars/c4cfaddfd78d142519a17ce62e9327f1.png",
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
        <h4 className="title">Brands We Work</h4>
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
                <img height={300} width={150} src={item} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrustedClient;
