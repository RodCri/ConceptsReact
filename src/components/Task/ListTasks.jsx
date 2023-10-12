import { taskList } from "./Tasks"
import { NewTask } from "./NewTask"
import './ListTasks.css'
import { useState } from "react"
import { Task } from "./Task"

export const ListTasks = () => {

  const [listTasks, setListTasks] = useState(taskList);

  const onAddTask = (val) =>{
    if(val>1) return
    const newTask = {
      id: listTasks.length,
      taskName: val,
      complete: false
    }
    setListTasks([...listTasks, newTask])
  }
  
  return (
    <div className="container">
      <div className="container__form">
        <NewTask addTask={onAddTask}></NewTask>
      </div>
      <div className="container__list">
        <h1 className="title__list">Listado de Tareas</h1>
        <ul className="list__task">
          {
            listTasks.map(ele =>{
              return (
                <Task className="list__item" complete={ele.complete} key={ele.id}>{ele.taskName}</Task>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}
