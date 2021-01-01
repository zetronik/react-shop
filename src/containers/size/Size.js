import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
// import classes from './Size.module.css'

class Size extends React.Component {
    componentDidMount() {
        document.title = 'Chilly | Подобрать размер'
    }

    render() {
        return (
            <section>
                <Container>
                    <Row>
                        <Col>
                            <h1>Size Component</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Size