import { useState } from "react"
import "./Counter.css"
import PropTypes from 'prop-types';
import CounterButtons from './CounterButtons'

export default function counter(){
  const [count,setcount]=useState(0);
  <span className="counting">{count}</span>
  function IncrementConterFunction(by){
      setcount(count+by)
  }
  function decrementConterFunction(by){
    setcount(count-by)
}
  return (
    <>
     <span className="counting">{count}</span>
    <CounterButtons by={1} decrementConterFunction={decrementConterFunction} IncrementConterFunction={IncrementConterFunction}/>
    <CounterButtons by={2} decrementConterFunction={decrementConterFunction} IncrementConterFunction={IncrementConterFunction}/>
    <CounterButtons by={5} decrementConterFunction={decrementConterFunction} IncrementConterFunction={IncrementConterFunction}/>

    </>
  )
}
export function CounterButtons({by,decrementConterFunction,IncrementConterFunction}){

   const [count,setcount] = useState(0);
     function  IncrementConterButtonFunction(){
      setcount(count+by);
      IncrementConterFunction(by);
      
     }
     function  decrementConterButtonFunction(){
      setcount(count-by);
      decrementConterFunction(by);
     }
     

    return (
       <div className="counter">
        <span className="count">{count}</span>
        <div>
        <button className="CounterButton" onClick={IncrementConterButtonFunction}>{by}</button>
        <button className="CounterButton" onClick={decrementConterButtonFunction}>-{by}</button>
        </div>
        </div>
    )
}

