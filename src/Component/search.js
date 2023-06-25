import React, { useState } from "react";
import axios from 'axios';
import { Card } from 'react-bootstrap';

import './css/navstyles.css';
import './css/footer.css';
import './css/body.css';


const GoogleBooksSearch = () => {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("AIzaSyCqi37mzRrzkBrDZDb0BX9_IarX5iMOT88");

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=40")
      .then(data => {
        console.log(data.data.items);
        setResult(data.data.items);
      })
    }
    return (
      <React.Fragment>
        <header>
          <a href="./Login.js">
            <i className="fa-regular fa-book-heart"></i>
          </a>
          <nav>
            <ul className="nav__links">
              <li><a href="#">Books</a></li>
              <li><a href="./Writer.html" target="_blank">Writers</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Subscribe</a></li>
              <li><a href="#">SignIn</a></li>
            </ul>
          </nav>
          <div className="box">
            <input type="text" placeholder="Search.."onChange={handleSubmit} />
            <a className="das cta" href="#">
              <i className="fa-solid fa-magnifying-glass" style={{ color: '#1b2840' }}></i>
            </a>
          </div>
        </header>
      </React.Fragment>
    );
  }
  export default GoogleBooksSearch;