import { useState } from "react"
import { UserList } from "./UserList"

export const AppUser = () => {

  const [endPoint, setEndPoint] = useState('users');

  const handleFetch = () =>{
    setEndPoint('comments');
  }

  return (
    <>
      <UserList endPoint={endPoint} />
      <button onClick={handleFetch}>Change</button>
    </>
  )
}
