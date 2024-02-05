/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useFetchData } from "./useFetchData"

export const UserList = ({endPoint}) => {

  const {data, isLoading} = useFetchData(endPoint);

  return (
    <ul>
      {endPoint === 'users' ? 
        data.map(item => <li key={item.id}>{item.name}</li>) 
      : data.map(item => <li key={item.id}>{item.body}</li>)
      }
    </ul>
  )
}
