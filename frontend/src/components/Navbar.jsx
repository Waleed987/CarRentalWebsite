function Navbar(){
    return(
        <div className="navbar-container bg-transparent h-[100px] w-full flex flex-row flex-wrap items-center">
            <div className="item1 bg-transparent h-full w-[30%] gap-1">
                
            <a href="https://flowbite.com/" className="flex ml-[30px] pt-[25px] items-center space-x-3 rtl:space-x-reverse">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-13" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jus Moto</span>
             </a>

            </div>
            <div className="item2 bg-transparent h-full w-[70%] flex flex-row flex-wrap items-center font-bold justify-end text-3xl">
            <a href="/login">
            <button className="cursor-pointer animate-cards relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-[1.2rem] font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                     Log-in
                </span>
            </button>
            </a>


            <a href="/signup">
            <button className="cursor-pointer animate-cards relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-[1.2rem] font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 mr-[40px]">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                     Sign-up
                </span>
            </button>
            </a>
            </div>
        </div>
    );
}

export default Navbar;