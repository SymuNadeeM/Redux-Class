const { createStore } = require("redux");

//defining constants
const ADD_USER = "ADD_USER";

//1: state:
const initialState = {
  user: ["Raju"],
  count: 1,
};

//2: action- object -type, payload

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// 3.reducer for counter

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_USER:
      return {
        user:[...state.user, action.payload],
        count: state.count + 1,
      };

    default:
      state;
  }
};
//4: store - getState(), despatch(), subscribe()
//create store
const store = createStore(userReducer);
store.subscribe(() => {
  console.log(store.getState());
});


store.dispatch(addUser("Rohim"));
