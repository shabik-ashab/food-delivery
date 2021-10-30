import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import img from "../image/logo.png";
import useAuth from '../hooks/useAuth';

const Navbar = () => {
    const {user,logOut} = useAuth()
    return (
        <div className="navbar ms-5 me-5  my-4 ">
            <div className="mt-3 rounded-pill bg-white w-100">
            <nav className="d-flex align-items-center">
            {
                 user.email?
                 <Button onClick={logOut} className="ms-5 me-5 rounded-pill p-3 px-5 " variant="outline-danger">Logout</Button>
                 :
                 <Link to="/login">
            <Button className="ms-5 rounded-pill p-3 px-4" variant="outline-danger">Login or Register</Button>
            </Link>
            }
            <div className="navbar-link">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/services">Service</NavLink>
            {/* <NavLink to="/blogs">blogs</NavLink>            */}
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
            </div>
            <img src={img} className="nav-img ms-5" />
            </nav>
            </div>
        </div>
    )
}

export default Navbar;
