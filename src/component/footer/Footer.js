import React from 'react'
import {nav} from '../../config/configShop'
import {NavLink} from 'react-router-dom'
import {Col, Container, Row} from 'react-bootstrap'
import classes from './Footer.module.css'

export default function Footer() {

    const renderLink = () => {
        return nav.footer.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        className={classes.link}
                        to={link.to}
                    >
                        {link.value}
                    </NavLink>
                </li>
            )
        })
    }

    return (
        <section className={classes.Footer}>
            <Container>
                <Row>
                    <Col>
                        <div className={classes.footerNavbar}>
                            <ul className={classes.nav}>
                                {renderLink()}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className={classes.pull}>
                    <p>Copyright © 2020</p>
                    <p>Designed by <span><a target="_blank" href="/">My-site</a></span></p>
                </Row>
            </Container>
        </section>
    )
}