import { useState } from 'react'
import { FetchInfo } from './FetchInfo'

export const FetchList = () => {

  const endPont = {
    user : 'users',
    comments: 'comments'
  }

  const [EndPoint, setEndPoint] = useState(endPont.user)

  const changeEndPoint = () =>{
    if(EndPoint === 'users'){
      setEndPoint(endPont.comments)
    }else{
      setEndPoint(endPont.user)
    }
  }
  
  return (
    <>
      <FetchInfo EndPoint={EndPoint}></FetchInfo>
      <button onClick={changeEndPoint}>Cambiar EndPoint</button>
    </>
  )
}