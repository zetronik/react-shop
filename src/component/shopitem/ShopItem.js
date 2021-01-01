import React from 'react'
import {NavLink} from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import {Col} from 'react-bootstrap'
import classes from './ShopItem.module.css'

export default function shopItem(props) {
    return props.shop.map((item, index) => {
        return (
            <Col xs="12" sm="6" md="4" key={index}>
                <div className={classes.ShopItem}>
                    <div className={classes.singleProducts}>
                        <div className={classes.productInfo}>
                            <LazyLoad height={200}>
                                <img src={typeof item.image === 'object' ? item.image[0] : item.image} alt=""/>
                            </LazyLoad>
                            <h2>{item.price} грн</h2>
                            <p>{item.name}</p>
                            <NavLink to={'/shop/' + item.id}>
                                Подробно
                            </NavLink>
                        </div>
                    </div>
                </div>
            </Col>
        )
    })
}