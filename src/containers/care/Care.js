import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
// import classes from './Care.module.css'

class Care extends React.Component {
    componentDidMount() {
        document.title = 'Chilly | Уход за одеждой'
    }

    render() {
        return (
            <section>
                <Container>
                    <Row>
                        <Col>
                            <h1>Care Component</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Care