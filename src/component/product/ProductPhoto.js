import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import classes from './ProductPhoto.module.css'

export default function ProductPhoto(props) {
    const state = {
        sliderConfig: {
            showArrows: false,
            showStatus: true,
            showIndicators: false,
            infiniteLoop: false,
            showThumbs: true,
            useKeyboardArrows: false,
            autoPlay: false,
            stopOnHover: true,
            swipeable: true,
            dynamicHeight: true,
            emulateTouch: true,
            thumbWidth: 60,
            selectedItem: 0,
            interval: 1000,
            transitionTime: 1000,
            swipeScrollTolerance: 5,
        }
    }
    const sliderRender = () => {
        return props.image.map((image, index) => {
            return (
                <img src={image}
                     alt=""
                     key={index}
                     data-image={image}
                />
            )
        })
    }
    return (
        <Carousel {...state.sliderConfig} className={classes.Carousel} style={{maxHeight: 300}}>
            {props.image !== undefined
                ? sliderRender()
                : null
            }
        </Carousel>
    )
}