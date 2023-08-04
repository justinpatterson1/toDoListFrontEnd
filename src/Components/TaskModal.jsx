import React, { useContext,useState } from 'react'
import TaskContext from '../Context/TaskContext';
import {RxCrossCircled} from 'react-icons/rx'

function TaskModal() {

  const {taskModalVisibility,setTaskModaVisibility} = useContext(TaskContext);
  const [name,setName]= useState({value:''});
  const [type,setType]= useState({value:''});
  const [date,setDate] = useState({value:''})
  return (
    
         

      

          <div className={ taskModalVisibility ? 'w-screen h-screen bg-black flex justify-center items-center absolute top-0 left-0 z-10' :'hidden'}>
         
         <div className='bg-gray-200 p-10 rounded-sm absolute relative'>
          <RxCrossCircled className='absolute top-3 right-3 text-2xl'onClick={()=>{
              setTaskModaVisibility(!taskModalVisibility)
          }}/>
         <form action="" className=''>
                <input type="text" placeholder='Name' className='py-2 mt-5' value={name.value} onChange={(evt)=>{ setName({value:evt.target.value})}} /> 
                <br/>
                <input type="text" placeholder='Type' className='mt-5 py-2' value={type.value} onChange={(evt)=>{setType({value:evt.target.value})}}/> 
                <br/>
                <input type='date' placeholder='Date' className='mt-5 py-2' value={date.value} onChange={(evt=>{setDate({value:evt.target.value})})} />
                <div className='flex space-x-4 justify-center mt-4 py-2'>
                    <button className='bg-green-300 py-2 px-4 rounded-sm'onClick={(evt)=>{
                       
                       evt.preventDefault()

                       fetch(`http://localhost:4000/list/`,{
                        method:'POST',
                        headers:{
                          'content-type':'application/json'
                        },
                        body:JSON.stringify({
                            name:name.value,
                            type:type.value,
                            date:date.value
                        })
  
                        
                      })
                      
                    }}>Insert</button>
                    <button className='bg-red-300 py-2 px-4 rounded-sm' onClick={(evt)=>{

                      evt.preventDefault()
                      setName({value:""})
                      setType({value:""})
                      setDate({value:""})
                    }}>Clear</button>
                </div>
            </form>
         </div>
       
    

         </div>
        
  )
}

export default TaskModal