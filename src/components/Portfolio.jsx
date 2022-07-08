import React from "react";
import '../css/portfolio.css'


const Portfolio = () => {
    return (
        
            <div className="contain box-wrapper">

                <div className="box-wrapper row">

                    {/* Left side */}
                    <div className="col-md-4 b-left">
                        <div>
                            <h4>Our Portfolio</h4>
                            <p className="subtitle">View our portfolio in catagoris</p>
                        </div>
                        <div>
                            <ul>
                                <li style={{ color: "blue" }}>All Works</li>
                                <li>Minimal Design</li>
                                <li>Colorful Design</li>
                                <li>Landing Page Design</li>
                                <li>Mobile Apps Design</li>
                            </ul>
                        </div>


                    </div>

                    {/* Right side */}
                    <div className="col-md-8 p-right">

                        <div className="box1">
                            <div className="card01">
                            </div>

                            <div className="card02">
                            </div>
                        </div>

                        <div className="box2">
                            <div className="card03">
                            </div>

                            <div className="card04">
                            </div>
                            
                        </div>

                        <div className="box3">
                            <div className="card05">
                            </div>

                            <div className="card06">
                            </div>
                        </div>

                    </div>

                </div>
            </div>
    );
};

export default Portfolio;