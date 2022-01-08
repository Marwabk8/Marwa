import { ADDTASK, DELETETASK, DONETASK, EDITTASK} from "../types"

export const addtask =(task)=>{
    return {
        type:ADDTASK,
        payload:task

    }



}

export const deletetask =(id)=>{
    return{
    type:DELETETASK,
    payload: id

    }
}


export const donetask =(id)=>{

    return {

        type : DONETASK,
        payload:id
    }
}

export const edittask= (id,newtask)=>{
return {
type: EDITTASK,
payload: {id,newtask}

}


}