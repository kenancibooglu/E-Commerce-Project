import logo from "./logo/shopping.png";
import "./styles.css";
import { FaAngleDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function TopBar() {

  const pagesClick = (e) => {
    e.preventDefault();
  }

  return (
    <div className="App">
      <nav className="bg-gray-40 text-black p-2 top-0 left-0 right-0 z-50 flex flex-col sm:flex-row sm:flex-wrap items-center navbar">
        <div className="flex items-center p-2">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className="mr-2 logo-png" /> Book
            <span className="font-bold">Market</span>
          </a>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap">
          <a href="/shops" className=" items-center p-2 hidden sm:flex">
            Shops
          </a>
          <a href="/offers" className=" items-center p-2 hidden sm:flex">
            Offers
          </a>
          <a href="/contanct" className=" items-center p-2 hidden sm:flex">
            Contact
          </a>
          <div className="relative  items-center p-2 hidden sm:flex">
            <a onClick={pagesClick} className="flex items-center" href="/pages">
              Pages <FaAngleDown />
            </a>
          </div>
        </div>
        {/* Search */}
        <form className="relative flex items-center ml-auto">
          <label htmlFor="default-search" className="mb-2 text-sm  font-medium text-gray-900 sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-800 dark:text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="w-full p-4 ps-10 text-sm text-gray-900 border border-gray-900 rounded-lg bg-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-800 dark:text-gray-800 inputLine hidden sm:block"
              placeholder="Search"
              required
            />

          </div>
        </form>
        <a href="/shopping" className="p-2 hidden sm:flex">
          <FaShoppingCart className="shopping" />
        </a>

        <div className="flex flex-col sm:flex-row sm:flex-wrap">
        <a href="/" className="bg-green-700 hover:bg-green-900 text-white font-bold px-5 border rounded h-10 m-2 flex justify-center items-center">
            Join
          </a>
          <a href="/" className="bg-green-700 hover:bg-green-900 text-white font-bold px-5 border rounded h-10 m-2 flex justify-center items-center">
            Become a Seller
          </a>
        </div>
      </nav>
    </div>



  );
}

export default TopBar;
