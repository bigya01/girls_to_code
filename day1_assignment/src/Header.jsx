import React from 'react';
import './Header.css'

const Header =(props) =>{
    return(
        <div class='head'>
        <h2>{props.title}</h2>
    </div>
    )
   
}
export default Header;