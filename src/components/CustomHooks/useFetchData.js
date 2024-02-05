/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useState } from "react"

export const useFetchData = (endPoint) => {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async() => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    fetchData()
  },[endPoint])

  return {
    data,
    isLoading
  }
}
