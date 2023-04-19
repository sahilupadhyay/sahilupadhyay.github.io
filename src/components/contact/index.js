import './contact.style.scss';
import Map from '../../images/icons/map.png'
import Email from "../../images/icons/email.png";
import React from "../../images/icons/react.svg";
function Contact() {
    return (
        <>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="contact__content">
                        <div className="contact__title">
                            <p>contact</p>
                            <h3>Don't be shy! Hit me up! 👇</h3>
                        </div>
                        <div className="contact__icons">
                            <div className="contact__icon-box">
                <span>
                  <img src={Map} title="location" alt="location" width="50px" height="50px" />
                </span>
                                <div className="contact__info">
                                    <h3>Location</h3>
                                    <p>Pune, India</p>
                                </div>
                            </div>

                            <div className="contact__icon-box">
                <span>
<img src={Email} title="sahilupadhyay0001@gmail.com" alt="sahilupadhyay0001@gmail.com" width="50px" height="50px"/>
                </span>
                                <div className="contact__info">
                                    <h3>Mail</h3>
                                    <a href="mailto:sahilupadhyay0001@gmail.com">
                                        sahilupadhyay0001@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
