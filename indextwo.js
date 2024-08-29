const { createStore } = require("redux");

//defining constants
const INCREMENT = "INCREMENT";

//1: state:
const initialCounterState = {
  count: 0,
};

//2: action- object -type, payload

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

// 3.reducer for counter

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      state;
  }
};

//4: store - getState(), despatch(), subscribe()
//create store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch
store.dispatch(incrementCounter())