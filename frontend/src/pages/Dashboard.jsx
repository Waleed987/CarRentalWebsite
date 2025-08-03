import Navbar from "../components/Navbar";
import DashHero from "../components/DashHero";
import CardSlider from "../components/CarSlider";
import DashBottom from "../components/DashBottom";
import LandFooter from "../components/LandFooter";
import DashNav from "../components/DashNav";

function Dashboard(){
    return(
        <>
            {/* Main container with proper overflow handling */}
            <div className="dashboard-container flex flex-col w-full min-h-screen bg-gray-200 overflow-x-hidden">
                {/* Navigation */}
                <div className="w-full bg-black">
                    <DashNav />
                </div>
                
                {/* Hero Section */}
                <div className="dashboard-hero relative w-full h-[600px] bg-amber-200">
                    <img src="/src/assets/rental.webp" className="h-full w-full object-cover"/>
                    <div className="absolute inset-0 flex flex-col justify-center pl-8 md:pl-16 lg:pl-20">
                        <div className="max-w-4xl">
                            <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-transparent text-white font-bold font-sans leading-tight mb-6">
                                Car rental marketing
                            </p>
                            <p className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-12 max-w-3xl">
                                We Provide the best Car Rental Facilities in our Area
                            </p>
                            <button 
                                type="button" 
                                className="cursor-pointer text-white h-16 md:h-20 bg-blue-700 font-bold hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg md:text-xl px-8 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-44 md:w-48 transition-all duration-300"
                            >
                                <a href="/orderform">Book Now</a>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Info Section */}
                <div className="bg-black py-12 px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-black bg-white rounded-3xl p-8 md:p-12 lg:p-16">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8 text-center md:text-left">
                                Book Your Dream Car Now!
                            </h1>
                            <p className="font-normal text-gray-800 text-lg md:text-xl lg:text-2xl leading-relaxed">
                                Rent a Car Now from Our World-Wide Trusted Dealers!
                                We offer a wide range of vehicles, all in top condition and ready to go.
                                Instant booking available—just a single click and you're set to drive.
                                No hidden charges, no hassle—pure convenience at your fingertips.
                                Serving customers globally with trust, quality, and satisfaction.
                                Book now and experience the road like never before!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Card Slider Section */}
            <div className="py-16 w-full bg-gray-100">
                <CardSlider/>
            </div>

            {/* Dashboard Bottom Section */}
            <div className="py-16 w-full bg-blue-100 flex justify-center items-center">
                <DashBottom/>
            </div>
            
            {/* Content Section */}
            <div className="w-full bg-white py-16">
                <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-lg md:text-xl lg:text-2xl leading-relaxed space-y-8">
                        <div>
                            <span className="font-bold text-2xl md:text-3xl block mb-4">
                                Convenient Car Rental in Pakistan:
                            </span>
                            <p className="mb-6">
                                We make it easy to rent a car in Pakistan. You can browse for the perfect vehicle and book online. Avoid the hassle of trying to arrange transportation after you arrive.
                            </p>
                            <p className="mb-6">
                                Car rental in Pakistan is your best option for getting around Islamabad and the surrounding area. You can jump in your car and travel to your next destination at any time rather than waiting for a bus.
                            </p>
                            <p>
                                You can pick up your car from a pick-up location that works better for your specific needs. We offer flexible rental options to accommodate your travel arrangements.
                            </p>
                        </div>

                        <div className="pt-8">
                            <span className="font-bold text-2xl md:text-3xl block mb-6">
                                How Does Renting a Car in Pakistan Work?
                            </span>
                            <p className="mb-4">Car rental in Pakistan involves just a few steps:</p>
                            <div className="space-y-2 ml-4">
                                <p><strong>1.</strong> Pick a car</p>
                                <p><strong>2.</strong> Choose extras</p>
                                <p><strong>3.</strong> Set pickup locations</p>
                                <p><strong>4.</strong> Reserve your vehicle</p>
                                <p><strong>5.</strong> You will receive Confirmation from our Company on provided email, payment details will be mentioned in that email.</p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <span className="font-bold text-2xl md:text-3xl block mb-6">
                                Why Choose Us for Car Rentals in Pakistan?
                            </span>
                            <p className="mb-4">
                                Rent Point Pakistan is the leading source for Pakistan car rentals. We offer many benefits for any of your rental needs:
                            </p>
                            <div className="space-y-2 ml-4 mb-6">
                                <p><strong>1.</strong> Great prices</p>
                                <p><strong>2.</strong> Clean, safe vehicles</p>
                                <p><strong>3.</strong> Large Inventory</p>
                                <p><strong>4.</strong> Friendly staff</p>
                                <p><strong>5.</strong> Convenient options</p>
                            </div>
                            
                            <div className="space-y-6">
                                <p>
                                    We are based in Islamabad, the capital of Pakistan and the country's largest city. You can pick up your vehicle directly after landing at Islamabad International Airport.
                                </p>
                                <p>
                                    You can also expect the best prices for car rentals in Pakistan. We offer competitive pricing for all vehicles, from small cars to luxury sedans.
                                </p>
                                <p>
                                    Our large inventory is full of well-maintained vehicles, including many cars with less than 25,000 kilometers. You can rely on our cars to get you to any destination in Pakistan. Our vehicles offer a clean, safe ride for your next trip.
                                </p>
                                <p>
                                    We also stand out due to our commitment to customer service. Our friendly staff can address any questions or concerns that you may have, including questions related to finding the right car for your trip.
                                </p>
                                <p>
                                    You also have a wide selection of features and options when renting a car from us. We can include baby seats, car seats for children, navigation features, and excess protection. You can also add another driver and arrange a pickup or drop-off location that works best for you, such as a spot in Islamabad City or Durres Port.
                                </p>
                                <p>
                                    You should also consider the duration and distance of the trip. Pakistan covers a distance of about 210 miles (340 kilometers) from north to south and 95 miles (150 kilometers) from east to west. Depending on where you plan to travel, you may prefer a car with a more luxurious interior and spacious seating.
                                </p>
                                <p>
                                    The type of transmission is another important consideration. If you typically drive a vehicle with an automatic transmission, we recommend sticking with an automatic one. However, we also have cars with manual transmissions for those who prefer a stick shift.
                                </p>
                                <p>
                                    Along with the previous considerations, you need to think about your budget and personal style. We offer affordable prices for all rentals, but some vehicles are cheaper than others. Think about the features that matter most to you and start comparing options. You can also contact us for assistance in picking the right vehicle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="footer bg-gradient-to-t from-black to-black">
                <LandFooter />
            </div>
        </>
    );
}

export default Dashboard;