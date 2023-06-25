import React from "react";
import './css/navstyles.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function SearchArea(props) {
    
        return (
           <>
           {/* className="box" */}
            <div >
            <form >
                  <input type="text" placeholder="Search.." 
                        onSubmit={props.searchBook} onChange={props.handleSearch} />
                    {/* <FontAwesomeIcon className="das cta"
                          icon={faMagnifyingGlass} style={{ color: '#1b2840'}}/> */}
                    <button type="submit">Search</button>      
            </form>
            </div>
           </>
        );
    
    
}
