import logo from "./logo/Home.png";
import "./styles.css";
import {BookData} from "../bookData.js";

const Home = () => {
    return (
    <div className="Home">
      <img className="logo" src={logo} alt="logo" />
        <h1 className="textBest">Best Selling Products</h1>
        <div className="main">
        {BookData.map(book => (
          <div key={book.id} className="book-card">
            <img src={book.img} alt={book.name} />
            <h2>{book.name}</h2>
            <p class="text-orange-500">{book.price}</p>
          </div>
        ))}
      </div>
    </div>
    );
}

export default Home;