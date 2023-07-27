import { useState } from "react"
import './Counter.css'
// eslint-disable-next-line react/prop-types
export const Counter = ({aux}) =>{

  const [count, setCount] = useState(aux);
  
  const handleDecrement = () =>{
    if(count <=0){
      return
    }else{
      return setCount(count - 1);
    }
  }
  
  const handleIncrement = () =>{
    return `${count === 20 ? setCount(0) : setCount(count + 1) }`;
  }

  return(
    <div className="container">
      <h2>Use State</h2>
      <p className="counter__number">{count}</p>
      <div className="counter__btn">
        <button onClick={handleIncrement} className={`btn ${count >= 20 ? 'disable': ''}`}>Increment</button>
        <button onClick={handleDecrement} className={`btn ${count <= 0 ? 'disable': ''}`}>Decrement</button>
      </div>
    </div>
  )
}