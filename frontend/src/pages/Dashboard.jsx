import Navbar from "../components/Navbar";
import DashHero from "../components/DashHero";
import CardSlider from "../components/CarSlider";
import DashBottom from "../components/DashBottom";
import LandFooter from "../components/LandFooter";
import DashNav from "../components/DashNav";
function Dashboard(){
    return(
        <>
            <div className="dashboard-container flex flex-col w-screen h-screen bg-gray-200">
                <div className="w-full bg-black">
                <DashNav />
                </div>
                

                <div className="dashboard-hero w-screen h-[600px] bg-amber-200">
                    <img src="/src/assets/rental.webp" className="relative h-full w-full object-cover"/>
                    <div className="flex flex-col absolute h-[550px] w-[800px] bg-transparent top-30 left-5">
                        <p className="ml-[10px] mt-[100px] text-[4.5rem] bg-transparent text-white font-bold font-sans">Car rental marketing</p>
                        <p className="ml-[15px] mt-[20px] text-[1.7rem] font-bold text-white ">We Provide the best Car Rental Facilities in our Area</p>
                        <button type="button" class="cursor-pointer text-white h-[80px] bg-blue-700 font-bold hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-[1.4rem] px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[180px] ml-[10px] mt-[80px]">
                            <a href="/orderform">Get Started</a>
                        </button>
                    </div>
                </div>

                <div className="bg-black w-[95%] h-[200px] mt-[20px] ml-[35px] rounded-[20px] pl-[15px]">
                    <form className="flex flex-row">
                        <div className="w-[20%] h-[200px] flex flex-col">
                            <label className="text-[1.5rem] ml-[5px] mt-[40px] mb-[5px] text-white" >Pick-up Location</label>
                           
                            <select className="bg-white pt-[5px] pb-[5px] text-center border-2 w-[95%] h-[55px] text-[1.8rem] rounded-[10px]">
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
                       
                        <div className="w-[20%] h-[200px] flex flex-col">
                            <label className="text-white text-[1.5rem] ml-[5px] mt-[40px] mb-[5px]" >Return Location</label>
                            <select className="bg-white pt-[5px] pb-[5px] text-center border-2 w-[95%] h-[55px] text-[1.8rem] rounded-[10px]">
                                <option value="">Select Return Location</option>
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

                        <div className="w-[20%] h-[200px] flex flex-col">
                            <label className="text-white text-[1.5rem] ml-[5px] mt-[40px] mb-[5px]" >Pick-up Date</label>
                            <input type="date" className="bg-white pt-[5px] pb-[5px] text-center border-2 w-[95%] h-[55px] text-[1.8rem] rounded-[10px]" >
                            </input>
                        </div>

                        <div className="w-[20%] h-[200px] flex flex-col">
                            <label className="text-white text-[1.5rem] ml-[5px] mt-[40px] mb-[5px]" >Return Date</label>
                            <input type="date" className="bg-white pt-[5px] pb-[5px] text-center border-2 w-[95%] h-[55px] text-[1.8rem] rounded-[10px]" >
                            </input>
                        </div>

                        <div className="bg-black w-[20%] h-[200px] flex justify-center items-center ">
                        <button type="submit" class="cursor-pointer text-white h-[65px] mt-[10px] bg-blue-700 font-bold hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-[1.4rem] px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[180px] ml-[10px]">Submit</button>
                        </div>
                    </form>
                </div>

                
            </div>
            <div className="h-[700px] w-full bg-gray-100">
                <CardSlider/>
            </div>

            <div className="h-[500px] w-full bg-blue-100 mt-[60px] flex justify-center items-center">
                <DashBottom/>
            </div>
            <div className="h-auto w-full bg-white mt-[0px] flex justify-center items-center">
               
                <p className="text-[2rem] p-[90px]">
                <span className="font-bold text-center">Convenient Car Rental in Albania: </span><br></br>
                    We make it easy to rent a car in Albania. You can browse for the perfect vehicle and book

                    online.<br></br> Avoid the hassle of trying to arrange transportation after you arrive.

                    Car rental in Albania is your best option for getting around Tirana and the surrounding area.

                    You can jump in your car and travel to your next destination at any time rather than waiting

                    for a bus.

                    You can pick up your car from the Tirana International Airport or arrange a pick-up location

                    that works better for your specific needs. We offer flexible rental options to accommodate

                    your travel arrangements, including setting pickup spots in Tirana City and Durres Port.

                    <br></br>
                    <br></br>

                    <span><b>How Does Renting a Car in Albania Work?</b></span><br></br>
                    Car rental in Albania involves just a few steps:
                    <br></br>
                    <b>
                        
                    </b>
                    1-Pick a car<br></br>
                    2-Choose extras<br></br>
                    3-Set pickup and drop-off locations<br></br>
                    4-Set pickup and drop-off dates<br></br>
                    5-Reserve your vehicle<br></br>
                    6-You can pay online or at pickup. Simply find the vehicle you want and reserve it for the date

                    of your visit. Whether you plan on staying for a day or longer, we have you covered.
                    <br></br>
                    <br></br>
                    
                    <b>

                    Why Choose Us for Car Rentals in Albania?
                    </b>
                    <br></br>
                    Rent Point Albania is the leading source for Albania car rentals. We offer many benefits for

                    any of your rental needs:<br></br>

                    1-Great prices<br></br>
                    2-Clean, safe vehicles<br></br>
                    3-Large Inventory<br></br>
                    4-Friendly staff<br></br>
                    5-Convenient options<br></br><br></br>
                    We are based in Tirana, the capital of Albania and the country’s largest city. You can

                    pick up your vehicle directly after landing at Tirana International Airport.

                    You can also expect the best prices for car rentals in Albania. We offer competitive pricing

                    for all vehicles, from small cars to luxury sedans.

                    Our large inventory is full of well-maintained vehicles, including many cars with less than

                    25,000 kilometers. You can rely on our cars to get you to any destination in Albania. Our

                    vehicles offer a clean, safe ride for your next trip.<br></br><br></br>

                    We also stand out due to our commitment to customer service. Our friendly staff can

                    address any questions or concerns that you may have, including questions related to finding

                    the right car for your trip.<br></br><br></br>

                    You also have a wide selection of features and options when renting a car

                    from us. We can include baby seats, car seats for children, navigation features, and excess

                    protection. You can also add another driver and arrange a pickup or drop-off location that

                    works best for you, such as a spot in Tirana City or Durres Port.<br></br><br></br>


                    You should also consider the duration and distance of the trip. Albania covers a distance of

                    about 210 miles (340 kilometers) from north to south and 95 miles (150 kilometers) from

                    east to west. Depending on where you plan to travel, you may prefer a car with a more

                    luxurious interior and spacious seating.<br></br><br></br>

                    The type of transmission is another important consideration. If you typically drive a vehicle

                    with an automatic transmission, we recommend sticking with an automatic one. However,

                    we also have cars with manual transmissions for those who prefer a stick shift.<br></br><br></br>

                    Along with the previous considerations, you need to think about your budget and personal

                    style. We offer affordable prices for all rentals, but some vehicles are cheaper than others.

                    Think about the features that matter most to you and start comparing options. You can also

                    contact us for assistance in picking the right vehicle.
                </p>
            </div>

            <div className="footer bg-gradient-to-t from-black to-black">
                <LandFooter />
            </div>
        </>
    );
}

export default Dashboard;