import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
const List = () => {
    const dispatch = useDispatch()
    const Style = {display :"flex", maxWidth:"500px", justifyContent:"space-between", backgroundColor:'#B0C4DE', 
    color: 'black',  padding:"5px",  margin: "10px", marginLeft: "450px",  borderRadius:"8px"}
    const tasks = useSelector(state => state.reducer.tasks)
    const [state, setState] = useState("All")
    return (
        <div>
            <div style={{display:"flex",width:"200px", justifyContent:"space-between", margin:"25px 50px 75px 580px"}}>
                <button onClick={() => setState("Done")}>Done</button>
                <button onClick={() => setState("Not done")}>Not done</button>
                <button onClick={() => setState("All")}>All</button>

            </div>
            <p> {state} Tasks </p>
            {
                (state === "Done" ? tasks.filter(task => task.done === true) : state === "Not done" ? tasks.filter(task => task.done === false) : tasks).map((task) => {
                    return (
                        <div style= {Style}>
                            <span style= {task.done?{textDecoration:"line-through"}:{}} onClick={() => dispatch({ type: "taskState", payload: task.id })}> {task.name} </span>
                            <button onClick={() => dispatch({ type: "delete", payload: task.id })} style={{backgroundColor:"#113CFC", color: 'white'}}> delete </button>
                        </div>
                    )
                })
            }

        </div>
    )
}
export default List
