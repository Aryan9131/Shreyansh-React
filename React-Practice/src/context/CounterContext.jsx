import { createContext } from "react";
import { useState } from 'react'

export const CounterContext=createContext(null)

export const CounterProvider=function(props){
    const [counter, setCounter]=useState(0)
    return (
        <CounterContext.Provider value={{counter, setCounter}}>
          {props.children}
        </CounterContext.Provider>
    )
}