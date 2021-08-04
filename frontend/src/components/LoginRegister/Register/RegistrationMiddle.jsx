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
        name: "",
        email: "",
        password: "",
        userRole: "User"
    });

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

   /* const [redirect, setRedirect] = useState(false)

    const handleClick = async(e) =>{
        e.preventDefault();

        await fetch('http://localhost:8060/auth/login',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                users
            })
        })

        setRedirect(true)
    }

    if(redirect){
        return <Redirect to = "/" />
    }
*/

    function handleClick(event) {
        axios.post('http://localhost:8060/auth/register',users).then(res=>{
            console.log(res);
        });
        setUsers({
            name: "",
            email: "",
            password: "",
            userRole: "User"
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
                            <Typography style={{ color: "#93CF41", fontSize: "25px", marginBottom: "8%", fontWeight: "600" }} align="center">Welcome to the shop!</Typography>
                            <FormControl className={classes.margin}>
                                <div style={{ width: "35vh" }}>
                                    <Grid container spacing={1} alignItems="flex-end">
                                    <TextField id="input-with-icon-grid"
                                            variant="outlined"
                                            placeholder="Full Name"
                                            style={{ marginBottom: "5%" }}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <PersonIcon />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            name="name"
                                            value={users.name}
                                            onChange={handleChange}
                                            fullWidth />

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
                                            style={{ marginBottom: "5%"}}
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
                                    <Button 
                                        variant="contained" 
                                        size="large" 
                                        color="primary" 
                                        style={{ margin: "10% 0 10%", fontSize: "18px", width: "150px", color: "#fff", textTransform: "capitalize", fontWeight: "700" }}
                                        onClick={handleClick}>
                                        Sign Up
                                    </Button>
                                    <Typography style={{ color: "#fff", margin: "5% 0" }} align="center">Do you already have an account? <span style={{ color: "#93CF41", fontWeight: "700" }}>Sign In</span></Typography>
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