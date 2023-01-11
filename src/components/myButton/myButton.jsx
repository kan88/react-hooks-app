import React from 'react'
import classes from './myButton.module.css'

export default function MyButton({ children, ...props }) {
    return (
        <button {...props} className={classes.button}>{children}</button>
    )
}
