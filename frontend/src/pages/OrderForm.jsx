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
            <div className='bg-gray-900 h-screen w-screen flex justify-center items-center gap-[50px] flex-wrap'>
                
                <div className='bg-white text-[1.4rem] pl-[10px] pr-[10px] h-auto w-[30%] rounded-[10px] flex flex-col'>
                    <div className='mb-[10px] h-[7%] w-full flex justify-center items-center rounded-[10px]'>
                        <h className='text-[1.5rem] font-serif mt-[13px]'>PLEASE PROVIDE THE DETAILS</h>
                    </div>
                    <form onSubmit={handleSubmit}>

                    <div className='mb-[15px]'>
                    <label htmlFor="carSelect" className="text-black ml-[10px] text-[1.4rem]  block">Car*</label>
                        <select
                        id="carSelect"
                        name="carSelect"
                        className="border-2 border-gray-300 p-3 rounded-lg w-full focus:border-blue-500 focus:outline-none transition-colors"
                        required
                        value={selectedCarId}
                        onChange={handleCarChange}
                        >
                        <option value="">Select a Car</option>
                        {cars.map((car, index) => (
                            <option key={index} value={car.id}>
                            {car.name}
                            </option>
                        ))}
                        </select>
                    </div>
                    <div className='mb-[15px] flex flex-col  w-full flex justify-center '>
                        <label htmlFor='firstname' className='ml-[10px]'>First Name : </label>
                        <input type="text" name='firstname' id='firstname' value={order.firstname} onChange={handleChange} className='h-[60px] text-[1.4rem] border-2 border-gray-300 rounded-[10px] pl-[10px] focus:border-blue-500 focus:outline-none' placeholder='First Name'></input>
                    </div>

                    <div className='mb-[15px] flex flex-col  w-full flex justify-center '>
                        <label htmlFor='lastname' className='ml-[10px]' >Last Name : </label>
                        <input type="text" name='lastname' id='lastname' value={order.lastname} onChange={handleChange} className='h-[60px] text-[1.4rem] border-2 border-gray-300 rounded-[10px] pl-[10px] focus:border-blue-500 focus:outline-none' placeholder='Last Name'></input>
                    </div>



                    <div className='mb-[15px] flex flex-col  w-full flex justify-center '>
                        <label htmlFor='email' className='ml-[10px]'>Email : </label>
                        <input type="email" name='email' id='email' value={order.email} onChange={handleChange} className='h-[60px] text-[1.4rem] border-2 border-gray-300 rounded-[10px] pl-[10px] focus:border-blue-500 focus:outline-none' placeholder='Email'></input>
                    </div>


                    <div className='flex flex-col  w-full flex justify-center'>
                    <label htmlFor="area" className="ml-[10px] text-[1.4rem] mb-2 block">Area*</label>
                        <select 
                            id="area" 
                            name="area" 
                            value={order.area}
                            onChange={handleChange}
                            className="h-[60px] border-2 border-gray-300 p-3 rounded-lg w-full focus:border-blue-500 focus:outline-none transition-colors"
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

                   
                    <div className='mt-[10px] h-[100px] w-full flex justify-center items-center'>

                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-[1.4rem] px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </div>

                    </form>
                </div>

                <div className='bg-black text-yellow-400 h-[80%] w-[60%] rounded-[10px] flex justify-center items-center flex-col'>
                    <div className='text-[2rem] flex justify-center items-center font-bold font-serif mt-[20px] border-t-2 border-b-4'>
                        <h1>{selectedCar.name}</h1>
                    </div>
                    <div className='font-serif font-bold text-[1.5rem] rounded-[10px] p-[50px] h-[50%] w-full flex flex-wrap'>
                        <p className='w-[48%] mr-[5px]'>Mileage : <b>{selectedCar.mileage}</b></p>
                        <p className='w-[50%]'>Price : ${selectedCar.pricePerDay} </p>
                        <p className='w-[50%]'>Class : {selectedCar.class} </p>
                        <p className='w-[50%]'>Gearbox: {selectedCar.gearbox}</p>
                        <p className='w-[50%]'>Max Passengers : {selectedCar.maxPassengers}</p>
                        <p className='w-[50%]'>Fuel Type: {selectedCar.fuel}</p>
                        <p className='w-[50%]'>Engine Capacity : {selectedCar.engineCapacity} CC</p>
                        <p className='w-[50%]'>Year : {selectedCar.year}</p>
                    </div>
                    <div className='bg-gray-900 h-[50%] w-full flex justify-center items-center'>
                        <img src={selectedCar.imageUrl} className="h-[90%] w-[420px] object-fill rounded-[10px]" ></img>
                    </div>
                </div>

            </div>
        </>
    );
}

export default OrderForm;