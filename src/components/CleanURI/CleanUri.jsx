import { useState } from "react";
import { useFetchURI } from "./useFetchURI"

export const CleanUri = () => {

  const API_BASE = 'https://cleanuri.com/api/';
  const API_VER = 'v1';
  const SHORTEN_ROUTE = 'shorten';
  const COMPLETE_ROUTE = `${API_BASE}${API_VER}/${SHORTEN_ROUTE}/`;

  const [ur, setUr] = useState('');
  const {data} = useFetchURI(COMPLETE_ROUTE,ur);

  const onSubmit = (event) =>{
    event.preventDefault();
    console.log(data)
  }

  const onInputChange = ({target}) =>{
    setUr(target.value)
  }

  return (
    <>  
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="url">URL</label>
          <input 
          type="text" 
          className="form-control" 
          name="url"  
          placeholder="Enter URL" 
          onChange={onInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Clean</button>
      </form>
    </>
  )
}