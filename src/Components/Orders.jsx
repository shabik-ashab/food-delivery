import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/order`)
            .then(res => res.json())
            .then(data => {
                setOrder(data);   
            });
    }, []);

    // delete order 
    const handledelete = id => {
       const url = `http://localhost:5000/order/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('deleted sucessfully');
                    const remaining = order.filter(pd => pd._id !== id);
                    setOrder(remaining);
                }
            })
    }

    const deleteAll = () => {
        const url = `http://localhost:5000/orders`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Order Placed sucessfully');
                    const remaining = [];
                    setOrder(remaining);
                }
            })
    }

    let totalQuantity = 0;
    let total = 0;
    for (const product of order) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
        
       
    }
    return (
        <div>
            <header className="text-center text-light">
                <h1>My Order</h1>
            </header>
            <div className="text-light ms-5">
                <h2>Order Details</h2>
                <h5>Items Ordered: {totalQuantity}</h5>
                 <br />
                 <p>Total: {total.toFixed(2)}</p>
                 <Link to="/checkOut">
                 <button onClick={deleteAll} className="btn btn-light mb-3">Place Order</button>
                 </Link>
            </div>
            <div className=" d-flex flex-wrap">
                {
                    order.map(product => 
                        <div className="added-mypd text-light ms-5 mt-2 d-flex mb-3">
                        <img src={product.img} className=" p-2 me-3" alt="..."/>
                         <div>
                         <p>name:{product.name}</p>
                         <p>Price: {product.price} $
                         <button onClick={() => handledelete(product._id)} className="btn btn-warning ms-3">Delete</button>
                         </p>
                         
                         </div>
                         
                        </div>
                        )
                }
            </div>
        </div>
    )
}

export default Orders
