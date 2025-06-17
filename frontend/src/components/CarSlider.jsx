import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import axios from "axios";

export default function CarSlider() {
  const [cars, setCars] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 641px) and (max-width: 1024px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1025px) and (max-width: 1280px)": {
        slides: { perView: 3, spacing: 15 },
      },
    },
    slides: {
      perView: 4, 
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

  // When all images are loaded, update the slider
  useEffect(() => {
    if (imagesLoaded === cars.length && cars.length > 0 && instanceRef.current) {
      instanceRef.current.update();
    }
  }, [imagesLoaded, cars.length, instanceRef]);

  useEffect(() => {
    let interval;
    if (instanceRef.current && cars.length > 0 && imagesLoaded === cars.length) {
      interval = setInterval(() => {
        instanceRef.current?.next();
      }, 2000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [instanceRef, cars, imagesLoaded]);

  // Reset imagesLoaded when cars change
  useEffect(() => {
    setImagesLoaded(0);
  }, [cars]);

  return (
    <>
    <h1 className="pb-[30px] text-[3rem] text-center font-bold font-sans mb-[40px] bg-gray-200">Choose a Car from our Vast Colleciton</h1>
    <div className="w-[95%] pl-[5%]">
    <div ref={sliderRef} className="keen-slider m-[5px]">
      {cars.length > 0 ? (
        cars.map((car, idx) => (
          <div key={car._id || car.id} className="keen-slider__slide bg-white p-4 rounded-[10px] shadow-md border-2">
            <img 
              src={car.imageUrl} 
              className="h-[300px] w-[420px] object-cover" 
              alt={car.name || car.title}
              onLoad={() => setImagesLoaded((count) => count + 1)}
              onError={() => setImagesLoaded((count) => count + 1)}
            />
            <a href="/"><h3 className="text-[2rem] font-bold">{car.name || car.title}</h3></a>
            <p className="text-[1.3rem]">{car.class || car.description}</p>
            <p className="text-[1.5rem] font-bold">{car.pricePerDay} {car.currency} / day</p>
          </div>
        ))
      ) : (
        <p>Loading cars...</p>
      )}
    </div>
    </div>
    </>
  );
}
