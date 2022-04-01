import React, { useState,useContext } from 'react'
import { CounterContext } from '../Context/ContextCounter'

const Homepage = () => {

   const {count, increaseCount, decreaseCount} = useContext(CounterContext)
 
  return (
      <>
          <div className='text-4xl'>Homepage / Counter component</div><br></br>
          <div className='ml-24 mb-5 text-2xl'> Counter is : {count}</div>
          <button className='btn-test' onClick={increaseCount}>Increase</button>
          <button className='btn-test' onClick={decreaseCount}>Decrease</button>

      </>
  )
}

export default Homepage