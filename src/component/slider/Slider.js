import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import LazyLoad from 'react-lazyload'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './Slider.css'
import {Col, Container, Row, Image, Button} from "react-bootstrap";

export default function Slider() {
    const slider = [
        {image: 'images/home/girl1.jpg'},
        {image: 'images/home/girl2.jpg'},
        {image: 'images/home/girl3.jpg'},
    ]
    const getConfigurableProps = () => ({
        showArrows: true,
        showStatus: false,
        showIndicators: true,
        infiniteLoop: true,
        showThumbs: false,
        useKeyboardArrows: true,
        autoPlay: true,
        stopOnHover: true,
        swipeable: true,
        dynamicHeight: true,
        emulateTouch: true,
        selectedItem: 0,
        interval: 3000,
        transitionTime: 1000,
        swipeScrollTolerance: 5,
    });
    const slideRender = () => {
        return slider.map((item, index) => {
            return (
                <Container key={index}>
                    <Row>
                        <Col sm={6} className="slider-content">
                            <h1><span>E</span>-SHOPPER</h1>
                            <h2>Free E-Commerce Template</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. </p>
                            <Button type="button" className="btn btn-default get">Get it now</Button>
                        </Col>
                        <Col sm={6}>
                            <LazyLoad height={100}>
                                <Image src={item.image} fluid={true} alt=""/>
                            </LazyLoad>
                        </Col>
                    </Row>
                </Container>
            )
        })
    }
    return (
        <section id="slider">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">

                        <Carousel
                            {...getConfigurableProps()}
                        >
                            {slideRender()}
                        </Carousel>

                    </div>
                </div>
            </div>
        </section>
    )
}