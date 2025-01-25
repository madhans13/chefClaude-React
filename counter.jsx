import { useState } from "react"

export default function Counter(){
    const [count,setCount]=useState(0)
    function add(){
        setCount(preCount=>
            preCount+1
        )
    }
    function subtract(){
        setCount(preCount=>
            preCount-1
        )
    }

    return(
        <>
        <h1>{count}</h1>
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        </>
    )
}