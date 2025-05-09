import React, { useEffect, useRef, useState } from "react";

const partners = [
  { name: "DESCO", logo: "/assets/nesco-logo-png_seeklogo-382775.png" },
  { name: "NESCO", logo: "/assets/download (8).png" },
  { name: "WASA", logo: "/assets/images.png" },
  { name: "TITAS", logo: "/assets/company-image.jpg" },
  { name: "DPDC", logo: "/assets/banglalink-logo-png_seeklogo-411075.png" },
  { name: "Bosundhora", logo: "/assets/Bashundhara-Group-Logo.jpg" },
  { name: "Residential", logo: "/assets/png-clipart-building-business.png" },
  { name: "Resturant", logo: "/assets/imgbin-building-business.jpg" },
];

function PartnerCarousel() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === partners.length - 1 ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider && slider.children.length > 0) {
      const slideWidth = slider.children[0].offsetWidth + 24; // 24px = gap-6
      slider.scrollTo({
        left: currentIndex * slideWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);
  return (
    <section className="py-8 md:w-11/12 w-[90%]  ">
      <h2 className="text-2xl font-bold text-center mb-6">Our Partners</h2>
      <div className="overflow-hidden px-4">
        <div
          ref={sliderRef}
          className="flex gap-6 transition-transform duration-500"
          style={{ overflowX: "auto", scrollSnapType: "x mandatory" }}
        >
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="min-w-[200px] flex-shrink-0 bg-white p-4 rounded-lg shadow-md scroll-snap-align-start text-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-[350px] h-auto mx-auto object-contain"
              />
              <p className="mt-2 font-medium">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnerCarousel;
