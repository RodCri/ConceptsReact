import { Target } from './components/TargetCard/Target'
import './App.css'
import { Counter } from './components/Counter/Counter'
import { Giphy } from './components/giphyAPI/Giphy'
import { Following }  from './components/TwitterCard/Following'

export const App = () => {
  return (
    <>
      <div className='cards'>
        <Target name="@rodCri" userId={1} contratado={false} description="FrontEnd Developer"/>
        <Target name="@fraCap" userId={2} contratado={true} description="BackEnd Developer"/>
        <Target name="@derRod" userId={3} contratado={true} description="QA"/>
      </div>
      <div className="counter">
        <Counter aux={10}/>
      </div>
      <Giphy />
      <h2 className="title">Uso de Props Renderizado condicional UseState</h2>
      <div className="container__following">
        <Following name='Miguel Perez' username='midudev' initialFollowing={false}/>
        <Following name='Will Smith' username='willsmith' initialFollowing/>
        <Following name='Elena Toro' username='elenatoro' initialFollowing={false}/>
      </div>
    </>
  )
}