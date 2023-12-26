import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { LiaBookSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import Writersinfo from './Writersinfo';
import { responsive, writers } from './JS/data';

export default function Writer() {
    

      const product = writers.map(item => (
        <Writersinfo 
           name = {item.name}
           url = {item.imageurl}
           description = {item.description}
        />
      ))
  return (
    
    <div>
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
       
        <Carousel responsive={responsive} >
        {product}
        </Carousel>
    </div>
        
    
  );
}
