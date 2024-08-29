const { createStore } = require("redux");

const ADD_USER = "ADD_USER"

//1: state:
const initialuser ={
  user:["anis"],
  count:1
}

//2: action- object -type, payload
const incrementUser = (user) => {
  return {
    type: ADD_USER,
    payload: user
  };
};

// 3.reducer for counter

const userReducer = (state = initialuser, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        user:[...state.user,action.payload],
        count: state.count + 1,
      };
   
    default:
      state;
  }
};

//create store
const store = createStore(userReducer);

store.subscribe(()=>{
  console.log(store.getState());
  
})

store.dispatch(incrementUser("islam"))