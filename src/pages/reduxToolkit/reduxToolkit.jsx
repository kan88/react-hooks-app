import React from 'react'
import NavBar from '../../components/navBar/navBar'
import { useDispatch, useSelector } from 'react-redux'
import MyButton from '../../components/myButton/myButton'
import { createPost, updatePost } from '../../toolkit/slices/posts'
const newItem = { id: 2, body: 'Сходить в магазин', title: 'Задание на вечер' }
export default function ReduxToolkit() {
    console.log('update component')
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    return (
        <div>
            <NavBar />
            <h1>reduxToolkit</h1>
            <MyButton onClick={() => dispatch(createPost())}>show length</MyButton>
            <MyButton onClick={() => dispatch(updatePost(newItem))}>push state</MyButton>
            <MyButton onClick={() => console.log(state.posts)}>show state</MyButton>
        </div>
    )
}
