import React, { useEffect, useState } from 'react';
import './css/navstyles.css';
import './css/footer.css';
import './css/body.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { LiaBookSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import image from './img/Library.gif'


export default function Header() {

  return (
       <>
       <header>
           <Link to='/header'><LiaBookSolid size={100}/> </Link>
          <nav>
            <ul className="nav__links">
              <li><Link to='/books'>Books</Link></li>
              <li><Link to='/writer'>Writers</Link></li>
              <li><Link to='#'>Support</Link></li>
              <li><Link to='#'>Subscribe</Link></li>
              <li><Link to='/signup'>SignIn</Link></li>
            </ul>
          </nav>
          <div className="box">
        <input type="text" placeholder="Search.." />
        <a className="das cta" href="#">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#1b2840'}}/>
        </a>
      </div>  
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


      <footer>
      <div className="footer">
        <div className="footer_container">
          <div className="footer_row">
            <div className="footer_col">
              <h4>BOOKS</h4>
              <ul>
                <li>
                  <a href="#">Browse the Catalog</a>
                </li>
                <li>
                  <a href="#">Indian Poet Project</a>
                </li>
                <li>
                  <a href="#">Series</a>
                </li>
                <li>
                  <a href="#">Books</a>
                </li>
                <li>
                  <a href="#">affilate program</a>
                </li>
              </ul>
            </div>
            <div className="footer_col">
              <h4>WRITERS</h4>
              <ul>
                <li>
                  <a href="#">Browse the Roster</a>
                </li>
                <li>
                  <a href="#">Writer of the Week</a>
                </li>
              </ul>
            </div>
            <div className="footer_col">
              <h4>NEWS &amp; VIEWS</h4>
              <ul>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Influencers</a>
                </li>
                <li>
                  <a href="#">Story of the Week</a>
                </li>
                <li>
                  <a href="#">Video</a>
                </li>
                <li>
                  <a href="#">In the Community</a>
                </li>
              </ul>
            </div>
            <div className="footer_col">
              <h4>Follow us</h4>
              <div className="social-link">
                <a href="#">
                <BsFacebook />
                </a>
                <a href="#">
                <BsInstagram/>
                </a>
                <a href="#">
                <BsTwitter/>
                </a>
                <a href="#">
                  <BsLinkedin/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}


