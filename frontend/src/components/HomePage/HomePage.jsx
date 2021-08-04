import React, {useState} from 'react';
import Appbar from "./Appbar/AppBar";
import Hero from "./Hero/Hero";
import axios from 'axios';
import { useEffect } from 'react';


function HomePage(){

  const [userRole, setUserRole] = useState('');
  const [userName, setUserName] = useState('');

    useEffect(()=>{
        const getusertype = async () => {
            const access_token = localStorage.getItem('token')
            
            let config = {
              headers: {
                'Authorization': 'Bearer ' + access_token
              }
            }
            axios.get('http://localhost:8060/auth/post',config).then((response) => {

                if (response.data.message) {
                  alert(response.data.message)
                } else {
                  setUserRole(response.data.user.userRole);
                  setUserName(response.data.user.name);
                }
              })
              .catch()
        };
        getusertype();

        
    })

    return(
        <div>
            <Appbar getUserRole={userRole} getUserName={userName}/>
            <Hero/>
        </div>
    )
}

export default HomePage;