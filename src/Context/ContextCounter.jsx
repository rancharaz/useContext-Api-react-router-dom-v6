import React, {useState, createContext} from 'react'

export const CounterContext = createContext();






const CounterContextProvider = (props) => {


    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount( count + 1)
    }

    const decreaseCount = () => {
        setCount( count - 1)
    }


    const value = {count, increaseCount, decreaseCount}


  return (
    
    <CounterContext.Provider value={value}>
            {props.children}
    </CounterContext.Provider>
  )
}

export default CounterContextProvider