import React from 'react'
import emailjs from 'emailjs-com'
import {store} from 'react-notifications-component'
import RowCart from '../../component/cart/RowCart'
import FormCart from '../../component/cart/FormCart'
import {Col, Container, Row, Table} from 'react-bootstrap'
import {connect} from "react-redux"
import {setQtCart, mountComponent, itemDeleteHandler, inputChangeHandler, clearCart} from '../../store/actions/cart'
import classes from './Cart.module.css'


class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            alert: null,
            alertConfig: {
                success: {
                    title: "Просто замечательно!",
                    message: "Заказ отправлен, ожидайте, с Вами свяжуться",
                    type: "success"
                },
                failed: {
                    title: "Произошла ошибка!",
                    message: "Есть проблемы, свяжитесь с нами",
                    type: "warning"
                }
            }
        }
    }
    componentDidMount() {
        document.title = 'Chilly | Корзина'
        this.props.mountComponent()
    }
    componentWillUnmount() {
        store.removeNotification(this.state.alert)
    }
    orderIsValid = () => {
        const name = this.props.formControl.name.isValid
        const phone = this.props.formControl.phone.isValid
        const cart = this.props.cart.length > 0

        return name && phone && cart
    }
    returnHTML = () => {
        const cart = this.props.cart.map(c => {
            return `
                <div style="border: 1px solid #a49f9f">
                    <h3>Название: ${c.name}</h3>
                    <h4>ID: ${c.id}</h4>
                    <p>Размер: ${c.size}</p>
                    <p>Цена: ${c.price}</p>
                    <p>Количество: ${c.qt}</p>
                    <p>Сумма: <span>${c.qt * c.price}</span></p>
                </div>
            `
        })
        return cart.join('')
    }
    sendEmail = event => {
        event.preventDefault()
        const templateParams = {
            name: this.props.formControl.name.value,
            phone:  this.props.formControl.phone.value,
            email:  this.props.formControl.email.value,
            message:  this.props.formControl.message.value,
            cart: this.returnHTML()
        }
        emailjs.send(
            this.props.emailConfig.serviceID,
            this.props.emailConfig.templateID,
            templateParams,
            this.props.emailConfig.userID
        ).then(() => {
            this.addNotification('success')
            this.props.clearCart(this.props.cart)
        }, () => {
            this.addNotification('warning')
        })
    }
    addNotification = (type) => {
        const alert = store.addNotification({
            title: this.state.alertConfig[type].title,
            message: this.state.alertConfig[type].message,
            type: this.state.alertConfig[type].type,
            insert: "top",
            container: "top-center",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        })
        this.setState({alert})
    }
    render() {
        return (
            <section>
                <Container>
                    <div className={classes.cartInfo}>
                        <Table responsive>
                            <thead>
                            <tr className={classes.cartMenu}>
                                <td className="image">Фото</td>
                                <td className="description">Описание</td>
                                <td className="price">Цена</td>
                                <td className="size">Размер</td>
                                <td className="quantity">Количество</td>
                                <td className="total">Сумма</td>
                                <td className="option">Опции</td>
                            </tr>
                            </thead>
                            <tbody>
                            <RowCart
                                cart={this.props.cart}
                                delete={this.props.itemDeleteHandler}
                                onClickInput={this.props.setQtCart}
                            />
                            </tbody>
                        </Table>
                    </div>
                </Container>
                <Container className="mb-3 mt-3">
                    <Row className="justify-content-center">
                        <Col xs={12} sm={8} md={6}>
                            <FormCart
                                onSubmit={this.sendEmail}
                                onChange={this.props.inputChangeHandler}
                                formControl={this.props.formControl}
                                orderValid={this.orderIsValid}
                            />
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
        formControl: state.cart.formControl,
        emailConfig: state.shop.emailConfig
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mountComponent: () => dispatch(mountComponent()),
        setQtCart: (event, cart) => dispatch(setQtCart(event, cart)),
        itemDeleteHandler: (i, cart) => dispatch(itemDeleteHandler(i, cart)),
        inputChangeHandler: (event, formControl) => dispatch(inputChangeHandler(event, formControl)),
        clearCart: cart => dispatch(clearCart(cart))
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Cart)