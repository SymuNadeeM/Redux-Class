// fetch data using redux-thunk::
// ---------------------------------

//api url - https://jsonplaceholder.typicode.com/todos
//middleware - redux-thunk
//axios api

const GET_TODO_REQUEST = "GET_TODO_REQUEST"
const GET_TODO_SUCCESS = "GET_TODO_SUCCESS"
const GET_TODO_FAILED = "GET_TODO_FAILED"


//1 STATES
const initialTodosState = {
  toDos: [],
  isLoading:false,
  error:null
}


// ACTION
const getTodoRequest =()=>{
  return {
    type: GET_TODO_REQUEST
  }
}

const getTodoFailed =(error)=>{
  return {
    type: GET_TODO_FAILED,
    payload: error
  }
}
const getTodoSuccess =(toDos)=>{
  return {
    type: GET_TODO_SUCCESS,
    payload: toDos
  }
}

//REDUCERS
const todosReducer = (state= initialTodosState, action)=>{
  switch (action.type) {
    case GET_TODO_REQUEST:
      return {
       ...state,
       isLoading:true
      }
    case GET_TODO_SUCCESS:
      return {
       ...state,
       isLoading:false,
       toDos: action.payload
      }
    case GET_TODO_FAILED:
      return {
       ...state,
       isLoading:false,
       error:action.payload
      }
    
      
  
    default:
      return state
  }
}