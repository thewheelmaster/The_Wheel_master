import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";

const contactData = [
  {
    label: "Mail",
    icon: "/assets/img/icon/email.svg",
    info: ["ravi@thewheelmaster.in"],
  },
  {
    label: "Location",
    icon: "/assets/img/icon/location.svg",
    info: ["Behind Jeep Showroom, Sanathal Circle, Ahmedabad, Gujarat, 382210"],
  },
  {
    label: "Phone",
    icon: "/assets/img/icon/phone.svg",
    info: ["+919228468709"],
  },
  {
    label: "Open Hour",
    icon: "/assets/img/icon/date-icon.svg",
    info: ["Mon - Sun: Open 24/7"],
  },
];

const ContactInfo = () => {
  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="contact-info">
        <div className="left-info" data-aos="fade-right">
          <div className="content">
            <SectionHeading
              bgText={"Contact"}
              title={"Contact"}
              desp={
                "The Wheel Master Always welcomes enquiries, For Any kind of information regarding Alloy Wheels Services, simply fill out the form with your relevant details and we will contact you soon."
              }
            />
          </div>
        </div>

        <div className="right-info">
          {contactData.map((item, index) => (
            <div className="info-card" key={index} data-aos="fade-left">
              <p>{item.label} :</p>
              <div className="d-flex gap-2 align-items-center">
                <div>
                  <img src={item.icon} alt={item.label} />
                </div>
                <div>
                  {item.info.map((info, idx) => (
                    <p key={idx}>{info}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
