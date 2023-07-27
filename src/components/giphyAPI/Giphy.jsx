import { useState, useEffect } from "react";
import './Giphy.css';

const URL_API = 'https://catfact.ninja/fact?max_length=140';
const API_KEY = 'aPbGBqhjFdK1Mf7SotjZJuNWMHdDjkrT';

export const Giphy = () => {
  const [message, setMessage] = useState('');
  const [gifRandom, setGifrandom] = useState('');

  const catFactAPI = async() =>{
    const response = await fetch(URL_API);
    const data = response.json();
    return data;
  }

  const giphyAPI = async(world) =>{
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${world}`);
    const data = await res.json();
    return data.data[0].images.original.url;
  }


  useEffect(() => {
    catFactAPI()
      .then((data) => {
        setMessage(data.fact);
        const fact = data.fact.split(" ").slice(0,3).join(' ');
        giphyAPI(fact)
        .then(data =>{
          setGifrandom(data)
        })
      })
      .catch((e) => {
        console.log(e.message)
      })
  }, []);



  return (
    <div className="container__gif">
      <h2 className="gif__message">{message}</h2>
      <img src={gifRandom} alt="" className="gif__img" />
    </div>
  )
}