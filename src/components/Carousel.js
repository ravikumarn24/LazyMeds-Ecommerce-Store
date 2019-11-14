import React, { Component } from 'react'

export default class Carousel extends Component {
    render() {
        return (
            <div class="carousel-position">
                <div class="carousel slide" id="carouselControl" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="d-block w-100 carousel-size" src="Website Header.jpg" alt="Slide 1"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselControl" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselControl" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>

            </div>
        )
    }
}
