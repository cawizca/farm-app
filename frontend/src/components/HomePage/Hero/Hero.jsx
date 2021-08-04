import React from 'react';
import Button from 'react-bootstrap/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from "../../../images/logo.png";

AOS.init();

function Hero(){
    return(
        <div className="heroSection">
            <div className="row align-items-center justify-content-center">
                <div className="textSection">
                    <img src={logo} alt="farm-logo" style={{marginBottom:"3%",height:"100px", width:"auto"}} data-aos="fade-up" data-aos-duration="1000" />
                    <h1 className="h1Style" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Fresh organic foods.</h1>
                    <p className="justify-content-center pStyle" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                        Kav Farm brings you fresh organic foods for healthy better life. We provide island wide 24/7 delivery service, It will help you to get our products in this quarantine time period. Contact us anytime for further information.
                    </p>
                    <Button className="contactButton" variant="outline" size="lg" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Contact Us</Button>
                </div>
            </div>          
        </div>
    );
}

export default Hero;