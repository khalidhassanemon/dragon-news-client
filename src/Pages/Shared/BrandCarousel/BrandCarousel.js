import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assets/brands/hd.jpg';
import Brand2 from '../../../assets/brands/hp-5.jpg';
const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand2}
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCarousel;