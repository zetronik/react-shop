import React from 'react'
import classes from './Button.module.css'

export default function Button(props) {
    return (
        <button
            type="button"
            className={classes.btn}
            onClick={() => props.onClick(props.children)}
        >
            {props.children}
        </button>
    )
}