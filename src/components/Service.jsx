import React from "react";
import '../css/service.css';
import * as ai from 'react-icons/ai';

const Service = () => {
    return (
        <>
            <div className="services">
                <div className="title">
                    <h4>OUR SERVICES</h4><br />
                    <h2>We Provide Best Quality Service</h2>
                    <p>Our commitment to quality ensures that your applications get the best UI design<br />
                        possible.UI/UX design is more than just pixels and animations, but the entire application<br />
                        experience
                    </p>
                </div>

                <div className="box">
                    <div className="card1">
                        <img src="https://i.im.ge/2022/07/07/uctogc.png" alt="WebsiteUI" />
                        <h5>Website UI</h5>
                        <div className="pra">
                            <p>Fast, Powerful & Most Secure Network<br /> Solutions for smart Home & Business</p>

                            <div>
                                <button className="button" herf="#">Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="card2">
                        <img src="https://i.im.ge/2022/07/07/ugoEFL.png" alt="WebsiteUI" />
                        <h5>ReDesign</h5>
                        <div className="pra">
                            <p>Fast, Powerful & Most Secure Network<br /> Solutions for smart Home & Business</p>

                            <div>
                                <button className="button" herf="#">Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="card3">
                        <img src="https://i.im.ge/2022/07/07/uguwZc.png" alt="WebsiteUI" />
                        <h5>Application UI</h5>
                        <div className="pra">
                            <p>Fast, Powerful & Most Secure Network<br /> Solutions for smart Home & Business</p>

                            <div>
                                <button className="button" herf="#">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="card4">
                        <img src="https://i.im.ge/2022/07/07/ugOmTL.png" alt="WebsiteUI" />
                        <h5>Mobile App Ui</h5>
                        <div className="pra">
                            <p>Fast, Powerful & Most Secure Network<br /> Solutions for smart Home & Business</p>

                            <div>
                                <button className="button" herf="#">Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="card5">
                        <img src="https://i.im.ge/2022/07/07/ugOeHr.png" alt="WebsiteUI" />
                        <h5>Web App ui</h5>
                        <div className="pra">
                            <p>Fast, Powerful & Most Secure Network<br /> Solutions for smart Home & Business</p>

                            <div>
                                <button className="button" herf="#">Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="card6">
                        <img src="https://i.im.ge/2022/07/07/ug1Tm0.png" alt="WebsiteUI" />
                        <h5>Web Elements</h5>
                        <div className="pra">
                            <p>Fast, Powerful & Most Secure Network<br /> Solutions for smart Home & Business</p>

                            <div>
                                <button className="button" herf="#">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <>

            <div className="container h-wrapper1">
                    <div className="row1">
                        {/* Left Side */}
                        <div className="col-md-6 h-left1">
                                <img src="https://i.im.ge/2022/07/07/u8hxt4.png" alt="Home"/>                   
                        </div>
                        {/* Right Side */}
                        <div className="col-md-6 h-right1">
                            <h2>Know About UiExpert</h2>
                            <span>I always follow professional Workflow and provide you best<br/>service with reseable costs.</span>
                            
                            <div className="v-player">
                                <div className="player">
                                    <ai.AiOutlinePlayCircle />
                                </div>
                                <span> --- See My Video Brif</span>
                            </div>
                        </div>
                    </div>
                </div>
                </>
        </>
    )
}

export default Service;