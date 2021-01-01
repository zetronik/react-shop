import React from 'react'
import {Table} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import classes from './TableOrder.module.css'

export default function TableOrder(props) {
    const renderRowTable = () => {
        return props.cart.map((c, i) => {
            return (
                <tr key={i}>
                    <td className="image">
                        <img src={c.image[0]} alt="" />
                    </td>
                    <td>
                        <h4><NavLink to={'/shop/' + c.id}>{c.name}</NavLink></h4>
                        <p>ID: {c.id}</p>
                    </td>
                    <td>
                        <p>{c.price} грн</p>
                    </td>
                    <td>
                        <p>{c.size}</p>
                    </td>
                    <td>
                        <p>{c.qt}</p>
                    </td>
                    <td>
                        <span>
                            <p>{c.price * c.qt} грн</p>
                        </span>
                    </td>
                </tr>
            )
        })
    }
    return (
        <Table responsive className={classes.order}>
            <thead className={classes.tableOrder}>
            <tr>
                <td>Фото</td>
                <td>Описание</td>
                <td>Цена</td>
                <td>Размер</td>
                <td>Количество</td>
                <td>Сумма</td>
            </tr>
            </thead>
            <tbody className={classes.tableRow}>
            {renderRowTable()}
            </tbody>
        </Table>
    )
}