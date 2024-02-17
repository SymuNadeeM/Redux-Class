//defining constants
const INCREMENT ="INCREMENT"
const DECREMENT ="DECREMENT"

//state:
const initialCounterState ={
      count: 0,
}

const initialUserState={
  user:[{
    name: "Iqbal"
  }]
}

//action- object -type, payload
const incrementCounter =()=>{
  return {
    type: INCREMENT
  }
}
const decrementCounter =()=>{
  return {
    type: DECREMENT
  }
}

