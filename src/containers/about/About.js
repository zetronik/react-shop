import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
// import classes from './About.module.css'

class About extends React.Component {
    componentDidMount() {
        document.title = 'Chilly | О нас'
    }

    render() {
        return (
            <section>
                <Container>
                    <Row>
                        <Col>
                            <h1>About Component</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default About