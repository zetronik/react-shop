import React from 'react'
import {NavLink} from 'react-router-dom'
import Input from '../UI/Input/Input'
import classes from './ProductInformation.module.css'
import {Container, Row, Col} from "react-bootstrap";

export default function ProductInformation(props) {
    const sizeRender = () => {
        if (!!props.item.size) {
            return props.item.size.map((s, i) => {
                const cls = [classes.productButton]
                if (s === props.sizeActive) {
                    cls.push(classes.active)
                }
                return (
                    <button
                        key={i}
                        onClick={() => props.size(s)}
                        className={cls.join(' ')}
                    >{s}</button>
                )
            })
        }

    }

    return (
        <Col>
            {
                props.item.new
                    ? <img src="../images/icon/new.jpg" className={classes.newArrival} alt=""/>
                    : null
            }
            <Container>
                <Row>
                    <Col sm="12" className="mt-5">
                        <h1 className={classes.text}>{props.item.name}</h1>
                        <p>ID: {props.item.id}</p>
                    </Col>

                    <Col sm="12" className="mt-3">
                        <h3 className={classes.text}>{props.item.price} грн</h3>
                    </Col>

                    <Col sm="12" className="mt-3">
                        <div className={!props.sizeRequire ? classes.sizeRequire : null}>
                            {sizeRender()}
                        </div>
                    </Col>

                    <Col sm="12" className="mt-3">
                        <Input onClick={props.onClickInput} input={props.qt}/>
                    </Col>

                    <Col sm="12" className="mt-3">
                        <p>
                            <b>Наличие:</b>
                            {props.item.availability ? ' Есть в наличие' : ' Нету в наличие'}
                        </p>
                    </Col>

                    <Col sm="12" className="mt-3">
                        <button
                            type="button"
                            className={classes.productButton}
                            onClick={() => {props.addCart(props.item.id)}}
                        >
                            В корзину
                        </button>
                    </Col>
                    <Col sm="12" className="mt-3 mb-3">
                        <NavLink
                            className={classes.productButton}
                            to="/care"
                        >
                            Уход за одеждой
                        </NavLink>
                        <NavLink
                            className={classes.productButton}
                            to="/size"
                        >
                            Подобрать размер
                        </NavLink>
                        <NavLink
                            className={classes.productButton}
                            to="/delivery"
                        >
                            Доставка и оплата
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </Col>
    )
}