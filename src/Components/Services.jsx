import React, {useEffect,useState} from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import axios  from 'axios';


const Services = () => {
    const [cart, setCart] = useState([]);
   
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);   
            });
    }, []);
    

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        console.log(product);
        // const newpd = {
        //     name: {product?.name},
        //     type: {product?.type},
        //     price: {produt?.price},
        //     img: {product?.img},
        //     id: {product?.id}
        // }
        delete product._id;
        axios.post('http://localhost:5000/orders',product)
        .then( res => {
            console.log(res);
        })
    }
    // console.log(cart);
    
    
    return (
        <div calssname="service">
            <header>
                <h1 className="text-center mb-5">services</h1>
            </header>
            <div className="d-flex">
            <div className="container my-container w-75">
                <div>
                    <Link to="/addService">
                      <button className="btn-lg mb-3">Add more service</button>  
                    </Link>
                </div>
              <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
                  {
                      products.map(product => 
                        <div className="col-lg-4 g-4">
                            <div class="card my-card h-100">
                              <img src={product.img} class="card-img-top" alt="..." />
                              <div class="card-body">
                                 <h5 class="card-title">{product.name}</h5>
                                 <p class="card-text">{product.price}$</p>
                                 <Button className=" rounded-pill p-3 px-4" variant="outline-danger " onClick={() => handleAddToCart(product)}>Order Now</Button>
                              </div>
                              </div>
                        </div>
                        )
                  }
              </div>
            </div>
            <div className="w-25 ms-2 mt-5">
               <Cart cart={cart}
               setCart={setCart}
               
               >

               </Cart>
            </div>
            </div>
        </div>
    )
}

export default Services
