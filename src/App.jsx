//import { Target } from './components/TargetCard/Target'
import './App.css'
import { CleanUri } from './components/CleanURI/CleanUri'
//import TodoApp from './components/UseMemo/TodoApp'
//import { Counter } from './components/CounterWithCustomHooks/Counter';
// import { FetchList } from './components/Fetch/FetchList'
// import { ListTasks } from './components/Task/ListTasks'
// import { ListUsers } from './components/Users/ListUsers'
// import Board from './components/TicTac/Board'
// import { Counter } from './components/Counter/Counter'
// import { Giphy } from './components/giphyAPI/Giphy'
// import { Following }  from './components/TwitterCard/Following'
// import {AppUser} from './components/CustomHooks/AppUser';
// import { RegisterForm } from './components/Formulario/RegisterForm';
// import { Players } from './components/FetchCustomHook/Players'
// import { FormRegister } from './components/UseRef/FormRegister'

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
      {/* <h1>Custom Hooks</h1>
      <AppUser></AppUser>
      <hr />
      <Counter></Counter>
      <hr />
      <RegisterForm></RegisterForm> */}
      {/* <h1>Custom Hook FetchApi</h1>
      <Players></Players> */}
      {/* <h1>UseRef</h1>
      <FormRegister></FormRegister> */}
      {/* <h1>Use Memo</h1>
      <TodoApp></TodoApp> */}
      <CleanUri></CleanUri>
    </>
  )
}