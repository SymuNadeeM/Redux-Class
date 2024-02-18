//installation: npm i --save redux-logger


const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";


//1 ::: state ::::
//----products
const initialProductState = {
  products: ["apple", "orange"],
  numberOfProducts: 2,
};


//2 ::: actions ::::
 //Products:
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProducts = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};
 

// 3. ::::::reducer:::::::
//product
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
     return state;
  }
};




//4store 
const store = createStore(productReducer, applyMiddleware(logger))
store.subscribe(()=>{
  console.log(store.getState());
})
store.dispatch(getProducts())
store.dispatch(addProducts("Banana"))
