import { useState ,useEffect} from 'react';
import '../index.css';
import Header from './Header';
import Tasks from './Tasks';
import TaskContext from "../Context/TaskContext"
import TaskModal from "./TaskModal"
import {MdOutlineAddCircle} from 'react-icons/md'

function App() {
  const [task,setTasks] = useState([]);
  const [taskModalVisibility,setTaskModaVisibility] = useState(false)
  useEffect(()=>{
      fetch("http://localhost:4000/list")
        .then(res=>res.json())
        .then((json)=>{
          setTasks(json.data)
          //console.log(json.data)
        })
  },[])
  return (
  <TaskContext.Provider value = {{task,setTasks,taskModalVisibility,setTaskModaVisibility}}>
     
     <div className='relative h-screen '>
     
      <Header/>
      <Tasks/>
    
       <MdOutlineAddCircle className='absolute bottom-5 right-5 text-4xl' onClick={()=>{setTaskModaVisibility(!taskModalVisibility)}}/>
       <TaskModal/>
      </div>
     

    
  </TaskContext.Provider>
   
  );
}

export default App;
