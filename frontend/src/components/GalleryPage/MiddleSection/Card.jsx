import React, { useState, useEffect } from 'react';
import { UilShoppingCart } from '@iconscout/react-unicons';
import axios from 'axios';

function Card(props) {

    const id = props.id;
    const name = props.name;
    const weight = props.weight;
    const description = props.description;
    const price = props.price;
    const cents = props.cents;
    const image = props.image;

    const [cart, setCart] = useState({
        productName: "",
        productDescription: "",
        weight: "",
        image: "",
        productPriceRs: ""
    });

    useEffect(()=>{
        axios.get(`http://localhost:8090/products/${id}`).then((res) => {
            setCart(res.data);
            
        });
    })

    function addToCart() {
       axios.post('http://localhost:8090/cart/',cart).then(()=>{
            alert('Success');
        })
    }

    return (
        <div className="card">
            <img src="https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <div className="card-details">
                <h3 name="name">{name}</h3>
                <hr />
                <p name="weight" className="weight">{weight}</p>
                <p name="description" className="description">{description}</p>
            </div>
            <div className="price">
                Rs. {price}.<span className="cents">{cents}</span>
            </div>
            <div className="card-button align-items-center">
                <UilShoppingCart onClick={addToCart} color="#fff" size="45px" />
            </div>
        </div>
    );
}

export default Card;