import React from 'react'
import LazyLoad from 'react-lazyload'
import {Container, Row, Col, Nav, Badge} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart, faUser} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom'
import classes from './Middle.module.css'

export default function Middle(props) {
    return (
        <div className={classes.Middle}>
            <Container>
                <Row>
                    <Col sm="4">
                        <Nav className="justify-content-center mt-2">
                            <Nav.Item>
                                <NavLink to="/">
                                    <LazyLoad>
                                        <img src="../images/logo/logo.jpg" alt=""/>
                                    </LazyLoad>
                                </NavLink>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm="8" className="d-flex align-items-center justify-content-end">
                        <div>
                            <Nav as="ul" className="justify-content-end">
                                <Nav.Item as="li">
                                    <NavLink
                                        to="/order"
                                        exact
                                    >
                                        <FontAwesomeIcon icon={faUser} />
                                        {' '}Мои заказы
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <NavLink
                                        to="/cart"
                                        exact
                                    >
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                        {' '}Корзина
                                    </NavLink>
                                    <Badge pill className={classes.badge}>
                                        {props.cart}
                                    </Badge>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}