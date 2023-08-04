import React,{useContext} from 'react'
import TaskContext from '../Context/TaskContext'



function TaskList({id,name,date,item}) {

  const {task,setTasks} = useContext(TaskContext)

  return (
    <div className='bg-teal-200 w-full py-5 mt-5 rounded relative z-0'>
        <div className='flex justify-between px-4'>
                <input type="checkbox" name="done" id="done" />
                <div>{name}</div>
                <div>{item}</div>
                <div>{date}</div>
                <div className='flex space-x-4'>
                  <button className='bg-yellow-300 px-4 py-1 rounded-md text-white border-2 border-yellow-400'>Edit</button>
                  <button className='bg-red-300 px-4 py-1 rounded-md text-white border-2 border-red-400' onClick={(evt)=>{

                    evt.preventDefault()
                    fetch(`http://localhost:4000/list/${id}`,{
                      method:'DELETE',
                      headers:{
                        'content-type':'application/json'
                      }

                      
                    })
                    .then(()=>{
                      console.log("item removed")
                    })

                    const allTasks = [...task];

                    const newTasks =  allTasks.find(task => task.id === id)

                   allTasks.splice(newTasks,1)
                   setTasks(allTasks)
                    
                  }}>Delete</button>
                </div>
        </div>
    </div>
  )
}

export default TaskList