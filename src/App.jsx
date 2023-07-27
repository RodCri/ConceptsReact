import { Target } from './components/TargetCard/Target'
import './App.css'
import { Counter } from './components/Counter/Counter'
import { Giphy } from './components/giphyAPI/Giphy'

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
    </>
  )
}
