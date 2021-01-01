import React from 'react'
import classes from './LeftSidebar.module.css'

export default function LeftSidebar(props) {
    
    const categoryRender = () => {
        return props.category.map((c, i) => {
            const qt = props.shop.filter(q => +q.category === +c.id)
            return (
                <div className={classes.panelHeading} key={i}>
                    <h4 className={classes.panelTitle} data-id={c.id} onClick={props.categoryHandler}>
                        {c.name}
                    </h4>
                    <span> ({qt.length})</span>
                </div>
            )
        })
    }
    return (
        <div className="left-sidebar">
            <h2 className="title text-center">Категории</h2>
            <button
                onClick={props.clearHandler}
                type="button"
                className={classes.clearButton}
            >Очистить</button>
            <div className={classes.categoryProducts}>
                {categoryRender()}
            </div>
        </div>
    )
}