import React from 'react'
import classes from './Input.module.css'

export default function Input(props) {
    return (
        <div className={classes.number}>
            <button
                className={classes.numberMinus}
                type="button"
                data-sign="minus"
                data-row={props.row}
                onClick={event => props.onClick(event.target.dataset.sign, props.input)}
            >
                -
            </button>
            <input type="number" min="1" value={props.input} readOnly />
            <button
                className={classes.numberPlus}
                type="button"
                data-sign="plus"
                data-row={props.row}
                onClick={event => props.onClick(event.target.dataset.sign, props.input)}
            >
                +
            </button>
        </div>
    )
}