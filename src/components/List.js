import React,{useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
const List = () => {
    const dispatch= useDispatch()
    const style = {display :"flex", maxWidth:"500px", justifyContent:"space-between", backgroundColor:'black', 
    color: 'white',padding:"5px",  margin:"5px", borderRadius:"8px"}
    const styleB = {backgroundColor:'blue', color: 'white'}
    const tasks = useSelector(state => state.reducer.tasks)
    const [state, setState] = useState("All")
    return (
        <div> 
            <div style={{margin:"10px",display:"flex",width:"200px",justifyContent:"space-between"}}>
            <button onClick={()=> setState("Done")}>Done</button>
            <button onClick={()=> setState("Not done")}>Not done</button>
            <button onClick={()=> setState("All")}>All</button>
            
        </div> 
        <p> {state} tasks </p>
            {
                (state==="Done"?tasks.filter(task=>task.done=== true):state==="Not done"?tasks.filter(task=>task.done===false):tasks).map((task) =>{
                 return (
                     <div style= {style}> 
                     <span style= {task.done?{textDecoration:"line-through"}:{}} onClick= {()=>dispatch({type: "taskState",payload:task.id})}> {task.name} </span>
                     <button onClick={()=>dispatch({type:"delete",payload:task.id})}style= {styleB}> delete </button>
                     </div>
                 )   
                })
            }
            
        </div>
    )
}
export default List
