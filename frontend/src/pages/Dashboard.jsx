import Navbar from "../components/Navbar";
import DashHero from "../components/DashHero";
import CardSlider from "../components/CarSlider";
function Dashboard(){
    return(
        <>
            <div className="dashboard-container flex flex-col w-screen h-screen bg-white">
                <div className="w-full bg-black">
                <Navbar />
                </div>
                

                <div className="dashboard-hero w-screen h-[600px] bg-amber-200">
                    <img src="/src/assets/rental.webp" className="relative h-full w-full object-cover"/>
                    <div className="flex flex-col absolute h-[550px] w-[800px] bg-transparent top-30 left-5">
                        <p className="ml-[10px] mt-[100px] text-[4.5rem] bg-transparent text-white font-bold font-sans">Car rental marketing</p>
                        <p className="ml-[15px] mt-[20px] text-[1.7rem] font-bold text-white ">We Provide the best Car Rental Facilities in our Area</p>
                        <button type="button" class="cursor-pointer text-white h-[80px] bg-blue-700 font-bold hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-[1.4rem] px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[180px] ml-[10px] mt-[80px]">Get Started</button>
                    </div>
                </div>

                <div className="bg-black w-[95%] h-[200px] mt-[20px] ml-[35px] rounded-[20px] pl-[15px]">
                    <form className="flex flex-row">
                        <div className="w-[20%] h-[200px] flex flex-col">
                            <label className="text-[1.5rem] ml-[5px] mt-[40px] mb-[5px] text-white" >Pick-up Location</label>
                            <select className="bg-white pt-[5px] pb-[5px] text-center border-2 w-[95%] h-[55px] text-[1.8rem] rounded-[10px]" >
                                <option>Pick location and city</option>
                                <option>Pakistan</option>
                                <option>India</option>
                            </select>
                        </div>
                       
                        <div className="w-[20%] h-[200px] flex flex-col">
                            <label className="text-white text-[1.5rem] ml-[5px] mt-[40px] mb-[5px]" >Return Location</label>
                            <select className="bg-white pt-[5px] pb-[5px] text-center border-2 w-[95%] h-[55px] text-[1.8rem] rounded-[10px]" >
                                <option>Pick location and city</option>
                                <option>Pakistan</option>
                                <option>India</option>
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
            <div className="h-[1000px] w-full bg-white mt-[10px]">
                <CardSlider/>
            </div>
        </>
    );
}

export default Dashboard;