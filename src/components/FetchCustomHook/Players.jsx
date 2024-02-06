import { useFetchPlayer } from "./useFetchPlayer";


export const Players = () => {
  
  const urlAPI = 'https://free-nba.p.rapidapi.com/players?page=0&per_page=5';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '31efcb92d0msha10a7dce1fe05d6p11a837jsn058cdb9961b2',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  };

  const {data,isLoading,error} = useFetchPlayer(urlAPI,options);

  return (
    <>
    {
      isLoading 
      ? <h4>Cargando...</h4>
      : error
        ? <p>Ha ocurrido un error {error}</p>
        : <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {data.map(player => {
              return(
                <tr key={player.id}>
                  <th>{player.id}</th>
                  <td>{player.first_name}</td>
                  <td>{player.last_name}</td>
                  <td>{player.team.city}</td>
                </tr>
              )
              })}
              {console.log()}
          </tbody>
        </table>
    }
    </>
  )
}