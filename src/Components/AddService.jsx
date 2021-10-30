import axios  from 'axios';
import React from 'react';

import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/product',data)
        .then( res => {
            if(res.data.insertedId){
                alert('added sucessfully');
                reset();
            }
        })
    };
    return (
        <div>
            <header>  
                <h1 className="text-center mb-5">Add service</h1>
            </header>
            <form className="my-form text-center" onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} placeholder="name" />
            <br />
            <input className="mt-3" {...register("type")}  placeholder="type" />
            <br />
            <input className="mt-3" type="number" {...register("price")}  placeholder="price" />
            <br />
            <input className="mt-3" {...register("img")}  placeholder="img" />
            <br />
            <input className="mt-3 mb-3" {...register("id")}  placeholder="id" />
            <br />
      
      <input type="submit" />
    </form>
        </div>
    )
}

export default AddService
