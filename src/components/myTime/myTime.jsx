import React, { useEffect } from 'react'

export default function MyTime({ doMemo, memoFalse }) {
    useEffect(() => {
        doMemo();
    }, [doMemo]);

    useEffect(() => {
        memoFalse();
    }, [memoFalse]);
    return (
        <div>{Date.now()}</div>
    )
}
