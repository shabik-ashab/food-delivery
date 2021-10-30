import React, {useEffect,useState} from 'react';
import axios  from 'axios';

const Cart = (props) => {
    const [order, setOrder] = useState([]);

    const { cart,setCart } = props;
    const pdList = props.cart;
    // console.log(pdList);

    useEffect(() => {
        fetch(`http://localhost:5000/order`)
            .then(res => res.json())
            .then(data => {
                setOrder(data);   
            });
    }, []);
    // console.log(order)

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
        <div className="text-light">
             <h3>Order Summary</h3>
            <h5>Items Ordered: {totalQuantity}</h5>

            <br />
            <p>Total: {total.toFixed(2)}</p>
            <div>
                {
                    order.map(product => 
                        <div className="added-pd mt-2 d-flex">
                        <img src={product.img} className=" p-1 me-3" alt="..."/>
                         <p>name:{product.name}</p>
        </div>
                        )
                }
            </div>
            
        </div>
    )
}

export default Cart
