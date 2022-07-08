import React from "react";
import '../css/about.css'

const About = () => {
    return (
        <>
            <div className="about">
                <div className="title1">
                    <h3>What they say about us!</h3>
                    <p>Customer Review Sites for Collecting Business & Product Reviews</p>
                    <img src="https://i.im.ge/2022/07/08/ufYmcL.png" alt="getty" />
                </div>

                <div className="des1">
                    <p>Loved the design specially the color combination. Look forward to
                        work more in future.</p>
                    <h2>Cris Angela</h2>
                    <span>Head Of CsWeb</span>
                </div>
                
                <div className="line"></div>

                <div className="row03">
                    <div className="about-lef">
                        <span>Learn About My Workflow:</span>
                        <h3>I'm always hungry for creativity.<br />
                            Available for hire</h3>
                    </div>

                    <div className="about-right">
                    <div className="buttons1">
                                <button className="btn button" style={{background:"#0000CD" ,color:"white"}}>🤝 Wave Me</button>
                            </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default About;