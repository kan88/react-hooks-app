import React, { useMemo, useState } from 'react'
import NavBar from '../../components/navBar/navBar'

export default function UseMemo() {

    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const handlerInput1 = (evt) => {
        setValue1(evt.target.value)
    }

    const handlerInput2 = (evt) => {
        setValue2(evt.target.value)
    }

    const consoleLog1 = (value1) => {
        console.log('update1')
        return value1
    }

    const showValue1 = consoleLog1(value1)

    const consoleLog2 = (value2) => {
        console.log('update2')
        return value2
    }

    const showValue2 = useMemo(() => consoleLog2(value2), [value2])

    return (
        <div>
            <NavBar />
            <h1>useMemo</h1>
            <hr></hr>
            <p>При вводе данных в первом инпуте выведется update1</p>
            <p>При вводе данных во втором инпуте выведется update1 и update2</p>
            <input placeholder='Input 1' onInput={handlerInput1} value={value1}></input>
            <input placeholder='Input 2' onInput={handlerInput2} value={value2}></input>
            <h2>Данные из 1 инпута: {showValue1}</h2>
            <h2>Данные из 2 инпута: {showValue2}</h2>
        </div >
    )
}
