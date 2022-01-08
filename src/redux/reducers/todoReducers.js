import { ADDTASK, DELETETASK, DONETASK, EDITTASK } from "../types";

const initState = {
    todos: [
      {
        id: 1,
        task: "Sleep",
        done: false
      },
      {
        id: 2,
        task: "Work",
        done: false
      },

      {
        id: 2,
        task: "Eat",
        done: false
      } 
    ]
  };

  function todoReducers(state=initState,action){

  switch (action.type) {
      case ADDTASK:
       return  {...state,todos: [...state.todos,
         { id: Math.random(), done: false, task: action.payload }
       ]};
      case DELETETASK:
        return{...state, todos: state.todos.filter ((el)=> el.id!== action.payload)}

      case DONETASK:
        return{...state, todos:state.todos.map (el=> el.id=== action.payload ?{...el,done:!el.done}:el)}
   
        case EDITTASK:
          return{...state, todos: state.todos.map((el)=>el.id===action.payload.id ?{...el, task:action.payload.newtask}:el)
    
          };



      default:
       return state
  }


  }

      


  export default todoReducers