import React, { useState, useEffect } from 'react'
import NavBar from '../../components/navBar/navBar'
import MyButton from '../../components/myButton/myButton'


export default function MyEffect({ props }) {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    useEffect(() => {
        console.log('effect')
        document.querySelector('.text').textContent = `Эффект без зависимостей. Изменяется при нажатии первых 2 кнопок: ${Date.now()}`
    })

    useEffect(() => {
        console.log('effect1')
        document.querySelector('.text1').textContent = `Эффект с зависимостью только со второй кнопкой: ${Date.now()}`
    }, [count1])

    useEffect(() => {
        return () => {
            console.log('effect2')
            setCount2('')
        }
    }, [count2])

    return (
        <div>
            <NavBar />
            <h1>useEffect</h1>
            <MyButton onClick={() => setCount(count + 1)}>show time</MyButton>
            <p>Нажали: {count}</p>
            <p className='text'></p>
            <hr></hr>
            <MyButton onClick={() => setCount1(count1 + 1)}>show time</MyButton>
            <p>Нажали: {count1}</p>
            <p className='text1'></p>
            <hr></hr>
            <MyButton onClick={props}>show time</MyButton>
            <p>При нажатии на кнопку компонент размонтируется и в консоль выведется effect2</p>
            <p className='text2'></p>
        </div>
    )
}