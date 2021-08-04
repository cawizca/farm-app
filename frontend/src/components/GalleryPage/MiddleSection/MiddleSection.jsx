import { Button } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';


function MiddleSection() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8090/products/").then(res => {
            setProduct(res.data)
        });
        //axios.post("http://localhost:8090/cart/")
    });

    return (
        <div className="container-fluid">
            <div style={{ textAlign: "right", marginTop: "2.5%", marginRight: "10%" }}>
                <Button size="large" style={{ backgroundColor: "#93CF41", color: "white" }} href="/product">Add Products</Button>
            </div>
            <div className="row justify-content-center" style={{ padding: "0 10%" }}>
                {product.map((workshopList, id) => {
                        console.log();
                    return (
                        <Card
                            key={workshopList.id}
                            id={workshopList.id}
                            name={workshopList.productName}
                            weight={workshopList.weight + "g"}
                            description={workshopList.productDescription}
                            price={workshopList.productPriceRs}
                            cents="00"
                            image={workshopList.image}
                            
                        />
                    )
                })}
            </div>


        </div>
    )
}

export default MiddleSection;