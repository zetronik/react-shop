import React, {useState} from 'react'
import classes from './LeftSidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowCircleUp, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import {Button, Collapse} from "react-bootstrap";
import {faInstagramSquare} from "@fortawesome/free-brands-svg-icons";

export default function LeftSidebar(props) {
    const categoryRender = () => {
        return props.category.map((c, i) => {
            const qt = props.shop.filter(q => +q.category === +c.id)
            return (
                <div
                    className={classes.panelHeading}
                    key={i} onClick={qt.length ? props.categoryHandler : null}
                    data-id={c.id}
                >
                    <h4 className={classes.panelTitle} data-id={c.id} >
                        {c.name}
                    </h4>
                    <span> ({qt.length})</span>
                </div>
            )
        })
    }
    return (
        <>
            <Collapse in={props.sidebar}>
                <div className="left-sidebar">
                    <h2 className="title text-center">Категории</h2>
                    <button
                        onClick={props.clearHandler}
                        type="button"
                        className={classes.clearButton}
                    >Очистить</button>
                    <div className={classes.categoryProducts}>
                        {categoryRender()}
                    </div>
                </div>
            </Collapse>
            {
                window.innerWidth < 576
                ?   <Button
                        className={classes.categoryButton}
                        onClick={props.clickSidebar}
                        aria-controls="example-collapse-text"
                        aria-expanded={props.sidebar}
                    >
                        {
                            props.sidebar
                                ? <FontAwesomeIcon icon={faArrowCircleUp} />
                                : <FontAwesomeIcon icon={faArrowCircleDown} />
                        }

                        {' '}<span>Категории</span>
                    </Button>
                : null
            }

        </>
    )
}