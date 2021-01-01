import {SET_CART, ADD_CART, FORM_VALID, CLEAR_CART} from './actionTypes'
import is from "is_js";

export function mountComponent() {
    let cart = []
    if (!!localStorage.cart) {
        cart = [...JSON.parse(localStorage.cart)]

    }
    return {
        type: SET_CART,
        cart
    }
}

export function setQtCart(event, cart) {
    const row = event.target.dataset.row
    if (event.target.dataset.sign === 'minus') {
        --cart[row].qt
        if (cart[row].qt === 0) {
            cart[row].qt = 1
        }
    } else {
        ++cart[row].qt
    }
    localStorage.cart = JSON.stringify(cart)
    return {
        type: SET_CART,
        cart
    }
}

export function itemDeleteHandler(i, cart) {
    cart.splice(i, 1)
    localStorage.cart = JSON.stringify(cart)
    return {
        type: SET_CART,
        cart
    }
}

export function addToCart(item) {
    return {
        type: ADD_CART,
        item
    }
}

export function inputChangeHandler (event, formControl) {
    const value = event.target.value
    const name = event.target.name

    if (name === 'name') {
        if (value.length > 0) {
            formControl[name].value = value
            formControl[name].isInvalid = false
            formControl[name].isValid = true
        } else {
            formControl[name].value = value
            formControl[name].isValid = false
            formControl[name].isInvalid = true
        }
    }

    if (name === 'email') {
        if (is.email(value.trim())) {
            formControl[name].value = value.trim()
            formControl[name].isInvalid = false
            formControl[name].isValid = true
        } else {
            formControl[name].value = value.trim()
            formControl[name].isValid = false
            formControl[name].isInvalid = true
        }
    }

    if (name === 'phone') {
        if (is.number(+value.trim()) && +value.trim().length === 12) {
            formControl[name].value = value.trim()
            formControl[name].isInvalid = false
            formControl[name].isValid = true
        } else {
            formControl[name].value = value.trim()
            formControl[name].isValid = false
            formControl[name].isInvalid = true
        }
    }

    if (name === 'message') {
        formControl[name].value = value
    }
    return {type: FORM_VALID, formControl}
}

export function clearCart(cart) {
    const formControl = {
        name: {
            value: '',
            required: true
        },
        email: {
            value: '',
            required: false
        },
        phone: {
            value: '',
            required: true
        },
        message: {
            value: '',
            required: false
        }
    }
    if (!!localStorage.order) {
        const order = JSON.parse(localStorage.order)
        order.push({date: Date.now(), cart})
        localStorage.order = JSON.stringify(order)
    } else {
        localStorage.order = JSON.stringify([{date: Date.now(), cart}])
    }
    localStorage.removeItem('cart')
    return {type: CLEAR_CART, formControl}
}