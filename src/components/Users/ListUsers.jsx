import { useState } from 'react';
import { useEffect } from 'react';
import { User } from './User'

const USER_API = 'https://jsonplaceholder.typicode.com/users';

export const ListUsers = () => {
  
  const [users,setUsers] = useState([]);

  const fetchData = async() =>{
    try{
      const reponse = await fetch(USER_API);
      const dataInfo = await reponse.json();
      setUsers(dataInfo)
    }catch(error){
      console.error(error)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <ul>
      { users.map(user => <User key={user.id}>{user.name} -  {user.email}</User> )}
    </ul>
  )
}
