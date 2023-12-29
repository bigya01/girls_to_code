import React from 'react';
import './Sidenav.css'

const Sidenav = (props) => {
    return (
        <div class='sidenav'>
            <h2>{props.title}</h2>
        </div>
    )
}
export default Sidenav;

