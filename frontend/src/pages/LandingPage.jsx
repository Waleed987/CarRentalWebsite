import Navbar from "../components/Navbar";
import LandFooter from "../components/LandFooter";
function LandingPage() {
    
    return (
        <>
            <div className="relative h-full w-full">
                <img 
                    src="/src/assets/car2c1.jpg" 
                    alt="Car" 
                    className="h-full w-full object-cover"
                />
                <div className="fixed top-0 left-0 w-full">
                  <Navbar/>
                </div>

                <div className="absolute bottom-0 left-0 w-full">
                    <LandFooter/>
                </div>
                
               
            </div>

         
        </>
    );
}

export default LandingPage;
