import React, { useRef } from 'react'
import MyButton from '../../components/myButton/myButton';
import NavBar from '../../components/navBar/navBar'

export default function UseRef() {
    const myRef = useRef(null)

    const onButtonClick = () => {
        myRef.current.focus();
    };
    return (
        <div>
            <NavBar />
            <h1>useRef</h1>
            <input ref={myRef}></input>
            <MyButton onClick={onButtonClick}>Нажми на меня</MyButton>
        </div>
    )
}
