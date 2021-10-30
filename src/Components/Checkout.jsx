import React from 'react'
import useAuth from '../hooks/useAuth';

const Checkout = () => {
    const {user} = useAuth();
    console.log(user);
    return (
        <div>
            <header className="text-center text-light">
                <h1>Shipping Details</h1>
            </header>
            <div classname="shiping-form ">
            <div className="input-form mt-5 mx-auto text-light">
            <label className="label me-2" for="name">Name:</label>
            <input className="text-light" type="name" id="name" name="name" value={user?.displayName} />
            </div>
            <div className="input-form mt-4  mx-auto text-light">
            <label className="label me-2" for="email">Email:</label>
            <input className="text-light" type="email" id="email" value={user?.email} />
            </div>
            <div className="input-form mt-4  mx-auto text-light">
            <label className="label me-2" for="city">City:</label>
            <input className="text-light" type="city" id="city" />
            </div>
            <div className="input-form mt-4  mx-auto text-light">
            <label className="label me-2" for="zip">Zip Code:</label>
            <input className="text-light" type="number" id="zip" />
            </div>
            <div className="input-form mt-4  mx-auto text-light">
            <label className="label me-2" for="address">Address:</label>
            <input className="text-light" type="address" id="address" />
            <button className="btn btn-light ms-2 mb-3 mt-3">Confirm</button> 
            </div>
            
                
            </div>
        </div>
    )
}

export default Checkout
