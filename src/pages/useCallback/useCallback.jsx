import React, { useCallback, useState } from 'react'
import MyButton from '../../components/myButton/myButton'
import MyTime from '../../components/myTime/myTime'
import NavBar from '../../components/navBar/navBar'

export default function UseCallback() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    console.log('update parent')
    const memoTrue = () => {
        console.log('memo')
    }

    const doMemo = useCallback(() => {
        memoTrue(count)
    }, [count])

    const memoFalse = () => {
        console.log('unmemo')
    }

    return (
        <div>
            <NavBar></NavBar>
            <h1>useCallback</h1>
            <p style={{ maxWidth: '800px', margin: 'auto', marginBottom: '30px' }}>На странице размещено две кнопки. Первая кнопка использует useCallback с зависимостью к своему счетчику.
                Вторая кнопка не мемоизирована. При клике на первую кнопку зависимость изменяется и создается новая функция.
                При клике на вторую кнопку первый колбэк не создается заново, так как ее зависимости не изменились и поэтому в консоль не выводится memo
            </p>
            <MyButton onClick={() => setCount(count + 1)}>Мемоизирован</MyButton>
            <MyButton onClick={() => setCount1(count1 + 1)}>Не мемоизирован</MyButton>
            <MyTime doMemo={doMemo} memoFalse={memoFalse}></MyTime>
        </div >
    )
}
