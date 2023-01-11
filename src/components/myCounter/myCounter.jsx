import React, { useState } from 'react'
import MyButton from '../myButton/myButton'

export default function MyCounter({ children }) {
    const [count, setCount] = useState(0)
    console.log('update')
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h2>{children}</h2>
            <MyButton onClick={increment}>Increment</MyButton>
            <MyButton onClick={decrement}>Decrement</MyButton>
            <h2>{count}</h2>
        </div>
    )
}
