/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useFetchPlayer = (url,options) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null
  });

  const {data,isLoading,error} = state;

  const getfecth = async () =>{
    if(!url) return
    try {
      const response = await fetch(url, options);
      const dataPlayer = await response.json();
      const data = dataPlayer.data
      console.log(data);
      setState({
        data,
        isLoading: false,
        error: null
      })
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        error: error
      })
    }
  }

  useEffect( () => {
    if(!url) return
    getfecth()
  },[url])


  return {
    data,
    isLoading,
    error
  }
}
