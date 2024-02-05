import { useState } from "react"

export const useCounter = (initialValue = 0) => {

  const [counter, setCounter] = useState(initialValue);

  const increase = (valor) =>{
    setCounter(counter + valor)
  }
  
  const decrease = (valor, negativo = true) =>{
    if(!negativo && counter - valor < 0){
      setCounter(0)
      return
    }
    setCounter(counter - valor)
  }
  
  const reset = () =>{
    setCounter(0)
  }
  
  return {
    counter,
    increase,
    decrease,
    reset
  }
}
