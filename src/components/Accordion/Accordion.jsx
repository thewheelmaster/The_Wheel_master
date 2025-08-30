import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const faqItems = [
  {
    title: "How long does alloy wheel refurbishment or repair take?",
    content:
      "Most standard repairs or refurbishments take between 24–48 hours, depending on the level of damage and the finish you choose. Some cosmetic touch-ups may be completed the same day.",
  },
  {
    title: "Can you repair cracked or bent alloy wheels?",
    content:
      "Yes, we specialize in crack welding and wheel straightening. Our technicians inspect the wheel thoroughly and carry out safe and effective repairs to restore its strength and balance.",
  },
  {
    title:
      "Will my wheels look brand new after CNC Diamond Cutting or Painting?",
    content:
      "Absolutely! With CNC diamond cutting, brake caliper painting, or cosmetic refinishing, your wheels can look as good as new — often better, with a showroom-quality finish.",
  },
  {
    title: "Is it safe to drive with a bent or cracked alloy wheel?",
    content:
      "No, it’s not recommended. A damaged wheel can affect handling, cause vibrations, and even risk tyre blowouts. We advise getting your wheels inspected immediately.",
  },
  {
    title: "Do you offer wheel alignment and balancing?",
    content:
      "Yes. Proper alignment and balancing ensure smooth driving, longer tyre life, and improved fuel efficiency. We recommend having this checked regularly or after any wheel repairs.",
  },
  {
    title: "Can I choose custom colors and finishes for my wheels or calipers?",
    content:
      "Definitely! We offer a wide range of colors, finishes, and personalization options, from glossy black and matte finishes to bold, custom shades.",
  },
  {
    title: "How often should I get an alloy wheel health check-up?",
    content:
      "We recommend a health check every 6–12 months or sooner if you frequently drive on rough roads. Preventive checks help spot cracks, bends, or corrosion early.",
  },
  {
    title: "Do you provide a warranty on your repairs?",
    content:
      "Yes, all our services come with a warranty for workmanship and finish, giving you complete peace of mind.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(index);
  };

  return (
    <div className="ak-accordion">
      {faqItems.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default Accordion;
