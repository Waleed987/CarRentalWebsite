import {useState,useEffect} from 'react'
import axios from 'axios';

function OrderForm(){
    const [cars,setCars] = useState([]);
    const [selectedCarId,setSelectedCarId] = useState("");
    const [selectedCar,setSelectedCar] = useState({});

    const [order,setOrder] = useState({firstname:"",
        lastname:'',
        email:'',
        area:'',
        car:selectedCar
    })

    useEffect(()=>{
        const fetch = async()=>{
            try {
                const res = await axios.get("http://localhost:5000/api/cars/carsInfo");
                console.log(res.data);
                setCars(res.data);
            } catch (error) {
                console.log(error);
            }

        }

        fetch();
    },[]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value);
        setOrder(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleCarChange = (e) => {
    const carId = e.target.value;
        console.log(carId);
        setSelectedCarId(carId);
    
        const car = cars.find(c => c.name === carId);
        setSelectedCar(car);
        console.log(car);
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validation
        if (!order.firstname || !order.lastname || !order.email || !order.area || !selectedCarId) {
            alert('Please fill in all required fields');
            return;
        }

        try {
            // Prepare the data to send
            const orderData = {
                firstname: order.firstname,
                lastname: order.lastname,
                email: order.email,
                area: order.area,
                car: selectedCar,
                carId: selectedCarId
            };

            console.log('Submitting order:', orderData);

            // Send data to backend
          
            const response = await axios.post('http://localhost:5000/api/order/orderinfo', orderData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            console.log('Order submitted successfully:', response.data);
            alert('\tOrder submitted successfully.\n You Will recieve confirmation Email Shortly!');
            
            // Reset form after successful submission
            setOrder({
                firstname: "",
                lastname: '',
                email: '',
                area: '',
                car: {}
            });
            setSelectedCarId("");
            setSelectedCar({});
            
        } catch (error) {
            console.error('Error submitting order:', error);
            alert('Error submitting order. Please try again.');
        } 
    };

    return(
        <>
            <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 md:p-8'>
                <div className='max-w-7xl mx-auto'>
                    {/* Header */}
                    <div className='text-center mb-8'>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4'>
                            Book Your Perfect Car
                        </h1>
                        <p className='text-gray-300 text-lg md:text-xl'>
                            Fill out the details below to reserve your vehicle
                        </p>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-start'>
                        
                        {/* Form Section */}
                        <div className='w-full lg:w-2/5 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-200'>
                            <div className='mb-8 text-center'>
                                <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-2'>
                                    Booking Details
                                </h2>
                                <div className='w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full'></div>
                            </div>
                            
                            <form onSubmit={handleSubmit} className='space-y-6'>
                                {/* Car Selection */}
                                <div className='space-y-2'>
                                    <label htmlFor="carSelect" className="text-gray-700 font-semibold text-lg flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V3m6 4V3m-6 0h6M7 21h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        Select Car *
                                    </label>
                                    <select
                                        id="carSelect"
                                        name="carSelect"
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-lg focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-gray-400 bg-white"
                                        required
                                        value={selectedCarId}
                                        onChange={handleCarChange}
                                    >
                                        <option value="">Choose your preferred vehicle</option>
                                        {cars.map((car, index) => (
                                            <option key={index} value={car.id}>
                                                {car.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Personal Information */}
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <div className='space-y-2'>
                                        <label htmlFor='firstname' className='text-gray-700 font-semibold text-lg flex items-center'>
                                            <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            First Name *
                                        </label>
                                        <input 
                                            type="text" 
                                            name='firstname' 
                                            id='firstname' 
                                            value={order.firstname} 
                                            onChange={handleChange} 
                                            className='w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-lg focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-gray-400' 
                                            placeholder='Enter first name'
                                            required
                                        />
                                    </div>

                                    <div className='space-y-2'>
                                        <label htmlFor='lastname' className='text-gray-700 font-semibold text-lg flex items-center'>
                                            <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            Last Name *
                                        </label>
                                        <input 
                                            type="text" 
                                            name='lastname' 
                                            id='lastname' 
                                            value={order.lastname} 
                                            onChange={handleChange} 
                                            className='w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-lg focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-gray-400' 
                                            placeholder='Enter last name'
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className='space-y-2'>
                                    <label htmlFor='email' className='text-gray-700 font-semibold text-lg flex items-center'>
                                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                        Email Address *
                                    </label>
                                    <input 
                                        type="email" 
                                        name='email' 
                                        id='email' 
                                        value={order.email} 
                                        onChange={handleChange} 
                                        className='w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-lg focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-gray-400' 
                                        placeholder='Enter email address'
                                        required
                                    />
                                </div>

                                {/* Area Selection */}
                                <div className='space-y-2'>
                                    <label htmlFor="area" className="text-gray-700 font-semibold text-lg flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        Pickup Location *
                                    </label>
                                    <select 
                                        id="area" 
                                        name="area" 
                                        value={order.area}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-lg focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-gray-400 bg-white"
                                        required
                                    >
                                        <option value="">Choose pickup location</option>
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

                                {/* Submit Button */}
                                <div className='pt-4'>
                                    <button 
                                        type="submit" 
                                        className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 hover:from-blue-700 hover:via-blue-800 hover:to-purple-700 text-white font-bold text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300/50 active:scale-95"
                                    >
                                        <span className="flex items-center justify-center">
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Submit Booking Request
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Car Details Section */}
                        <div className='w-full lg:w-3/5 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden'>
                            {selectedCar.name ? (
                                <>
                                    {/* Car Header */}
                                    <div className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-6 text-center'>
                                        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
                                            {selectedCar.name}
                                        </h2>
                                        <p className='text-lg md:text-xl font-semibold mt-2'>
                                            ${selectedCar.pricePerDay}/day
                                        </p>
                                    </div>

                                    {/* Car Image */}
                                    <div className='bg-gray-900 p-6 flex justify-center items-center'>
                                        <div className='relative'>
                                            <img 
                                                src={selectedCar.imageUrl} 
                                                className="max-h-64 md:max-h-80 w-auto object-contain rounded-xl shadow-lg" 
                                                alt={selectedCar.name}
                                            />
                                            <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl'></div>
                                        </div>
                                    </div>

                                    {/* Car Specifications */}
                                    <div className='p-6'>
                                        <h3 className='text-yellow-400 text-xl md:text-2xl font-bold mb-6 text-center'>
                                            Vehicle Specifications
                                        </h3>
                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-white'>
                                            <div className='flex items-center bg-gray-800/50 p-3 rounded-lg'>
                                                <svg className="w-5 h-5 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                                <span className='font-semibold'>Mileage:</span>
                                                <span className='ml-2'>{selectedCar.mileage}</span>
                                            </div>
                                            <div className='flex items-center bg-gray-800/50 p-3 rounded-lg'>
                                                <svg className="w-5 h-5 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                                <span className='font-semibold'>Class:</span>
                                                <span className='ml-2'>{selectedCar.class}</span>
                                            </div>
                                            <div className='flex items-center bg-gray-800/50 p-3 rounded-lg'>
                                                <svg className="w-5 h-5 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className='font-semibold'>Gearbox:</span>
                                                <span className='ml-2'>{selectedCar.gearbox}</span>
                                            </div>
                                            <div className='flex items-center bg-gray-800/50 p-3 rounded-lg'>
                                                <svg className="w-5 h-5 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                <span className='font-semibold'>Max Passengers:</span>
                                                <span className='ml-2'>{selectedCar.maxPassengers}</span>
                                            </div>
                                            <div className='flex items-center bg-gray-800/50 p-3 rounded-lg'>
                                                <svg className="w-5 h-5 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                                </svg>
                                                <span className='font-semibold'>Fuel Type:</span>
                                                <span className='ml-2'>{selectedCar.fuel}</span>
                                            </div>
                                            <div className='flex items-center bg-gray-800/50 p-3 rounded-lg'>
                                                <svg className="w-5 h-5 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                                                </svg>
                                                <span className='font-semibold'>Engine:</span>
                                                <span className='ml-2'>{selectedCar.engineCapacity} CC</span>
                                            </div>
                                            <div className='flex items-center bg-gray-800/50 p-3 rounded-lg'>
                                                <svg className="w-5 h-5 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V3m6 4V3m-6 0h6M7 21h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <span className='font-semibold'>Year:</span>
                                                <span className='ml-2'>{selectedCar.year}</span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className='h-full flex flex-col justify-center items-center p-8 text-center'>
                                    <svg className="w-24 h-24 text-gray-600 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V3m6 4V3m-6 0h6M7 21h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <h3 className='text-2xl md:text-3xl font-bold text-gray-400 mb-4'>
                                        Select a Car
                                    </h3>
                                    <p className='text-gray-500 text-lg'>
                                        Choose a vehicle from the dropdown to see its details and specifications here.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderForm;