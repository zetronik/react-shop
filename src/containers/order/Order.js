import React from 'react'
import { format } from 'date-fns'
import {Accordion, Card, Col, Container, Row} from 'react-bootstrap'
import TableOrder from '../../component/UI/Table/TableOrder'
import classes from './Order.module.css'

class Order extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            order: []
        }
    }
    renderOrder = () => {
        return this.state.order.map((o, i) => {
            return (
                <Card key={i}>
                    <Accordion.Toggle as={Card.Header} eventKey={i.toString()} className={classes.orderMenu}>
                        {format(new Date(o.date), 'dd.MM.yyyy') }
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={i.toString()}>
                        <Card.Body>
                            <TableOrder cart={o.cart}/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            )
        })
    }
    componentDidMount() {
        document.title = 'Chilly | Мои заказы'
        if (!!localStorage.order) {
            const order = JSON.parse(localStorage.order)
            this.setState({order})
        }
    }

    render() {
        return (
            <section className="mb-3">
                <Container>
                    <Row>
                        <Col>
                            {this.state.order.length === 0 ? <h4>Нету истории заказов</h4> : null}
                            <Accordion defaultActiveKey="0">
                                {this.renderOrder()}
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Order