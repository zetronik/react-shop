import React from 'react'
// import LeftSidebar from '../sidebar/LeftSidebar'
import ShopItem from '../shopitem/ShopItem'
import {Col, Container, Row} from "react-bootstrap";

export default function MainHome(props) {
    return (
        <section>
            <Container>
                <Row>
                    <Col sm="12">
                        <div className="features_items">
                            <h2 className="title text-center">Предложение</h2>
                        </div>

                    </Col>
                    <ShopItem shop={props.shopHome}/>
                </Row>
            </Container>
        </section>
    )
}