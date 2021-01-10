import React, { useState, useEffect, useCallback } from "react";
import { useEmblaCarousel } from "embla-carousel/react";
import { Thumb } from "./EmblaCarouselThumb";
import "./embla.css";

const EmblaCarousel = ({ slides }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [mainViewportRef, embla] = useEmblaCarousel();
    const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
        containScroll: "keepSnaps",
        selectedClass: ""
    })

    const onThumbClick = useCallback(
        (index) => {
            if (!embla || !emblaThumbs) return;
            if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
        },
        [embla, emblaThumbs]
    );

    const onSelect = useCallback(() => {
        if (!embla || !emblaThumbs) return;
        setSelectedIndex(embla.selectedScrollSnap());
        emblaThumbs.scrollTo(embla.selectedScrollSnap());
    }, [embla, emblaThumbs, setSelectedIndex]);

    useEffect(() => {
        if (!embla) return;
        onSelect();
        embla.on("select", onSelect);
    }, [embla, onSelect]);

    return (
        <>
            <div className="embla">
                <div className="embla__viewport" ref={mainViewportRef}>
                    <div className="embla__container">
                        {slides.map((src, index) => (
                            <div className="embla__slide" key={index}>
                                <div className="embla__slide__inner">
                                    <img
                                        className="embla__slide__img"
                                        src={src}
                                        alt={src}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="embla embla--thumb">
                <div className="embla__viewport" ref={thumbViewportRef}>
                    <div className="embla__container embla__container--thumb">
                        {slides.map((src, index) => (
                            <Thumb
                                onClick={() => onThumbClick(index)}
                                selected={index === selectedIndex}
                                imgSrc={src}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmblaCarousel;