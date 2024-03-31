/* eslint-disable react-hooks/exhaustive-deps */
import { useState,useEffect } from "react"

export const useFetchURI = (urlAPI,ur) => {

  const [data, setData] = useState();

  // const getFecth = async() =>{
  //   const response = await fetch(urlAPI, {
  //     method: 'POST',
  //     body: `url=${encodeURI(ur.toString())}`,
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //   })
  //   try{
  //     const data = await response.json();
  //     console.log(data)
  //     setState({
  //       data
  //     });
  //     // if (data.result_url !== undefined) {
  //     //   return new URL(data.result_url);
  //     // } else if (data.error !== undefined) {
  //     //   throw new Error(data.error + ` url=${encodeURIComponent(ur.toString())}`);
  //     // } else {
  //     //   throw new Error(`Invalid Response Received!! (Response: ${JSON.stringify(data)})`);
  //     // }
  //   }catch(error){
  //     return error
  //   }
    
  // }

  const getFecth = async() =>{
    const response = await fetch(urlAPI, {
      method: 'POST',
      body: `url=${encodeURI(ur.toString())}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    try{
      const data = await response.json();
      setData({data})
    }catch(error){
      console.log(error)
    }
  }
  useEffect( () => {
    if(!urlAPI) return
    getFecth()
  },[urlAPI])

  return {
    data
  }
}