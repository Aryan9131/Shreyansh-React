import {useSelector , useDispatch} from 'react-redux'
import { increment, decrement } from '../redux/slices/CounterSlice'
export const Homepage=()=>{
    const dispatch=useDispatch()
     const {counter}=useSelector((state)=>state.Counter);
    return (
        <>
           <h1>Hiii page {counter}</h1>
           <button onClick={()=>dispatch(increment())}>increment</button>
           <button onClick={()=>dispatch(decrement())}>decrement</button>
        </>
    )
}