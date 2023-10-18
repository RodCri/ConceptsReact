//import { Target } from './components/TargetCard/Target'
import './App.css'
// import { FetchList } from './components/Fetch/FetchList'
//import { ListTasks } from './components/Task/ListTasks'
// import { ListUsers } from './components/Users/ListUsers'
// import Board from './components/TicTac/Board'
//import { Counter } from './components/Counter/Counter'
//import { Giphy } from './components/giphyAPI/Giphy'
// import { Following }  from './components/TwitterCard/Following'

// const usersData = [
//   {
//     name: 'Miguel Perez',
//     username: 'midudev',
//     isFollowing: false
//   },
//   {
//     name: 'Will Smith',
//     username: 'willsmith',
//     isFollowing: true
//   },
//   {
//     name: 'Elena Toro',
//     username: 'elenatoro',
//     isFollowing: false
//   }
// ];
export const App = () => {
  return (
    <>
    {/* Fetch <ListUsers></ListUsers>
    <FetchList></FetchList> */}
    {/* Todo App<ListTasks></ListTasks> */}
    {/* Game TicTacToe <Board></Board> */}
      {/* {
        usersData.map(user => {
          const {name, username, isFollowing} = user;
          return (
            <Following name={name} username={username} initialFollowing={isFollowing} key={username} />
          )
        })
      } */}
      {/* 
      <h2 className="title">Props and UseState</h2>
      <div className='cards'>
        <Target name="@rodCri" userId={1} contratado={false} description="FrontEnd Developer"/>
        <Target name="@fraCap" userId={2} contratado={true} description="BackEnd Developer"/>
        <Target name="@derRod" userId={3} contratado={true} description="QA"/>
      </div>
      <h2 className="title">UseState Hook</h2>
      <div className="counter">
        <Counter aux={10}/>
      </div>
      <h2 className="title">UseEffect Hook Api Fetch</h2>
      <Giphy />
      <h2 className="title">Uso de Props Renderizado condicional UseState</h2>
      <div className="container__following">
        <Following name='Miguel Perez' username='midudev' initialFollowing={false}/>
        <Following name='Will Smith' username='willsmith' initialFollowing/>
        <Following name='Elena Toro' username='elenatoro' initialFollowing={false}/>
      </div> */}
    </>
  )
}