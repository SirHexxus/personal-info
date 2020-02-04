import React from 'react';
import { Link } from 'react-router-dom';

export default function Navlinks() {
    return (
        <div className="linkList">
            <div className="flexItem">
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                {/* <Link to="/admin">Admin</Link> */}
            </div>
            <div className="flexItem">
                {/* <Link to="/project">Project</Link> */}
                <Link to="/services">Services</Link>
                <Link to="/about">About Me</Link>
            </div>
            {/* <Link to="/nonsense" className='flexItem'>404</Link> */}
        </div>
    )
}
