import React from 'react';
import logo from "../../../images/logo.png";
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useState } from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom"

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

function LoginMiddle() {

    const classes = useStyles();

    const [users, setUsers] = useState({
        email: "",
        password: ""
    });
    const history = useHistory()

    function handleChange(event) {
        const { name, value } = event.target;
        console.log(name);
        setUsers(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function handleClick(event) {
        axios.post('http://localhost:8060/auth/login',users).then(res=>{
            console.log(res.data.message);
            const message = res.data.message;
            (message==="Invalid Email"|| message==="Password not valid")?
            alert(message):
            history.push("/");
            localStorage.setItem('token',res.data.token);
            console.log(res);
        });
        setUsers({
            email: "",
            password: ""
        });

        event.preventDefault();
    }
    
    return (
        <MuiThemeProvider theme={theme}>
            <div className="formSection">
                <div className="row align-items-center justify-content-center">
                    <div className="form-background">
                        <img src={logo} alt="farm-logo" style={{ margin: "8% 0 2%", height: "100px", width: "auto" }} />
                        <div>
                            <Typography style={{ color: "#93CF41", fontSize: "25px", marginBottom: "10%", fontWeight: "600" }} align="center">Welcome back!</Typography>
                            <FormControl className={classes.margin}>
                                <div style={{ width: "35vh" }}>
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <TextField id="input-with-icon-grid"
                                            variant="outlined"
                                            placeholder="Email"
                                            style={{ marginBottom: "5%" }}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <PersonIcon />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            name="email"
                                            value={users.email}
                                            onChange={handleChange}
                                            fullWidth />

                                        <TextField id="input-with-icon-grid"
                                            variant="outlined"
                                            type="password"
                                            placeholder="Password"
                                            style={{ marginBottom: "5%", marginTop: "5%" }}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <LockIcon />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            name="password"
                                            value={users.password}
                                            onChange={handleChange}
                                            fullWidth />
                                    </Grid>
                                    <Typography style={{ color: "#93CF41", margin: "5% 0", cursor: "pointer" }} align="right">Forgot Password?</Typography>
                                    <Button 
                                        variant="contained" 
                                        size="large" 
                                        color="primary" 
                                        style={{ margin: "5% 0 15%", fontSize: "18px", width: "150px", color: "#fff", textTransform: "capitalize", fontWeight: "700" }}
                                        onClick={handleClick}>
                                        Login
                                    </Button>
                                    <Typography style={{ color: "#fff", margin: "5% 0" }} align="center">Don't you have an account? <span style={{ color: "#93CF41", fontWeight: "700" }}>Sign Up</span></Typography>
                                </div>
                            </FormControl>
                        </div>
                    </div>
                </div>

            </div>
        </MuiThemeProvider>
    )
}

export default LoginMiddle;