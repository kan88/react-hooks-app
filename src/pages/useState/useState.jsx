import React from 'react'
import MyCounter from '../../components/myCounter/myCounter'
import NavBar from '../../components/navBar/navBar'

export default function UseState() {

    return (
        <div>
            <NavBar />
            <h1>useState</h1>
            <MyCounter>Обычный счетчик</MyCounter>
        </div>
    )
}
