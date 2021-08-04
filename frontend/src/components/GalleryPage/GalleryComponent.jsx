import React, {useState, useEffect} from 'react';
import AppBar from '../HomePage/Appbar/AppBar';
import MiddleSection from './MiddleSection/MiddleSection';
import axios from 'axios';

function GalleryComponent(){

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
                    console.log(response.data.user.name);
                  setUserRole(response.data.user.userRole);
                  setUserName(response.data.user.name)
                }
              })
              .catch()
        };
        getusertype();

        
    })

    return(
        <div>
            <AppBar getUserRole={userRole} getUserName={userName}/>
            <MiddleSection />
        </div>
    )
}

export default GalleryComponent;