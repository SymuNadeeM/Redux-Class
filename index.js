const { createStore } = require("redux");

//defining constants
const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

//1: state:
const initialCounterState = {
  count: 0,
};

const initialUserState = {
  user: [
    {
      name: "Iqbal",
    },
  ],
};

//2: action- object -type, payload
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
const incrementCounterByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
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
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
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

// store.dispatch(incrementCounter())
// store.dispatch(decrementCounter())
store.dispatch(incrementCounterByValue(5));
store.dispatch(incrementCounterByValue(15));
