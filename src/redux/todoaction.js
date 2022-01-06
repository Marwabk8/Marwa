import { ADDTASK } from "./types"

export const addtask =(task)=>{
    return {
        type:ADDTASK,
        Payload:task

    }



}