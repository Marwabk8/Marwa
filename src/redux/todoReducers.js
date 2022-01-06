import { ADDTASK } from "./types";

const initState = {
    todos: [
      {
        id: 1,
        task: "learn html",
        done: false
      },
      {
        id: 2,
        task: "learn css",
        done: false
      }
    ]
  };

  function todoReducers(state=initState,action){

  switch (action.type) {
      case ADDTASK:
        {}
          
   
  
      default:
          break;
  }


  }

  export default todoReducers