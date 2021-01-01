import React from 'react'
import LeftSidebar from '../sidebar/LeftSidebar'
import ShopItem from '../shopitem/ShopItem'
import Pagination from '../UI/Pagination/Pagination'
import {Col, Container, Row} from "react-bootstrap";
import './MainShop.css'

class MainShop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shop: [],
            page: 1,
            totalPages: 1,
            length: 6,
            item: []
        }
    }
    itemUpdate = (page ) => {
        const shop = [...this.state.shop]
        const totalPages = Math.ceil(this.state.shop.length/this.state.length)
        const item = shop.slice((page - 1) * this.state.length, this.state.length * (page))
        this.setState({item, totalPages})
    }
    componentDidMount() {
        this.clearHandler()
    }
    categoryHandler = event => {
        const shop = this.props.shop.filter(i => {
            if (i.category === +event.target.dataset.id) {
                return i
            }
        })
        this.setState({page: 1, shop}, () => this.itemUpdate(1))

    }
    clearHandler = () => {
        const totalPages = Math.ceil(this.props.shop.length/this.state.length) || 1
        const shop = [...this.props.shop]
        const item = shop.slice((this.state.page - 1) * this.state.length, this.state.length * (this.state.page))
        this.setState({totalPages, item, shop})
    }
    pageHandler = page => {
        this.setState({page})
        this.itemUpdate(+page)
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col sm="3">
                        <LeftSidebar
                            category={this.props.category}
                            shop={this.props.shop}
                            categoryHandler={this.categoryHandler}
                            clearHandler={this.clearHandler}
                        />
                    </Col>
                    <Col sm="9">

                        <Container>
                            <Row>
                                <Col sm="12" className="features_items">
                                    <h2 className="title text-center">Товары</h2>
                                </Col>
                                <ShopItem shop={this.state.item} />
                                <Col sm="12">
                                    <Pagination
                                        currentPage={this.state.page}
                                        totalPages={this.state.totalPages}
                                        onChange={page => this.pageHandler(page)}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MainShop