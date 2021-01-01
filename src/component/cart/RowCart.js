import React from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import classes from './RowCart.module.css'
import {NavLink} from 'react-router-dom'
import Input from '../UI/Input/Input'

export default function RowCart(props) {
    const cartRowRender = () => {
        return props.cart.map((c, i) => {
            return (
                <tr key={i} className={classes.cartRow}>
                    <td className={classes.cartProduct}>
                        <img src={c.image[0]} alt="" />
                    </td>
                    <td className="cart_description">
                        <h4><NavLink to={'/shop/' + c.id}>{c.name}</NavLink></h4>
                        <p>ID: {c.id}</p>
                    </td>
                    <td className="cart_price">
                        <p>{c.price} грн</p>
                    </td>
                    <td className="cart_size">
                        <p>{c.size}</p>
                    </td>
                    <td className="cart_quantity">
                        <Input onClick={e => props.onClickInput(e, props.cart)} input={c.qt} row={i}/>
                    </td>
                    <td className="cart_total">
                        <span className="cart_total_price">
                            <p>{c.price * c.qt} грн</p>
                        </span>
                    </td>
                    <td className={classes.cartDelete}>
                        <span onClick={() => props.delete(i, props.cart)}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </td>
                </tr>
            )
        })
    }
    return (
        <Auxiliary>
            {cartRowRender()}
        </Auxiliary>
    )
}