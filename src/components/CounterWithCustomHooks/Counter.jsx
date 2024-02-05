import {useCounter} from './useCounter';
import './Counter.css'

export const Counter = () => {

  const {counter, increase, decrease, reset} = useCounter(10);


  return (
    <>
      <div className="card" >
        <p className='fw-bold text-xl-end'>{counter}</p>
        <div className="card-body">
          <button className="btn btn-primary" onClick={()=>{
            increase(2)
          }}>+</button>
          <button className="btn btn-danger mx-2" onClick={()=>{
            reset()
          }}>Reset</button>
          <button className="btn btn-primary" onClick={()=>{
            decrease(2,false)
          }}>-</button>
        </div>
      </div>
    </>
  )
}
