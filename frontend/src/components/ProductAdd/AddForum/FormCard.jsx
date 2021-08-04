import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FileBase from 'react-file-base64';
import axios from 'axios';

import logoImage from '../../../images/logo.svg'
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#93CF41'
        },
    }
});

function FormCard() {
    const classes = useStyles();

    const [products, setProducts] = useState({
        productName: "",
        productDescription: "",
        weight: "",
        image: "",
        productPriceRs: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setProducts(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        })
    }

    function handleClick(event) {
        axios.post('http://localhost:8090/products/', products).then(res => {
            alert("Success");
        })
        setProducts({
            productName: "",
            productDescription: "",
            weight: "",
            image: "",
            productPriceRs: ""
        });

        event.preventDefault();
    }
    return (
        <MuiThemeProvider theme={theme}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="formBox">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 box-background">
                                <div className="main-text">
                                    Collect <span><br />products to gallery.</span>
                                </div>
                                <div className="secondary-text">
                                    Here you can add your new best product to gallery. It will help your customers to find their favourite items at one place.
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="above-form-text">
                                    Simply fill following form and click add button to add new products.
                                </div>
                                <FormControl className={classes.margin}>
                                    <div style={{ width: "35vh", position: "relative", top: "15vh" }}>
                                        <Grid container spacing={1} alignItems="flex-end">
                                            <TextField id="input-with-icon-grid"
                                                variant="outlined"
                                                placeholder="Title"
                                                style={{ marginBottom: "5%" }}
                                                name="productName"
                                                size="small"
                                                value={products.productName}
                                                onChange={handleChange}
                                                fullWidth />


                                            <TextField id="input-with-icon-grid"
                                                variant="outlined"
                                                placeholder="Price"
                                                type="text"
                                                style={{ marginBottom: "5%" }}
                                                name="productPriceRs"
                                                size="small"
                                                value={products.productPriceRs}
                                                onChange={handleChange}
                                                inputProps={{
                                                    size: 12
                                                }}

                                            />
                                            <div style={{ margin: "0 4%" }}></div>
                                            <TextField id="input-with-icon-grid"
                                                variant="outlined"
                                                type="text"
                                                placeholder="Weight"
                                                style={{ marginBottom: "5%" }}
                                                name="weight"
                                                size="small"
                                                value={products.weight}
                                                onChange={handleChange}
                                                inputProps={{
                                                    size: 12,
                                                }}
                                            />


                                            <FileBase
                                                type="file"
                                                multiple={false}
                                                name="image"
                                                onDone={({ base64 }) => setProducts({ ...products, image: base64 })}
                                                value={products.image}
                                                onChange={handleChange}
                                            />

                                            <TextField id="input-with-icon-grid"
                                                variant="outlined"
                                                placeholder="Description"
                                                style={{ margin: "5% 0" }}
                                                name="productDescription"
                                                size="small"
                                                onChange={handleChange}
                                                multiline
                                                value={products.productDescription}
                                                rows={4}
                                                fullWidth />
                                        </Grid>
                                        <Button
                                            variant="contained"
                                            size="medium"
                                            color="primary"
                                            onClick={handleClick}
                                            style={{ margin: "5% 0 10%", fontSize: "18px", width: "150px", color: "#fff", textTransform: "capitalize", fontWeight: "700" }}
                                            endIcon={<AddCircleOutlineIcon fontSize="large" />}
                                        >
                                            Add
                                        </Button>

                                    </div>
                                </FormControl>
                                <div>
                                    <img src={logoImage} className="logo-image-form" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MuiThemeProvider>

    )
}

export default FormCard;