import React from 'react'
import { store } from 'react-notifications-component'
import Loader from '../../component/UI/Loader/Loade'
import {Col, Container, Row} from "react-bootstrap"
import {connect} from 'react-redux'
import {addToCart} from "../../store/actions/cart"
import {findItem, setQt, setSize, setSizeRequire} from '../../store/actions/shop'
import classes from './Product.module.css'
const ProductPhoto = React.lazy(() => import('../../component/product/ProductPhoto'))
const ProductInformation = React.lazy(() => import('../../component/product/ProductInformation'))

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            alert: null
        }
    }
    componentDidMount() {
        this.props.findItem(this.props.match.params.id)
    }
    componentWillUnmount() {
        store.removeNotification(this.state.alert)
    }
    addNotification = () => {
        const alert = store.addNotification({
            title: "Отлично!",
            message: "Товар добавлен в корзину",
            type: "success",
            insert: "top",
            container: "top-center",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });
        this.setState({alert})
    }
    addCartHandler = () => {
        const cart = {...this.props.item}

        if (this.props.size) {
            cart.size = this.props.size
            cart.qt = this.props.qt

            if (!localStorage.cart) {
                const c = [cart]
                localStorage.cart = []
                localStorage.cart = JSON.stringify(c)
            } else {
                const c = JSON.parse(localStorage.cart)
                c.push(cart)
                localStorage.cart = JSON.stringify(c)
            }
            this.props.addToCart(cart)
            this.addNotification()
        } else {
            this.props.setSizeRequire()
        }
    }
    itemRender = () => {
        return (
            <Container fluid>
                <Row>
                    <Col className="col-sm-6">
                        <ProductPhoto image={this.props.item.image} />
                    </Col>
                    <Col className="col-sm-6">
                        <ProductInformation
                            item={this.props.item}
                            size={this.props.setSize}
                            sizeActive={this.props.size}
                            addCart={this.addCartHandler}
                            onClickInput={this.props.setQt}
                            qt={this.props.qt}
                            sizeRequire={this.props.sizeRequire}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={classes.boxDescriptions}>
                            <p>{this.props.item.description}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
    render() {
        if (!!this.props.item.name) {
            document.title = 'Chilly | ' + this.props.item.name
        }

        return (
            <section className="mb-5">
                <Container fluid>
                    <Row>
                        <Col>

                                {
                                    this.props.item && this.props.loading !== false
                                    ? <Loader /> 
                                    : this.itemRender()
                                }    

                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart,
        shop: state.shop.shop,
        item: state.shop.item,
        loading: state.shop.loading,
        size: state.shop.size,
        sizeRequire: state.shop.sizeRequire,
        qt: state.shop.qt
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: item => dispatch(addToCart(item)),
        findItem: (id, shop) => dispatch(findItem(id, shop)),
        setSize: size => dispatch(setSize(size)),
        setSizeRequire: () => dispatch(setSizeRequire()),
        setQt: (data, qt) => dispatch(setQt(data, qt))
    }
}


export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Product)