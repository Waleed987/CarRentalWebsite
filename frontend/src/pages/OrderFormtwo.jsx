import React, { useEffect, useState } from "react";
import axios from "axios";
function OrderForm(){
    const [cars, setCars] = useState([]);
    const [selectedCarId, setSelectedCarId] = useState("");
    const [selectedCar, setSelectedCar] = useState({});

    

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

      const handleChange = (e) => {
        const carId = e.target.value;
        console.log(carId);
        setSelectedCarId(carId);
    
        const car = cars.find(c => c.name === carId);
        setSelectedCar(car);
        console.log(car);
      };
    return(
        <>
        <div className="bg-black h-full w-full flex justify-center items-center">
            <div className="bg-white min-h-[800px] w-[750px] rounded-[20px] flex flex-col flex-wrap p-6 my-8">
                <h2 className="text-2xl font-bold mb-6 border-b pb-2">Personal Information</h2>
                <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="flex flex-col">
                        <label htmlFor="firstName" className="text-gray-700 text-lg mb-2">First Name</label>
                        <input 
                            type="text" 
                            id="firstName" 
                            className="border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors" 
                            placeholder="Enter first name" 
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="lastName" className="text-gray-700 text-lg mb-2">Last Name</label>
                        <input 
                            type="text" 
                            id="lastName" 
                            className="border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors" 
                            placeholder="Enter last name" 
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-gray-700 text-lg mb-2">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors" 
                            placeholder="Enter email address" 
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="text-gray-700 text-lg mb-2">Phone Number</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            className="border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors" 
                            placeholder="Enter phone number" 
                            required
                        />
                    </div>
                    
                </div>

                <div className="mb-8">
  <h2 className="text-2xl font-bold mb-6 border-b pb-2">Select a Car</h2>
  <div className="w-full">
    <label htmlFor="carSelect" className="text-gray-700 text-lg mb-2 block">Car*</label>
    <select
      id="carSelect"
      name="carSelect"
      className="border-2 border-gray-300 p-3 rounded-lg w-full focus:border-blue-500 focus:outline-none transition-colors"
      required
      value={selectedCarId}
      onChange={handleChange}
    >
      <option value="">Select a Car</option>
      {cars.map((car, index) => (
        <option key={index} value={car.id}>
          {car.name}
        </option>
      ))}
    </select>

    {selectedCar && selectedCar.name && (
      <div className="mt-4 p-4 border rounded shadow">
        <h3 className="font-bold text-lg">{selectedCar.name}</h3>
        <p>Price: {selectedCar.pricePerDay}$</p>
        <p>Year: {selectedCar.year}</p>
      </div>
    )}
  </div>
</div>
                
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-6 border-b pb-2">Pickup Location</h2>
                    <div className="w-full">
                        <label htmlFor="pickUpLocation" className="text-gray-700 text-lg mb-2 block">Area*</label>
                        <select 
                            id="pickUpLocation" 
                            name="pickUpLocation" 
                            className="border-2 border-gray-300 p-3 rounded-lg w-full focus:border-blue-500 focus:outline-none transition-colors"
                            required
                        >
                            <option value="">Select Pickup Location</option>
                            <option value="karachi-dha">Karachi - DHA Branch</option>
                            <option value="karachi-northnazimabad">Karachi - North Nazimabad Hub</option>
                            <option value="lahore-gulberg">Lahore - Gulberg Center</option>
                            <option value="lahore-johartown">Lahore - Johar Town Point</option>
                            <option value="islamabad-f7">Islamabad - F-7 Markaz</option>
                            <option value="islamabad-g13">Islamabad - G-13 Sector Office</option>
                            <option value="rawalpindi-saddar">Rawalpindi - Saddar Pickup</option>
                            <option value="peshawar-universityroad">Peshawar - University Road Spot</option>
                            <option value="quetta-jinnahroad">Quetta - Jinnah Road Branch</option>
                        </select>
                    </div>
                </div>

                

                <div className="mb-3">
                    <h2 className="text-2xl font-bold mb-6 border-b pb-2">Delivery Address</h2>
                    <div className="w-full mb-6">
                        <label htmlFor="streetAddress" className="text-gray-700 text-lg mb-2 block">Street Address*</label>
                        <input 
                            type="text" 
                            id="streetAddress" 
                            className="border-2 border-gray-300 p-3 rounded-lg w-full focus:border-blue-500 focus:outline-none transition-colors" 
                            placeholder="Enter your street address" 
                            required
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <label htmlFor="city" className="text-gray-700 text-lg mb-2">City*</label>
                            <input 
                                type="text" 
                                id="city" 
                                className="border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors" 
                                placeholder="Enter city" 
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="postalCode" className="text-gray-700 text-lg mb-2">Postal Code*</label>
                            <input 
                                type="text" 
                                id="postalCode" 
                                className="border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors" 
                                placeholder="Enter postal code" 
                                required
                            />
                        </div>
                    </div>
                </div>

                
                {/* Payment Method */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-6 border-b pb-2">Payment Method</h2>
                    <div className="space-y-4 ml-2">
                        <div className="flex items-center space-x-3">
                            <input 
                                type="radio" 
                                id="cashOnDelivery" 
                                name="paymentMethod" 
                                value="cod" 
                                className="h-5 w-5 text-blue-600"
                            />
                            <label htmlFor="cashOnDelivery" className="text-lg text-gray-700">Cash on Delivery</label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input 
                                type="radio" 
                                id="creditCard" 
                                name="paymentMethod" 
                                value="card" 
                                className="h-5 w-5 text-blue-600"
                            />
                            <label htmlFor="creditCard" className="text-lg text-gray-700">Credit/Debit Card</label>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-8">
                    <button 
                        type="submit" 
                        className="bg-blue-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default OrderForm;