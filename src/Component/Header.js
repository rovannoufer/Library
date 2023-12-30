import React, { useEffect, useState } from 'react';
import './css/navstyles.css';
import './css/body.css';
import { LiaBookSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import image from './img/mikolaj-DCzpr09cTXY-unsplash.jpg'


export default function Header() {

  return (
       <>
       <header>
           <Link to='/header'><LiaBookSolid size={100}/> </Link>
          <nav>
            <ul className="nav__links">
              <li><Link to='/books'>Books</Link></li>
              <li><Link to='/writer'>Writers</Link></li>
              <li><Link to='/signup'>SignIn</Link></li>
            </ul>
          </nav> 
        </header>
      <section className="home" id="home">
        <div className="image">
          <img src={image} 
          alt="Knowledge" />
        </div>

        <div className="content">
          <h3>Discover the World of Books</h3>
          <p>
          "Books are a uniquely portable magic."
            - Stephen King
          </p>
          <button><Link to='/books'>Books</Link></button>
        </div>
      </section>


    </>
  );
}


