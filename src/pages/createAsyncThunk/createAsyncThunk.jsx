import React, { useEffect } from 'react'
import NavBar from '../../components/navBar/navBar'
import { useDispatch, useSelector } from 'react-redux'
import MyButton from '../../components/myButton/myButton'
import { getUser, getUsers, showUsers } from '../../toolkit/slices/asyncUsers'

export default function CreateAsyncThunk() {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    console.log(state)
    useEffect(() => {
        dispatch(getUsers());
    }, []);
    useEffect(() => {
        dispatch(getUser(2));
    }, []);

    console.log(state)
    return (
        <div>
            <NavBar />
            <h1>createAsyncThunk</h1>
            <MyButton onClick={() => dispatch(showUsers())}></MyButton>
        </div>
    )
}
