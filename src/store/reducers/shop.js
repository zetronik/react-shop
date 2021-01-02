import {INIT_SHOP, FIND_PRODUCT, SET_SIZE, SIZE_REQUIRE, SET_QT, CLEAR_HANDLER, ITEM_UPDATE} from "../actions/actionTypes";

const initialState = {
    loading: false,
    shop: [],
    item: {},
    slider: [],
    size: null,
    sizeRequire: true,
    qt: 1,
    category: [],
    page: 1,
    totalPages: 1,
    length: 6,
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
        case ITEM_UPDATE:
            return {...state, ...action.data}
        case CLEAR_HANDLER:
            return {...state, ...action.data}
        default:
            return state
    }
}