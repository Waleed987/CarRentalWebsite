import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import axios from "axios";

export default function CarSlider() {
  const [cars, setCars] = useState([]);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 5,
      spacing: 15,
    },
  });

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/cars/carsInfo");
        console.log(res.data);

        setCars(res.data); // assuming res.data is an array of cars
      } catch (error) {
        console.log(error);
      }
    };

    fetchCars();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 2000); // Slide every 2 seconds
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div ref={sliderRef} className="keen-slider">
      {cars.length > 0 ? (
        cars.map((car) => (
          <div key={car._id || car.id} className="keen-slider__slide bg-white p-4 rounded-[10px] shadow-md border-2">
            <img src={car.imageUrl} className="h-[300px] w-[370px] object-cover"></img>
            <a href="/"><h3 className="text-[2rem] font-bold">{car.name || car.title}</h3></a>
            <p className="text-[1.3rem]">{car.class || car.description}</p>
            <p className="text-[1.5rem] font-bold">{car.pricePerDay} {car.currency} / day</p>
          </div>
        ))
      ) : (
        <p>Loading cars...</p>
      )}
    </div>
  );
}
