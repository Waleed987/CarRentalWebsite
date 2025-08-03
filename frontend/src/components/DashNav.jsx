function DashNav(){
    return(
        <nav className="navbar-container bg-black/95 backdrop-blur-sm shadow-lg border-b border-gray-800 h-20 md:h-24 w-full flex items-center justify-between px-4 md:px-8 lg:px-12">
            {/* Logo Section */}
            <div className="flex items-center flex-shrink-0">
                <a 
                    href="https://flowbite.com/" 
                    className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300"
                >
                    <img 
                        src="https://flowbite.com/docs/images/logo.svg" 
                        className="h-10 md:h-12 w-auto" 
                        alt="Flowbite Logo" 
                    />
                    <span className="text-xl md:text-2xl lg:text-3xl font-bold text-white whitespace-nowrap">
                        Jus Moto
                    </span>
                </a>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center space-x-3 md:space-x-4">
                {/* Order Now Button */}
                <a href="/orderform" className="group">
                    <button className="relative inline-flex items-center justify-center overflow-hidden text-sm md:text-base font-semibold text-white rounded-lg transition-all duration-300 hover:scale-105 focus:ring-4 focus:outline-none focus:ring-purple-300/50 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 hover:from-purple-700 hover:via-purple-800 hover:to-blue-700 shadow-lg hover:shadow-purple-500/25">
                        <span className="relative px-4 md:px-6 py-2.5 md:py-3 flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Order Now
                        </span>
                    </button>
                </a>

                {/* Logout Button */}
                <a href="/" className="group">
                    <button className="relative inline-flex items-center justify-center overflow-hidden text-sm md:text-base font-semibold rounded-lg transition-all duration-300 hover:scale-105 focus:ring-4 focus:outline-none border-2 border-gray-600 text-gray-300 hover:text-white hover:border-red-500 hover:bg-red-500/10 focus:ring-red-300/50">
                        <span className="relative px-4 md:px-6 py-2.5 md:py-3 flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            Log Out
                        </span>
                    </button>
                </a>
            </div>

            {/* Mobile Menu Button (for future mobile navigation) */}
            <div className="md:hidden">
                <button 
                    type="button" 
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-400 rounded-lg hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600 transition-colors duration-300"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
        </nav>
    );
}

export default DashNav;