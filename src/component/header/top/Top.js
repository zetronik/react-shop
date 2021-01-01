import React from 'react'
import {Col, Container, Nav, Row} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import classes from './Top.module.css'

export default function Top(props) {
    return (
        <div className={classes.Top}>
            <Container>
                <Row className="row">
                    <Col>
                        <Nav as="ul"className="justify-content-between">
                            <Nav.Item as="li">
                                <Nav.Link href={'tel:' + props.contact.phone}>
                                    <FontAwesomeIcon icon={faPhone} />
                                    {' ' + props.contact.phone}
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item  as="li">
                                <Nav.Link href={'mailto:' + props.contact.email}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    {' ' + props.contact.email}
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}