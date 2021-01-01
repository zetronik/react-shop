import {SET_CART, ADD_CART, FORM_VALID, CLEAR_CART} from '../actions/actionTypes'

const initialState = {
    cart: [],
    formControl: {
        name: {
            value: '',
            isValid: false,
            isInvalid: false,
            type: 'text',
            name: 'name',
            placeholder: 'Введите имя'
        },
        email: {
            value: '',
            isValid: false,
            isInvalid: false,
            type: 'email',
            name: 'email',
            placeholder: 'Введите email'
        },
        phone: {
            value: '',
            isValid: false,
            isInvalid: false,
            type: 'text',
            name: 'phone',
            placeholder: 'Номер телефона в формате 380ХХХХХХХХХ'
        },
        message: {
            value: '',
        }
    },
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

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CART:
            return {...state, cart: action.cart}
        case ADD_CART:
            const cart = [...state.cart]
            cart.push(action.item)
            return {...state, cart}
        case FORM_VALID:
            return {...state, formControl: action.formControl}
        case CLEAR_CART:
            return {...state, formControl: action.formControl, cart: []}
        default:
            return state
    }
}