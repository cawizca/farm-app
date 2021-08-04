import React, { useState, useEffect } from 'react';
import { UilShoppingCartAlt } from '@iconscout/react-unicons';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import ProductList from '../../Cart/ProductList';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}));

function AppBarCart() {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [products, setProducts] = useState([]);
    const [itemCount, setItemCount] = useState();

    useEffect(() => {
        axios.get('http://localhost:8090/cart/').then((res) => {
            setProducts(res.data);
            setItemCount(res.data.length);
        });
    })


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <div>
            <Badge badgeContent={itemCount} color="secondary" aria-describedby={id} variant="contained" onClick={handleClick}>
                <UilShoppingCartAlt />
            </Badge>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                PaperProps={{
                    style: { width: '20%' },
                }}
            >
                    {products.map((product) => {
                        return (
                            <ProductList
                                name={product.productName}
                                weight={product.weight}
                                price={product.productPriceRs}
                            />
                        )
                    })}
                
                <Button component={Link} to="/cart" className={classes.typography} style={{ backgroundColor: "#93CF41", color: "#fff", fontWeight: "700"}} fullWidth variant="contained">View cart.</Button>

            </Popover>
        </div>
    )
}

export default AppBarCart;