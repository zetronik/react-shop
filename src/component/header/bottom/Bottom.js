import React from 'react'
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap'
import {nav} from '../../../config/configShop'
import {NavLink} from 'react-router-dom'
import classes from './Bottom.module.css'

class Bottom extends React.Component {
    renderLink = () => {
        return nav.header.map((link, index) => {
            return (
                <NavLink
                    className={classes.link}
                    to={link.to}
                    key={index}
                >
                    {link.value}
                </NavLink>
            )
        })
    }
    render() {
        return (
            <div className={classes.Bottom}>
                <Container>
                    <Row>
                        <Col>
                            <Navbar expand="md">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto" as={'ul'}>
                                        {this.renderLink()}
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Bottom