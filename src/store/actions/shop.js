import axios from 'axios'
import {firebaseLink} from '../../config/configShop'
import {INIT_SHOP, FIND_PRODUCT, SET_SIZE, SIZE_REQUIRE, SET_QT} from './actionTypes'

export function initShop() {
    return async dispatch => {
        try {
            const res = await axios.get(firebaseLink)
            dispatch(setConfig(res.data))
        } catch (e) {
            
        }
    } 
}

export function findItem(id) {
    return async dispatch => {
        try {
            const res = await axios.get(firebaseLink)
            const item = res.data.shop.filter(s => s.id === id)
            dispatch(setItem(item[0]))
        } catch (e) {
            console.log(e)
        }
    }  
}

export function setConfig(data) {
    return {type: INIT_SHOP, data}
}

export function setItem(item) {
    return { type: FIND_PRODUCT, item }
}

export function setSize(size) {
    return {type: SET_SIZE, size}
}

export function setSizeRequire() {
    return {type: SIZE_REQUIRE}
}

export function setQt(data, qt) {
    console.log(qt)
    if (data === 'minus') {
        const q = qt - 1
        if (q > 0) {
            return {type: SET_QT, qt: q}
        } else {
            return {type: SET_QT, qt: 1}
        }

    } else {
        return {type: SET_QT, qt: qt + 1}
    }
}