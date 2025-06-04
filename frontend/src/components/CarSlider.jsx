import React, { useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const cards = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Car ${i + 1}`,
  description: "Cool car description here!",
}));

export default function CarSlider() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 5,
      spacing: 15,
    },
  });

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 2000); // Slide every 2s
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div ref={sliderRef} className="keen-slider">
      {cards.map((car) => (
        <div key={car.id} className="keen-slider__slide bg-white p-4 rounded shadow-md">
          <h3 className="text-lg font-bold">{car.title}</h3>
          <p>{car.description}</p>
        </div>
      ))}
    </div>
  );
}

