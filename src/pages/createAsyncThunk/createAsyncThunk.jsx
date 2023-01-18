import React, { useEffect } from 'react'
import NavBar from '../../components/navBar/navBar'
import { useDispatch, useSelector } from 'react-redux'
import MyButton from '../../components/myButton/myButton'
import { getUser, getUsers, showUsers, deleteUser } from '../../toolkit/slices/asyncUsers'

export default function CreateAsyncThunk() {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const { status, error } = useSelector((state) => state.asyncusers)
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);
    useEffect(() => {
        dispatch(getUser(2));
    }, [dispatch]);

    console.log(state)
    return (
        <div>
            <NavBar />
            <h1>createAsyncThunk</h1>
            <MyButton onClick={() => dispatch(showUsers())}>Показать стейт</MyButton>
            <MyButton onClick={() => dispatch(deleteUser(1))}>Удалить пользователя</MyButton>
            <MyButton onClick={() => dispatch(getUsers())}>Еще пользователи</MyButton>
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
        </div>
    )
}
