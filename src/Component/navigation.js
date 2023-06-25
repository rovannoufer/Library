import React from 'react';

function navigation() {
  return (
    <header>
      <a href="./Login.js">
        <i className="fa-regular fa-book-heart"></i>
      </a>
      <nav>
        <ul className="nav__links">
          <li>
            <a href="#">Books</a>
          </li>
          <li>
            <a href="./Writer.html" target="_blank">
              Writers
            </a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Subscribe</a>
          </li>
          <li>
            <a href="#">SignIn</a>
          </li>
        </ul>
      </nav>
      <div className="box">
        <input type="text" placeholder="Search.." />
        <a className="das cta" href="#">
          <i className="fa-solid fa-magnifying-glass" style={{ color: '#1b2840' }}></i>
        </a>
      </div>
    </header>
  );
}

export default navigation;