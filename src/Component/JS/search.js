import React, { useState } from 'react';
import axios from 'axios';
import '../css/search.css'; // Import the CSS file for styling
import { LiaBookSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';


export default function Searchbar() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apikey, setApiKey] = useState("AIzaSyBvyhHoUdy0Fy9vMS6E35yBDISLH1yUmUw");

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apikey + "&maxResults=40")
      .then(data => {
        console.log(data.data.items);
        setResult(data.data.items);
      });
  }
  
  
  return (
    <>
    <header>
          <Link to="/header"><LiaBookSolid size={100}/></Link>
          <nav>
            <ul className="nav__links">
            <li><Link to='/books'>Books</Link></li>
              <li><Link to='/writer'>Writers</Link></li>
              <li><Link to='/signup'>SignIn</Link></li>
            </ul>
          </nav>
         
        </header>

      <form onSubmit={handleSubmit}>
        <div>
          <input type='text' onChange={handleChange} placeholder='Search here' autoComplete='off' />
        <button type='submit'>Search</button>
        </div>
      </form>

      <div className="card-container">
        {result.map((book) => (
         
          <a href={book.volumeInfo.previewLink} target={'_blank'} key={book.id}>
            <div className="card">
              <img  src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail} alt={book.title} />
              <p style={{color: "#1b2840"}}>{book.volumeInfo.title}</p>
              <p style={{color: "#1b2840"}}>{book.volumeInfo.authors}</p>
              
              <p style={{color: "#1b2840"}}>[{book.volumeInfo.categories}]</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}


