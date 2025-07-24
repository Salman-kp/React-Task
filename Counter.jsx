import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Counter.css'

function Counter() {
    const value=useSelector((state)=> state.value)
 const dispacth=useDispatch();

  console.log(value)
  return (
     <div className="di">
        <button className="btn" onClick={()=>{
            dispacth({type:'increment'})}}
            >Increment</button>
        <p className="pf">{value}</p>
        <button className="btn" onClick={()=>{
            dispacth({type:'decrement'})}}>Decrement</button>
      </div>
  )
}

export default Counter