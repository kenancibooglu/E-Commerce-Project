import logo from "./logo/Home.png";
import "./styles.css";
import { BookData, popularProducts } from "../bookData.js";

const Home = () => {
  return (

    <div className="Home">
      <img className="logo hidden sm:block" src={logo} alt="logo" />
      <h1 className="textBest text-xl md:text-2xl lg:text-3xl">Best Selling Products</h1>
      <div className="main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 ml-10">
        {BookData.map(book => (
          <div key={book.id} className="book-card bg-white p-1 shadow-md rounded-md">
            <img src={book.img} alt={book.name} className="w-full h-auto mb-2" />
            <h2 className="text-lg font-semibold">{book.name}</h2>
            <button className="text-orange-500 flex">${book.price}</button>
          </div>
        ))}
      </div>
      <div className="line"></div>
      <h1 className="textBest text-xl md:text-2xl lg:text-3xl">Popular Products</h1>
      <div className="main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 ml-10">
        {popularProducts.map(book => (
          <div key={book.id} className="book-card bg-white p-1 shadow-md rounded-md">
            <img src={book.img} alt={book.name} className="w-full h-auto mb-2" />
            <h2 className="text-lg font-semibold">{book.name}</h2>
            <p className="text-gray-400">by {book.author}</p>
            <button className="text-orange-500 flex">${book.price}</button>
          </div>
        ))}
      </div>
      <div className="line"></div>
      <h1 className="textBest text-xl md:text-2xl lg:text-3xl">Whick Book You Like To See?</h1>
      <div className="main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 ml-10">
        {popularProducts.map(book => (
          <div key={book.id} className="book-card bg-white p-1 shadow-md rounded-md">
            <img src={book.img} alt={book.name} className="w-full h-auto mb-2" />
            <h2 className="text-lg font-semibold">{book.name}</h2>
            <p className="text-gray-400">by {book.author}</p>
            <button className="text-orange-500 flex">${book.price}</button>
          </div>
        ))}
      </div>
    </div>

  );
}

export default Home;