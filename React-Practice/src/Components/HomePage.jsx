import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"
export const Homepage=()=>{
    const {counter, setCounter}=useContext(CounterContext)
    return (
        <>
           <h1>Hiii page {counter}</h1>
           <button onClick={()=>setCounter((prev)=>prev++)} >increment</button>
           <button>decrement</button>
        </>
    )
}