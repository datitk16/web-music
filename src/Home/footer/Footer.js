import React, { Component } from 'react';
import ScrollUpButton from "react-scroll-up-button";
class Footer extends Component {
    render() {
        return (
            <div>
                <section class="footer">
               
                    <div class="container text-center">
                   
                    <div className="footer-line"></div>
                    <p>@ Design by DatNguyen </p>
                      
                        <ScrollUpButton />
                            
                      
                    </div>
                </section>
            </div>
        );
    }
}

export default Footer;