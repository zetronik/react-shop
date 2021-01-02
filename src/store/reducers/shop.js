import {INIT_SHOP, FIND_PRODUCT, SET_SIZE, SIZE_REQUIRE, SET_QT} from "../actions/actionTypes";

const initialState = {
    loading: false,
    shop: [],
    item: {},
    slider: [],
    size: null,
    sizeRequire: true,
    qt: 1,
    category: [],
    contact: {},
    emailConfig: {}
}

export default function shopReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_SHOP:
            return {...state, ...action.data, loading: true}
        case FIND_PRODUCT:
            return {...state, item: action.item, loading: false}
        case SET_SIZE:
            return {...state, size: action.size, sizeRequire: true}
        case SIZE_REQUIRE:
            return {...state, sizeRequire: false}
        case SET_QT:
            return {...state, qt: action.qt}
        default:
            return state
    }
}