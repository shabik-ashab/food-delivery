import React from 'react';
import img from '../image/floating_burger_01.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="d-flex">
            <div className="text-light w-50 banner-txt mt-5 ms-4">
                <h1 className="p-3">Crazy good burgers</h1>
                <p className="ms-4">We strive to elevate the burger exprience</p>
                <Link to="/services">
                <Button variant="light" className="ms-4 mt-4 p-3 px-5" >Shop Now</Button> 
                </Link>
            </div>
           <div className="w-50">
               <img src={img} alt="" className="img-fluid mt-3"/>
            </div>
        </div>
    )
}

export default Banner
