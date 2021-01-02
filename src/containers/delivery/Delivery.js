import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
// import classes from './Delivery.module.css'

class Delivery extends React.Component {
    componentDidMount() {
        document.title = 'Chilly | Уход за одеждой'
    }

    render() {
        return (
            <section>
                <Container>
                    <Row>
                        <Col>
                            <h1>Delivery Component</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Delivery