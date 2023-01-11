import React, { useState } from 'react'
import MyEffect from '../../components/myEffect/myEffect'



export default function UseEffect() {
    const [state, setState] = useState(true)
    const toggleState = () => {
        setState(!state)
    }

    return (
        <div>
            {state
                ? <MyEffect props={toggleState}></MyEffect>
                : <p>ComponentDidUnmount</p>
            }

        </div>
    )
}
