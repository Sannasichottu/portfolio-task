import React from "react";
import Navbar from "./Navbar";
import '../css/hero.css'
import Service from "./Service";
import Portfolio from "./Portfolio";
import About from "./About";
import Workflow from "./Workflow";
import Blog from "./Blog";
import Footer from "./Footer";
import Success1 from "./Success1";
import Contact from "./Contact";
//import Sucess from "./Sucess";

const Hero = () => {
    return(
        <>
            <section className="hero">
            <Navbar />  
                <div className="container h-wrapper">
                    <div className="row">
                        {/* Left Side */}
                        <div className="col-md-6 h-left">
                            <h2>Provide You best<br />Best Ui Service</h2>
                            <span>Mobile App Design and Development Studio. You can hire us</span>
                            <div className="buttons">
                                <button className="btn button" style={{background:"#0000CD" ,color:"white"}}>🤝 Wave Me</button>
                            </div>
                        </div>
                        {/* Right Side */}
                        <div className="col-md-6 h-right">
                                <img src="https://i.im.ge/2022/07/07/ubfcb1.png" alt="Home"/>                   
                            </div>
                    </div>
                </div>
                
            </section>
            <Service />
            <Portfolio />
            <Success1 />
            <About />
            <Workflow />
            <Blog />
            <Footer />
            <Contact />
        </>
    )
}

export default Hero;