import React,{useContext} from 'react'
import TaskContext from '../Context/TaskContext'
import TaskList from './TaskList'

function Tasks() {
    const {task} = useContext(TaskContext)
    console.log(task)
  return (
    <div className='container'>
        {
            task.map(task =>(<TaskList key={task._id} id={task._id} name={task.name} date={task.date} item={task.item}/>))
        }
    </div>
  )
}

export default Tasks