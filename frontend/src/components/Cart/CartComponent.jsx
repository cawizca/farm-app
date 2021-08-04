import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppBar from '../HomePage/Appbar/AppBar';
import ProductList from '../Cart/ProductList';

function Cart() {

    const [products, setProducts] = useState([]);

    const [userRole, setUserRole] = useState('');
    const [userName, setUserName] = useState('');


    useEffect(() => {
        axios.get('http://localhost:8090/cart/').then((res) => {
            setProducts(res.data);
        })

        const getusertype = async () => {
            const access_token = localStorage.getItem('token')

            let config = {
                headers: {
                    'Authorization': 'Bearer ' + access_token
                }
            }
            axios.get('http://localhost:8060/auth/post', config).then((response) => {

                if (response.data.message) {
                    alert(response.data.message)
                } else {
                    console.log(response.data.user.name);
                    setUserRole(response.data.user.userRole);
                    setUserName(response.data.user.name)
                }
            })
                .catch()
        };
        getusertype();
    })
    return (
        <div>
            <AppBar getUserRole={userRole} getUserName={userName} />

            <div className="row">
                <div className="col-lg-6 d-flex justify-content-center">
                    <div className="product-cart">
                        {products.map((product) => {
                            return (
                                <ProductList
                                    name={product.productName}
                                    weight={product.weight}
                                    price={product.productPriceRs}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart;