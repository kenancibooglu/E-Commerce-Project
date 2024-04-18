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
      <nav className="bg-gray-40 text-black p-2 top-0 left-0 right-0 z-50 flex navbar">
        <a className="flex items-center p-2" href="/">
          <img src={logo} alt="Logo" className="mr-2 logo-png" /> Pick
          <span className="font-bold">Bazar</span>
        </a>
        <a className="flex items-center p-2" href="/shops">
          Shops
        </a>
        <a className="flex items-center p-2" href="/offers">
          Offers
        </a>
        <a className="flex items-center p-2" href="/contanct">
          Contanct
        </a>
        <a onClick={pagesClick} className="flex items-center p-2" href="/pages">
          Pages <FaAngleDown />
        </a>
       
        <form class="ml-auto py-3">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-800 dark:text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-900 rounded-lg bg-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-800 dark:text-gray-800 inputLine "
              placeholder="Search"
              required
            />
          </div>
        </form>
        <a href="/shopping">
          <FaShoppingCart className="shopping" />
        </a>
        <button class="bg-green-700 hover:bg-green-900 text-white font-bold px-3 border  rounded h-10 m-5">
          Join
        </button>
        <a href="/" class="bg-green-700 hover:bg-green-900 text-white font-bold px-5 border  rounded h-10 m-5 flex justify-center items-center">
          Become a Seller
        </a>
       
      </nav>
      
    </div>
  );
}

export default TopBar;
