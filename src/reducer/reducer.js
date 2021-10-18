import {v4 as uuidv4} from 'uuid'
const initialState={tasks:[{id:uuidv4(),name:"first task", done:false},{id:uuidv4(),name:"second task", done:false}]} 
const reducer=(state=initialState,{type,payload})=>{
    switch (type) {
    
        case "add":
        return({tasks:[{id:uuidv4(),name:payload,done:false},...state.tasks]})
        case "delete":
        return({tasks:[...state.tasks].filter(task=>task.id!== payload)})
        case "taskState":   
        return({tasks:[...state.tasks].map(task=>task.id === payload?{...task,done:!task.done}:task)})
                
        default:
            return state;
    }
}
export default reducer