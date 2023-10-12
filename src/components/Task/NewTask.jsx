import { useState } from "react"
import './NewTask.css'
// eslint-disable-next-line react/prop-types
export const NewTask = ({addTask}) => {

  const [task,setTask] = useState('');

  const onInputChange = ({target}) =>{
    setTask(target.value)
  }

  const onSubmit = (event) =>{
    event.preventDefault();
    addTask(task)
  }
  return (
    <>
      <h2 className="newTask__title">Crear nueva tarea</h2>
      <form onSubmit={onSubmit} className="form__task">
        <input className="task__name" type="text" name="task" value={task} placeholder="Ingresar nueva tarea" onChange={onInputChange}/>
      </form>
    </>
  )
}
