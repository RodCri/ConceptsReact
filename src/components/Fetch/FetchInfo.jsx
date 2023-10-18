import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export const FetchInfo = ({EndPoint}) => {

  const [info,setInfo] = useState([]);

  const fetchData = async() =>{
    try{
      const reponse = await fetch(`https://jsonplaceholder.typicode.com/${EndPoint}`);
      const dataInfo = await reponse.json();
      setInfo(dataInfo)
    }catch(error){
      console.error(error)
    }
  }

  useEffect(()=>{
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[EndPoint])

  return (
    <>
      {info.map(element => <li key={element.id}>{element.name}</li> )}
    </>
  )
}