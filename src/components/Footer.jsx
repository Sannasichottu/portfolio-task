import React from "react";
import '../css/footer.css';


const Footer = () => {
    return (
        <>
            <div class="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer-col-1">
                            <div className="logo">
                                <p><span>Web</span>UiExpert</p>
                            </div>
                            <p>The full-stack design team who focuses
                                on digital products whatever they are.</p>
                            <div class="app-logo">
                                <img src="#"  alt="facebook"/>
                                <img src="#" alt="twitter" />
                                <img src="#" alt="google" />
                                <img src="#" alt="utube" />
                            </div>
                        </div>
                        
                        <div class="footer-col-2">
                            <h3>About Us</h3>
                            <ul>
                                <li>We'reHiring</li>
                                <li>ourCustomer</li>
                                <li>BlogPost</li>
                                <li>Help&Support</li>
                            </ul>
                        </div>
                        <div class="footer-col-3">
                            <h3>Community</h3>
                            <ul>
                                <li>About us</li>
                                <li>Our Client</li>
                                <li>Legal notic</li>
                            </ul>
                        </div>
                        <div class="footer-col-4">
                            <h3>Contact</h3>
                            <ul>
                                <li>☎️ +123 456 789</li>
                                <li> Contact us</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <p class="copyright">© 2019 all rights reserved </p>
                </div>
            </div>
        </>
    )
}

export default Footer;