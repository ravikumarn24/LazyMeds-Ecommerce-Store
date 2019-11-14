import React, { Component } from 'react'
import MenuBar from "./MenuBar"

export default class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <MenuBar/>
                <section class="mb-4 contact-us">
                    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>
                    <div class="text-center">
                        <ul class="list-unstyled mb-0">
                            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                <p>Address</p>
                            </li>

                            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                <p><a href="tel:+918248179620">8248179620</a></p>
                            </li>

                            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                <p><a href="mailto:lazymeds@gmail.com">lazymeds@gmail.com</a></p>
                            </li>

                            <li><i class="fab fa-whatsapp mt-4 fa-3x"></i>
                                <p><a href="http://wa.me/918248179620">Whatsapp click to chat!! </a></p>
                            </li>
                        </ul>
                    </div>

                </section>
            </React.Fragment>
        )
    }
}
