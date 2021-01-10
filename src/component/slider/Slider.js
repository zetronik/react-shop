import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import LazyLoad from 'react-lazyload'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './Slider.css'
import {Col, Container, Row, Image} from "react-bootstrap";

export default function Slider(props) {
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
        return props.slider.map((item, index) => {
            return (
                <Container key={index}>
                    <Row>
                        <Col sm={6} className="slider-content">
                            <h1>{item.title}</h1>
                            <h2>{item.shortDescription}</h2>
                            <p>{item.description}</p>
                        </Col>
                        <Col sm={6}>
                            <LazyLoad height={100}>
                                <Image className="slider-image" src={item.image} fluid={true} alt=""/>
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